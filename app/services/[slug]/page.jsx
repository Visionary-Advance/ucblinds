import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getServiceBySlug, services } from '@/lib/services';

export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full bg-gradient-to-br to-[#9fd7e9] from-[#357cce] mb-48 lg:mb-[400px]">
        <div className=" mx-auto px-4 md:px-8 lg:px-16 pt-10 pb-16">
          <div className=" gap-8 lg:gap-20 items-center">
            {/* Text Content */}
            <div className="lg:space-y-6 lg:max-w-8/12 mx-auto grid grid-cols-1 lg:grid-cols-2">
              <h1 className="text-5xl lg:text-6xl font-bold text-white my-auto">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                {service.heroDescription}
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative w-full mx-auto translate-y-10 lg:translate-y-20 h-[300px] md:h-[400px] lg:h-[550px] lg:w-[915px] rounded-[20px] overflow-hidden">
              <Image
                src={service.heroImage}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
          </div>

          {/* Desktop Layout - Alternating */}
          <div className="hidden lg:block space-y-24">
            {service.process.map((step, index) => (
              <div
                key={step.step}
                className={`grid grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'direction-rtl' : ''
                }`}
              >
                {/* Text Content */}
                <div className={`space-y-4 ${index % 2 === 1 ? 'order-2' : 'order-1'}`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {step.step}. {step.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Image */}
                <div className={`relative w-full h-[381px] rounded-[20px] overflow-hidden ${index % 2 === 1 ? 'order-1' : 'order-2'}`}>
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Layout - Stacked */}
          <div className="lg:hidden space-y-12">
            {service.process.map((step) => (
              <div key={step.step} className="space-y-6">
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {step.step}. {step.title}
                </h3>

                {/* Image */}
                <div className="relative w-full h-[240px] md:h-[277px] rounded-[20px] overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Description */}
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-16">
            
            <Link
              href="/contact"
              className="bg-[#357cce] hover:bg-[#2d6bb8] text-white font-bold text-lg px-8 py-4 rounded-[5px] transition-colors duration-200"
            >
             {service.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Other Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services
              .filter((s) => s.id !== service.id)
              .map((otherService) => (
                <Link
                  key={otherService.id}
                  href={`/services/${otherService.slug}`}
                  className="group relative h-[200px] rounded-[20px] overflow-hidden"
                >
                  <Image
                    src={otherService.image}
                    alt={otherService.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300 flex items-end p-6">
                    <h3 className="text-xl font-bold text-white">
                      {otherService.title}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Generate static params for all service pages
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata for each service page
export async function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} | UCBlinds`,
    description: service.shortDescription,
  };
}
