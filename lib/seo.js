// Shared SEO metadata helper.
// Ensures every page emits a complete, consistent set of Open Graph / Twitter
// tags (og:title, og:description, og:url, og:image, og:type) plus a canonical
// URL. metadataBase is configured once in app/layout.js, so relative image
// paths resolve to absolute URLs automatically.

export const SITE_URL = 'https://www.ucblinds.co';
export const SITE_NAME = 'UC Blinds';

const DEFAULT_OG_IMAGE = {
  url: '/Img/UC_Logo.png',
  alt: 'UC Blinds logo',
};

// Build a full Next.js metadata object from a few page-specific fields.
// path should be the route's pathname starting with "/" (e.g. "/contact").
export function buildMetadata({ title, description, path = '/', images }) {
  const ogImages = images || [DEFAULT_OG_IMAGE];

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${path === '/' ? '' : path}`,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'website',
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImages.map((img) => img.url),
    },
  };
}
