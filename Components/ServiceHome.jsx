'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { services } from '@/lib/services';

export default function ServiceHome() {
  // Service Card Component with hover/tap effect
  const ServiceCard = ({ service }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleMobileClick = (e) => {
      // Only handle click on mobile (below lg breakpoint)
      if (window.innerWidth < 1024) {
        setIsExpanded(!isExpanded);
      }
    };

    // Determine the initial visible height based on title length
    const titleNeedsMoreSpace = service.title.length > 30;
    const initialOffset = titleNeedsMoreSpace ? '90px' : '70px';

    return (
      <div
        className="relative h-[400px] w-full rounded-[20px] overflow-hidden group cursor-pointer"
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

        {/* Sliding overlay */}
        <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-5 pb-6 transition-all duration-500 ease-out
          ${isExpanded ? 'h-full' : 'h-[90px]'}
          lg:h-[90px] lg:group-hover:h-full
        `}>
          <div className="h-full flex flex-col justify-end">
            {/* Title - always visible */}
            <h3 className="text-2xl text-white font-normal mb-4 leading-tight">{service.title}</h3>

            {/* Description and button - slide in */}
            <div className={`transition-all duration-750 ease-out overflow-hidden
              ${isExpanded ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}
              lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-[300px] lg:group-hover:opacity-100
            `}>
              <p className="text-base text-white leading-relaxed mb-4">{service.shortDescription}</p>
              <Link
                href={`/services/${service.slug}`}
                className="bg-[#357cce] hover:bg-[#2d6bb8] text-white font-bold text-sm px-6 py-3 rounded-[5px] transition-colors duration-200 inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative w-full py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br to-[#9fd7e9] from-[#357cce]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Services</h2>
          <div className="w-16 h-1 mb-6">
            <Image
              src="/Img/services-underline.svg"
              alt=""
              width={65}
              height={4}
              className="w-full"
            />
          </div>
          <p className="text-xl md:text-xl text-white/90 max-w-3xl">
            Whether your blinds need deep cleaning, expert repair, or full replacement, our team makes the process easy and stress-free with fast turnaround and professional service.
          </p>
        </div>

        {/* Desktop Layout - Hidden on mobile */}
        <div className="hidden lg:block">
          {/* Main 3 services */}
          <div className="grid grid-cols-3 gap-5">
            <ServiceCard service={services[0]} />
            <ServiceCard service={services[1]} />
            <ServiceCard service={services[2]} />
          </div>
        </div>

        {/* Mobile Layout - Hidden on desktop */}
        <div className="lg:hidden flex flex-col gap-5 items-center">
          <div className="w-full max-w-[350px]">
            <ServiceCard service={services[0]} />
          </div>
          <div className="w-full max-w-[350px]">
            <ServiceCard service={services[1]} />
          </div>
          <div className="w-full max-w-[350px]">
            <ServiceCard service={services[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}
