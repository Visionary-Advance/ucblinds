export const metadata = {
  title: "Limited Warranty | UC Blinds",
  description: "Limited Warranty for UC Blinds products - Learn about our warranty coverage for workmanship and materials.",
};

export default function Warranty() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#357CCE] to-[#2563A8] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-4">
            Limited Warranty
          </h1>
          <p className="font-roboto text-lg md:text-xl text-white/90">
            UC Blinds Product Warranty
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 space-y-8">

          <section>
            <h2 className="font-montserrat text-3xl font-bold text-gray-900 mb-6">
              LIMITED WARRANTY
            </h2>

            <div className="space-y-6">
              <p className="font-roboto text-gray-700 leading-relaxed">
                UC Blinds (the &ldquo;Company&rdquo;) warrants its products to be free from defects in workmanship and materials for a period of 1 year from the date of purchase.
              </p>

              <p className="font-roboto text-gray-700 leading-relaxed">
                The Company is not responsible for any incidental costs or consequential damages. Abuse, misuse, and inappropriate application of UC Blinds products are not covered under this warranty and are the responsibility of the tenants&apos; or Property Management.
              </p>

              <p className="font-roboto text-gray-700 leading-relaxed">
                The Company reserves the right to make final determination on all warranty claims. The Company will replace, fund or issue credit at its sole and absolute discretion. The Company will not communicate directly with an end user. All warranty claims must be processed through the customer of record.
              </p>

              <p className="font-roboto text-gray-700 leading-relaxed">
                State laws vary and may affect this warranty.
              </p>
            </div>
          </section>

          {/* Legal Footer */}
          <section className="border-t pt-8">
            <p className="font-roboto text-sm text-gray-600 leading-relaxed">
              UC Blinds is a licensed contractor (Oregon CCB #226429) serving Lane County and surrounding regions.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}