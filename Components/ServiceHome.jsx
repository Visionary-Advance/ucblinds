'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function ServiceHome() {
  const services = [
    {
      id: 1,
      title: 'Residential Blinds',
      image: '/Img/window-blinds-repair.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
      id: 2,
      title: 'Blinds Repair',
      image: '/Img/window-blinds-repair.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
      id: 3,
      title: 'Blinds Cleaning',
      image: '/Img/window-blinds-repair.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
      id: 4,
      title: 'New Blinds',
      image: '/Img/window-blinds-repair.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
      id: 5,
      title: 'Blind Quotes',
      image: '/Img/window-blinds-repair.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing',
    },
  ];

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
            `}>{service.description}</p>
          </div>
          <button className={`bg-[#357cce] hover:bg-[#2d6bb8] text-white font-bold text-sm px-6 py-3 rounded-[5px] transition-colors duration-200 w-fit
            ${isExpanded ? 'opacity-100' : 'opacity-0'}
            lg:opacity-0 lg:group-hover:opacity-100
          `}>
            Next
          </button>
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
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
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
          <div className="flex  justify-center gap-5">
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
  );
}
