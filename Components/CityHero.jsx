'use client';
import ParallaxBackground from '@/Components/ParallaxBackground';
import { Phone, Award, Truck, CheckCircle } from 'lucide-react';

export default function CityHero({ city }) {
  const handleCallClick = () => {
    window.location.href = `tel:${city.phoneNumber}`;
  };

  return (
    <ParallaxBackground
      imageSrc={city.hero.backgroundImage}
      alt={`${city.name} window blinds`}
      speed={0.2}
      overlayClass="bg-black/40"
      className="w-full pt-[45px] lg:pt-0 min-h-[600px] lg:min-h-[700px]"
    >
      <div className="flex items-center justify-center min-h-[600px] lg:min-h-[700px] px-4 lg:px-8">
        <div className="max-w-[1200px] mx-auto text-center">
          {/* City badge */}
          <div className="inline-block bg-white/90 px-6 py-3 rounded-full mb-6">
            <p className="font-montserrat font-bold text-[#357cce] text-[18px]">
              Serving {city.name}, {city.state}
            </p>
          </div>

          {/* Main heading */}
          <h1 className="font-montserrat font-bold text-white text-[48px] lg:text-[72px] leading-tight mb-6">
            {city.hero.title}
          </h1>

          {/* Subheading */}
          <p className="font-roboto text-white text-[20px] lg:text-[28px] mb-8 max-w-[800px] mx-auto">
            {city.hero.description}
          </p>

          {/* CTA Button - Prominent phone call */}
          <button
            onClick={handleCallClick}
            className="bg-[#357cce] hover:bg-[#2d6bb8] text-white font-montserrat font-bold text-[20px] px-12 py-5 rounded-[10px] transition-colors duration-200 flex items-center gap-3 mx-auto shadow-2xl mb-8"
          >
            <Phone className="w-8 h-8" />
            Call Now: {city.phoneNumber}
          </button>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-white">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg">Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6" />
              <span className="text-lg">Discounted Cleaning Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-6 h-6" />
              <span className="text-lg">Expert Installation</span>
            </div>
          </div>
        </div>
      </div>
    </ParallaxBackground>
  );
}
