export const metadata = {
  title: "Privacy Policy | UC Blinds",
  description: "Privacy Policy for UC Blinds - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#357CCE] to-[#2563A8] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="font-roboto text-lg md:text-xl text-white/90">
            Last Updated: January 11, 2026
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 space-y-8">

          {/* Main Privacy Policy Section */}
          <section>
            <h2 className="font-montserrat text-3xl font-bold text-gray-900 mb-6">
              UC Blinds Privacy and Policy for Messaging
            </h2>
            <p className="font-roboto text-gray-700 leading-relaxed mb-6">
              At UC Blinds, we respect your privacy. By opting into our SMS messaging service, you agree to the following terms regarding how we handle your data:
            </p>

            <div className="space-y-6">
              {/* Item 1 */}
              <div>
                <h3 className="font-montserrat text-lg font-semibold text-gray-900 mb-2">
                  1. Data Collection:
                </h3>
                <p className="font-roboto text-gray-700 leading-relaxed">
                  We will collect your name, email address, and mobile phone number when you sign up for SMS updates. This information will be gathered through our Contact US form in our website.
                </p>
              </div>

              {/* Item 2 */}
              <div>
                <h3 className="font-montserrat text-lg font-semibold text-gray-900 mb-2">
                  2. Data Usage:
                </h3>
                <p className="font-roboto text-gray-700 leading-relaxed">
                  We use your data solely for general conversational messaging and to provide customer assistance or address customers inquiries.
                </p>
              </div>

              {/* Item 3 */}
              <div>
                <h3 className="font-montserrat text-lg font-semibold text-gray-900 mb-2">
                  3. Data Security:
                </h3>
                <p className="font-roboto text-gray-700 leading-relaxed">
                  We protect your data with secure storage measures to prevent unauthorized access.
                </p>
              </div>

              {/* Item 4 */}
              <div>
                <h3 className="font-montserrat text-lg font-semibold text-gray-900 mb-2">
                  4. Data Retention:
                </h3>
                <p className="font-roboto text-gray-700 leading-relaxed">
                  We retain your information as long as you are subscribed to our SMS service. You may request deletion at any time.
                </p>
              </div>

              {/* Item 5 */}
              <div>
                <h3 className="font-montserrat text-lg font-semibold text-gray-900 mb-2">
                  5. Message and Data Rates may apply:
                </h3>
                <p className="font-roboto text-gray-700 leading-relaxed">
                  Your mobile carrier may charge fees for sending or receiving text messages, especially if you do not have an unlimited texting or data plan. Messages are recurring and message frequency varies based on communication needs.
                </p>
              </div>

              {/* Item 6 */}
              <div>
                <h3 className="font-montserrat text-lg font-semibold text-gray-900 mb-2">
                  6. Contact Information:
                </h3>
                <p className="font-roboto text-gray-700 leading-relaxed">
                  Contact UC Blinds at <a href="sms:541-246-3002" className="text-[#357CCE] hover:underline font-medium">541-246-3002</a> or <a href="mailto:brett@ucblinds.co" className="text-[#357CCE] hover:underline font-medium">brett@ucblinds.co</a> for HELP or to STOP or CANCEL receiving messages.
                </p>
              </div>

              {/* Item 7 */}
              <div>
                <h3 className="font-montserrat text-lg font-semibold text-gray-900 mb-2">
                  7. Opt-Out:
                </h3>
                <p className="font-roboto text-gray-700 leading-relaxed">
                  You can opt out of the SMS list at any time by texting, emailing, or replying STOP or CANCEL to <a href="mailto:brett@ucblinds.co" className="text-[#357CCE] hover:underline font-medium">brett@ucblinds.co</a> or <a href="sms:541-246-3002" className="text-[#357CCE] hover:underline font-medium">541-246-3002</a>. After unsubscribing, you will receive a final SMS to confirm you have unsubscribed and we will remove your number from our list within 24 hours. You can send HELP for additional assistance, and you will receive a text including our phone number, email address, and website. We are here to help you.
                </p>
              </div>

              {/* Item 8 */}
              <div>
                <h3 className="font-montserrat text-lg font-semibold text-gray-900 mb-2">
                  8. Non-Sharing Clauses:
                </h3>
                <ul className="font-roboto text-gray-700 leading-relaxed list-disc pl-6 space-y-2">
                  <li>UC Blinds does not share your data with third parties for marketing purposes.</li>
                  <li>UC Blinds does not sell, rent, or share the collected mobile numbers or mobile opt-in information with anyone.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Legal Footer */}
          <section className="border-t pt-8">
            <p className="font-roboto text-sm text-gray-600 leading-relaxed">
              UC Blinds is a licensed contractor (Oregon CCB #226429) serving Lane County and surrounding regions. We are committed to transparency and protecting your privacy in accordance with applicable laws and regulations.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
