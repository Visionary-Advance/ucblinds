import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

// Use service role key for server-side operations (bypasses RLS)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Function to refresh Jobber access token
async function refreshJobberToken(refreshToken, accountId) {
  console.log('Attempting to refresh Jobber token...');

  const response = await fetch('https://api.getjobber.com/api/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: process.env.JOBBER_CLIENT_ID,
      client_secret: process.env.JOBBER_CLIENT_SECRET,
    }),
  });

  const responseText = await response.text();
  console.log('Token refresh raw response:', responseText);
  console.log('Response status:', response.status);

  if (!response.ok) {
    console.error('Token refresh failed with status:', response.status);
    throw new Error(`Failed to refresh Jobber token: ${responseText}`);
  }

  const data = JSON.parse(responseText);

  // Update tokens in Supabase
  await supabase
    .from('jobber_accounts')
    .update({
      access_token: data.access_token,
      refresh_token: data.refresh_token,
    })
    .eq('account_id', accountId);

  return data.access_token;
}

// Function to create or find a client in Jobber
async function createJobberClient(accessToken, formData) {
  const mutation = `
    mutation CreateClient($input: ClientCreateInput!) {
      clientCreate(input: $input) {
        client {
          id
          firstName
          lastName
        }
        userErrors {
          message
          path
        }
      }
    }
  `;

  const variables = {
    input: {
      firstName: formData.firstName,
      lastName: formData.lastName,
      emails: [
        {
          address: formData.email,
          primary: true,
        },
      ],
      phones: [
        {
          number: formData.phone,
          primary: true,
        },
      ],
      ...(formData.company && {
        companyName: formData.company,
      }),
    },
  };

  const response = await fetch('https://api.getjobber.com/api/graphql', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'X-JOBBER-GRAPHQL-VERSION': '2025-01-20',
    },
    body: JSON.stringify({
      query: mutation,
      variables: variables,
    }),
  });

  const result = await response.json();
  console.log('Jobber Client Create Response:', JSON.stringify(result, null, 2));

  // Check for token expiration
  if (result.message && result.message.toLowerCase().includes('access token expired')) {
    throw new Error('Unauthorized - Access token expired');
  }

  if (result.errors) {
    console.error('GraphQL Errors:', result.errors);
    throw new Error(result.errors[0].message);
  }

  if (!result.data || !result.data.clientCreate) {
    console.error('Unexpected response structure:', result);
    throw new Error('Unexpected response from Jobber API');
  }

  if (result.data.clientCreate.userErrors && result.data.clientCreate.userErrors.length > 0) {
    console.error('User Errors:', result.data.clientCreate.userErrors);
    throw new Error(result.data.clientCreate.userErrors[0].message);
  }

  return result.data.clientCreate.client.id;
}

// Function to create a request in Jobber
async function createJobberRequest(accessToken, clientId, formData) {
  const mutation = `
    mutation CreateRequest($input: RequestCreateInput!) {
      requestCreate(input: $input) {
        request {
          id
          title
        }
        userErrors {
          message
          path
        }
      }
    }
  `;

  // Build the title with name, company, and key service details
  const titleParts = [
    formData.company
      ? `${formData.firstName} ${formData.lastName} - ${formData.company}`
      : `${formData.firstName} ${formData.lastName}`,
    `| ${formData.serviceType.join(', ')}`,
    `| ${formData.blindTypes.join(', ')}`,
    `| Urgency: ${formData.urgency}`,
    `| Prefers: ${formData.contactMethod.charAt(0).toUpperCase() + formData.contactMethod.slice(1)}`
  ];

  const title = titleParts.join(' ');

  const variables = {
    input: {
      clientId: clientId,
      title: title,
    },
  };

  const response = await fetch('https://api.getjobber.com/api/graphql', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'X-JOBBER-GRAPHQL-VERSION': '2025-01-20',
    },
    body: JSON.stringify({
      query: mutation,
      variables: variables,
    }),
  });

  const result = await response.json();

  // Log the full response for debugging
  console.log('Jobber API Response:', JSON.stringify(result, null, 2));

  // Check for token expiration
  if (result.message && result.message.toLowerCase().includes('access token expired')) {
    throw new Error('Unauthorized - Access token expired');
  }

  if (result.errors) {
    console.error('GraphQL Errors:', result.errors);
    throw new Error(result.errors[0].message);
  }

  if (!result.data || !result.data.requestCreate) {
    console.error('Unexpected response structure:', result);
    throw new Error('Unexpected response from Jobber API');
  }

  if (result.data.requestCreate.userErrors && result.data.requestCreate.userErrors.length > 0) {
    console.error('User Errors:', result.data.requestCreate.userErrors);
    throw new Error(result.data.requestCreate.userErrors[0].message);
  }

  return result.data.requestCreate.request;
}

export async function POST(request) {
  try {
    const formData = await request.json();

    // Fetch Jobber credentials from Supabase
    const { data: credentials, error: fetchError } = await supabase
      .from('jobber_accounts')
      .select('access_token, refresh_token, account_id')
      .single();

    if (fetchError || !credentials) {
      return NextResponse.json(
        { error: 'Failed to fetch Jobber credentials' },
        { status: 500 }
      );
    }

    let accessToken = credentials.access_token;

    try {
      // Step 1: Create the client
      const clientId = await createJobberClient(accessToken, formData);
      console.log('Created client with ID:', clientId);

      // Step 2: Create the request with the clientId
      const jobberRequest = await createJobberRequest(accessToken, clientId, formData);

      return NextResponse.json({
        success: true,
        requestId: jobberRequest.id,
        title: jobberRequest.title,
        clientId: clientId,
      });
    } catch (error) {
      // If it fails (possibly due to expired token), try to refresh and retry
      if (error.message.includes('Unauthorized') || error.message.includes('401')) {
        console.log('Access token expired, refreshing...');

        accessToken = await refreshJobberToken(
          credentials.refresh_token,
          credentials.account_id
        );

        // Retry: Step 1: Create the client
        const clientId = await createJobberClient(accessToken, formData);
        console.log('Created client with ID:', clientId);

        // Retry: Step 2: Create the request with the clientId
        const jobberRequest = await createJobberRequest(accessToken, clientId, formData);

        return NextResponse.json({
          success: true,
          requestId: jobberRequest.id,
          title: jobberRequest.title,
          clientId: clientId,
        });
      }

      throw error;
    }
  } catch (error) {
    console.error('Error creating Jobber request:', error);
    return NextResponse.json(
      {
        error: 'Failed to create Jobber request',
        details: error.message
      },
      { status: 500 }
    );
  }
}
