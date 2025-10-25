'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { services } from '@/lib/services';

export default function ServicesPage() {
  // Service Card Component with hover/tap effect
  const ServiceCard = ({ service }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleMobileClick = (e) => {
      // Only handle click on mobile (below lg breakpoint)
      if (window.innerWidth < 1024) {
        setIsExpanded(!isExpanded);
      }
    };

    return (
      <div
        className="relative h-[280px] w-[320px] rounded-[20px] overflow-hidden group cursor-pointer"
        onClick={handleMobileClick}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Hover/Tap State - Slides up from bottom */}
        <div className={`absolute inset-x-0 bottom-0 bg-black/65 p-4 flex flex-col justify-between transition-transform duration-300 ease-in-out h-full
          ${isExpanded ? 'translate-y-0' : 'translate-y-[calc(100%-60px)]'}
          lg:translate-y-[calc(100%-60px)] lg:group-hover:translate-y-0
        `}>
          <div>
            <h3 className="text-2xl text-white font-normal mb-3">{service.title}</h3>
            <p className={`text-lg text-white transition-opacity duration-300 delay-100
              ${isExpanded ? 'opacity-100' : 'opacity-0'}
              lg:opacity-0 lg:group-hover:opacity-100
            `}>{service.shortDescription}</p>
          </div>
          <Link
            href={`/services/${service.slug}`}
            className={`bg-[#357cce] hover:bg-[#2d6bb8] text-white font-bold text-sm px-6 py-3 rounded-[5px] transition-colors duration-200 w-fit
              ${isExpanded ? 'opacity-100' : 'opacity-0'}
              lg:opacity-0 lg:group-hover:opacity-100
            `}
          >
            Learn More
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white mt-[50px]">
      {/* Hero Section */}
      <section className="relative w-full py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br to-[#9fd7e9] from-[#357cce]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Our Services</h1>
            <div className="w-16 h-1 mb-6">
              <Image
                src="/Img/services-underline.svg"
                alt=""
                width={65}
                height={4}
                className="w-full"
              />
            </div>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl">
              Professional blind cleaning, repair, installation, and consultation services for residential and commercial properties.
            </p>
          </div>

          {/* Desktop Layout - Hidden on mobile */}
          <div className="hidden lg:block">
            {/* Row 1 - 3 items */}
            <div className="grid grid-cols-3 gap-5 mb-5">
              <ServiceCard service={services[0]} />
              <ServiceCard service={services[1]} />
              <ServiceCard service={services[2]} />
            </div>

            {/* Row 2 - 2 items centered */}
            <div className="flex justify-center gap-5">
              <div className="w-full max-w-[calc(33.333%-0.67rem)]">
                <ServiceCard service={services[3]} />
              </div>
              <div className="w-full max-w-[calc(33.333%-0.67rem)]">
                <ServiceCard service={services[4]} />
              </div>
            </div>
          </div>

          {/* Mobile Layout - Hidden on desktop */}
          <div className="lg:hidden flex flex-col gap-5 items-center">
            {services.map((service) => (
              <div key={service.id} className="w-full max-w-[280px]">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Why Choose UCBlinds?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-[#357cce]">Licensed & Insured</h3>
              <p className="text-gray-700">We're fully licensed and insured to handle your window treatments with complete care and professionalism.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-[#357cce]">Expert Technicians</h3>
              <p className="text-gray-700">Our trained professionals have years of experience with all types of window coverings.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-[#357cce]">Eco-Friendly Solutions</h3>
              <p className="text-gray-700">We use environmentally friendly cleaning solutions that are safe for your family and pets.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-[#357cce]">State-of-the-Art Equipment</h3>
              <p className="text-gray-700">Our ultrasonic cleaning machine provides the deepest clean possible without damaging your blinds.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-[#357cce]">Transparent Pricing</h3>
              <p className="text-gray-700">No hidden fees. You'll know exactly what you're paying for before we start any work.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-[#357cce]">Satisfaction Guaranteed</h3>
              <p className="text-gray-700">We're not satisfied until you are. Your happiness is our top priority.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Contact us today for a free quote and consultation. We'll help you restore your blinds to like-new condition.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#357cce] hover:bg-[#2d6bb8] text-white font-bold text-lg px-8 py-4 rounded-[5px] transition-colors duration-200"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
