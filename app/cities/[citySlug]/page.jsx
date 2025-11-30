import { getCityBySlug, getAllCitySlugs } from '@/lib/cities';
import CityHero from '@/Components/CityHero';
import BeforeAfterSlider from '@/Components/BeforeAfterSlider';
import ProductShowcase from '@/Components/ProductShowcase';
import WhyChooseUs from '@/Components/WhyChooseUs';
import LocalInfo from '@/Components/LocalInfo';
import ContactHome from '@/Components/ContactHome';
import { Phone, Star } from 'lucide-react';
import Image from 'next/image';

// Generate static params for all cities (SSG optimization)
export async function generateStaticParams() {
  const slugs = getAllCitySlugs();
  return slugs.map((slug) => ({
    citySlug: slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    return {
      title: 'City Not Found | UCBlinds',
    };
  }

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: `https://ucblinds.com/cities/${city.slug}`,
      siteName: 'UCBlinds',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: city.metaTitle,
      description: city.metaDescription,
    },
    alternates: {
      canonical: `https://ucblinds.com/cities/${city.slug}`,
    },
  };
}

export default async function CityLandingPage({ params }) {
  const { citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">City Not Found</h1>
          <p className="text-xl text-gray-600">
            The city you're looking for doesn't exist in our service areas.
          </p>
        </div>
      </div>
    );
  }

  // Structured data (JSON-LD) for local business SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "UCBlinds",
    "image": city.hero.backgroundImage,
    "@id": `https://ucblinds.com/cities/${city.slug}`,
    "url": `https://ucblinds.com/cities/${city.slug}`,
    "telephone": city.phoneNumber,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": city.state,
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": city.name
    }
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <CityHero city={city} />

      {/* Before/After Comparison Section */}
      <section className="py-16 px-4 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4 text-center">
            See the Transformation
          </h2>
          <div className="w-16 h-1 bg-[#357cce] mb-4 mx-auto"></div>
          <p className="text-xl text-center text-black/70 mb-12 max-w-3xl mx-auto">
            Real {city.name} homes transformed with our premium blind installations.
            Experience the difference quality window treatments can make.
          </p>

          {/* Before/After Sliders */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {city.beforeAfter.map((item) => (
              <div key={item.id}>
                <BeforeAfterSlider
                  beforeImage={item.before}
                  afterImage={item.after}
                  title={item.title}
                  description={item.description}
                />
                <h3 className="text-xl font-bold mt-4 text-black">{item.title}</h3>
                <p className="text-black/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <ProductShowcase products={city.products} cityName={city.name} />

      {/* Why Choose Us */}
      <WhyChooseUs benefits={city.benefits} cityName={city.name} />

      {/* Testimonials Section */}
      <section className="py-16 px-4 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            What {city.name} Customers Say
          </h2>
          <div className="w-16 h-1 bg-[#357cce] mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {city.testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 rounded-[20px] p-6 shadow-lg"
              >
                {/* Star rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#357cce] text-[#357cce]" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-black/80 mb-4 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author info */}
                <div className="border-t border-gray-300 pt-4">
                  <p className="font-bold text-black">{testimonial.name}</p>
                  <p className="text-sm text-black/60">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Info */}
      <LocalInfo
        localInfo={city.localInfo}
        cityName={city.name}
        phoneNumber={city.phoneNumber}
      />

      {/* Final CTA Section */}
      <section className="py-16 px-4 lg:px-16 bg-gradient-to-br from-[#357cce] to-[#9fd7e9]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your {city.name} Home?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Get your free consultation today. No obligation, just expert advice tailored to
            your {city.name} home. Our team is ready to help you find the perfect window
            treatments.
          </p>
          <a
            href={`tel:${city.phoneNumber}`}
            className="bg-white text-[#357cce] font-montserrat font-bold text-[28px] px-12 py-5 rounded-[10px] inline-flex items-center gap-3 hover:bg-gray-100 transition-colors shadow-2xl"
          >
            <Phone className="w-8 h-8" />
            {city.phoneNumber}
          </a>
          <p className="text-white/80 mt-6">
            Or visit our contact page to schedule an in-home consultation
          </p>
        </div>
      </section>

      {/* Existing Contact Form */}
      <ContactHome />
    </div>
  );
}
