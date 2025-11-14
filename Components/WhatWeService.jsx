"use client"
import { useState } from 'react';
import {
  MoveVertical,
  MoveHorizontal,
  CircleDot,
  Boxes,
  Grid3x3,
  Wind,
  PanelTop,
  Box
} from 'lucide-react';

const blindTypes = [
  {
    name: 'Vertical',
    icon: MoveVertical,
    description: 'Perfect for sliding doors and large windows',
    image: '/Img/vertical-blinds.jpg'
  },
  {
    name: 'Horizontal',
    icon: MoveHorizontal,
    description: 'Classic style for any window size',
    image: '/Img/horizontal-blinds.jpg'
  },
  {
    name: 'Roller',
    icon: CircleDot,
    description: 'Sleek and modern window covering',
    image: '/Img/roller-blinds.jpg'
  },
  {
    name: 'Cellular',
    icon: Boxes,
    description: 'Energy-efficient honeycomb design',
    image: '/Img/cellular-blinds.jpg'
  },
  {
    name: 'Wood',
    icon: Grid3x3,
    description: 'Natural wood for elegant spaces',
    image: '/Img/wood-blinds.jpg'
  },
  {
    name: 'Faux Wood',
    icon: Box,
    description: 'Durable wood-look alternative',
    image: '/Img/faux-wood-blinds.jpg'
  },
  {
    name: 'Roman Shades',
    icon: Wind,
    description: 'Elegant fabric window treatments',
    image: '/Img/roman-shades.jpg'
  },
  {
    name: 'Panel Track',
    icon: PanelTop,
    description: 'Modern sliding panel system',
    image: '/Img/panel-track.jpg'
  }
];

export default function WhatWeService() {
  const [activeBlind, setActiveBlind] = useState(null);

  const handleBoxClick = (index) => {
    // Toggle the active state on click
    setActiveBlind(activeBlind === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-gray-50 relative overflow-">
      {/* Dotted Background Pattern */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(53, 124, 206, 0.15) 3px, transparent 3px)',
          backgroundSize: '24px 24px'
        }}
      ></div>

      {/* Top Fade */}
      <div
        className="absolute top-0 left-0 right-0 h-[550px] pointer-events-none z-[5]"
        style={{
          background: 'linear-gradient(to bottom, rgb(249, 250, 251) 0%, transparent 100%)'
        }}
      ></div>

      {/* Bottom Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-[5]"
        style={{
          background: 'linear-gradient(to top, rgb(249, 250, 251) 0%, transparent 100%)'
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-black text-[36px] lg:text-[48px] mb-4">
            What We Service
          </h2>
          <p className="font-montserrat text-black/70 text-[18px] max-w-2xl mx-auto">
            We specialize in cleaning, repairing, and installing a wide variety of window treatments
          </p>
        </div>

        {/* Grid of Blind Types */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {blindTypes.map((blind, index) => {
            const Icon = blind.icon;
            const isActive = activeBlind === index;

            return (
              <div
                key={blind.name}
                className="relative group cursor-pointer"
                onClick={() => handleBoxClick(index)}
                onMouseEnter={() => setActiveBlind(index)}
                onMouseLeave={() => setActiveBlind(null)}
              >
                {/* Card */}
                <div className={`
                  bg-white rounded-[10px] p-6 lg:p-8
                  border-2 transition-all duration-300
                  flex flex-col items-center justify-center
                  min-h-[160px] lg:min-h-[200px]
                  ${isActive
                    ? 'border-brand-blue bg-brand-blue/5 shadow-lg'
                    : 'border-black/10 hover:border-brand-blue/50'
                  }
                `}>
                  {/* Icon */}
                  <div className={`
                    mb-4 transition-colors duration-300
                    ${isActive ? 'text-brand-blue' : 'text-black/60'}
                  `}>
                    <Icon size={48} strokeWidth={1.5} />
                  </div>

                  {/* Name */}
                  <h3 className={`
                    font-montserrat font-bold text-center text-[16px] lg:text-[18px]
                    transition-colors duration-300
                    ${isActive ? 'text-brand-blue' : 'text-black'}
                  `}>
                    {blind.name}
                  </h3>

                  {/* Short description hint */}
                  <p className="font-montserrat text-black/50 text-[12px] text-center mt-2 lg:block hidden">
                    {isActive ? 'See example above' : 'Hover to preview'}
                  </p>
                  <p className="font-montserrat text-black/50 text-[12px] text-center mt-2 lg:hidden">
                    Tap to view
                  </p>
                </div>

                {/* Floating Image Preview */}
                {isActive && (
                  <>
                    {/* Desktop: Above card */}
                    <div className="hidden lg:block absolute bottom-full left-1/2 -translate-x-1/2 mb-4 z-50 pointer-events-none animate-fadeInScale">
                      <div className="relative bg-white rounded-[15px] shadow-2xl p-4 min-w-[280px] max-w-[320px]">
                        {/* Arrow pointing down to card */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 shadow-lg"></div>

                        {/* Image */}
                        <div className="relative w-full h-[180px] mb-3 bg-neutral-200 rounded-[10px] overflow-hidden">
                          <img
                            src={blind.image}
                            alt={`${blind.name} example`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23357CCE" width="100" height="100"/%3E%3Ctext x="50%25" y="50%25" font-size="14" fill="white" text-anchor="middle" dominant-baseline="middle"%3ENo Image%3C/text%3E%3C/svg%3E';
                            }}
                          />
                        </div>

                        {/* Text Content */}
                        <h4 className="font-montserrat font-bold text-black text-[18px] text-center mb-2">
                          {blind.name}
                        </h4>
                        <p className="font-montserrat text-black/70 text-[14px] text-center leading-relaxed">
                          {blind.description}
                        </p>
                      </div>
                    </div>

                    {/* Mobile: Centered on screen */}
                    <div className="lg:hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] pointer-events-auto animate-fadeInScale">
                      <div className="relative bg-white rounded-[15px] shadow-2xl p-6 w-[85vw] max-w-[360px]">
                        {/* Close button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveBlind(null);
                          }}
                          className="absolute top-4 right-4 text-black/40 hover:text-black/70 transition-colors pointer-events-auto z-10"
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>

                        {/* Image */}
                        <div className="relative w-full h-[220px] mb-4 bg-neutral-200 rounded-[10px] overflow-hidden mt-8">
                          <img
                            src={blind.image}
                            alt={`${blind.name} example`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23357CCE" width="100" height="100"/%3E%3Ctext x="50%25" y="50%25" font-size="14" fill="white" text-anchor="middle" dominant-baseline="middle"%3ENo Image%3C/text%3E%3C/svg%3E';
                            }}
                          />
                        </div>

                        {/* Text Content */}
                        <h4 className="font-montserrat font-bold text-black text-[20px] text-center mb-2">
                          {blind.name}
                        </h4>
                        <p className="font-montserrat text-black/70 text-[15px] text-center leading-relaxed">
                          {blind.description}
                        </p>
                      </div>
                    </div>

                    {/* Mobile backdrop overlay */}
                    <div
                      className="lg:hidden fixed inset-0 bg-black/50 z-[99] pointer-events-auto"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveBlind(null);
                      }}
                    ></div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
