'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Check, Zap, Circle } from 'lucide-react';

export default function CleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-brand-blue-light to-brand-blue py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Small text above */}
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-white space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Residential Blind Cleaning
              </h1>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                At UCBlinds, we help homeowners maintain and refresh their window coverings. Whether your blinds need deep cleaning, repair, or full replacement, our team makes the process easy and stress-free.
              </p>

              <div>
                <p className="text-xl font-semibold mb-4">What sets us apart:</p>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>We come to your home to remove your blinds for cleaning or repair</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>Fast turnaround — often same-day or within 24 hours in Lane County</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>Ultrasonic cleaning that removes dirt, grease, dust, pollen, and pet dander</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>Expert repairs to restore blinds you already love</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span>Stylish replacement options when it's time to upgrade</span>
                  </li>
                </ul>
              </div>

             
            </div>

            {/* Right side - Image */}
            <div className="relative w-full h-[400px] lg:h-[550px] rounded-[20px] overflow-hidden">
              <Image
                src="/Img/blind-cleaning.webp"
                alt="UC Blinds professional team cleaning window blinds"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Content */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Fresh, Clean, and Like-New Again
            </h2>
            <p className="text-xl text-black/80 leading-relaxed">
              Blinds can trap dust, allergens, cooking residue, and pet hair. Our ultrasonic blind cleaning process deep-cleans every surface, including cords and mechanisms.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-6 rounded-[10px] shadow-sm">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <p className="text-lg text-black/80">
                We pick up your blinds from your home
              </p>
            </div>

            <div className="bg-white p-6 rounded-[10px] shadow-sm">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <p className="text-lg text-black/80">
                Clean them using ultrasonic technology
              </p>
            </div>

            <div className="bg-white p-6 rounded-[10px] shadow-sm">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <p className="text-lg text-black/80">
                Then return and rehang them for you
              </p>
            </div>

            <div className="bg-white p-6 rounded-[10px] shadow-sm">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <p className="text-lg text-black/80">
                Same-day or 24-hour turnaround available in Lane County
              </p>
            </div>
          </div>

          {/* Perfect For Section */}
          <div className="bg-white p-8 rounded-[20px] shadow-sm">
            <h3 className="text-2xl font-bold text-black mb-6">Perfect for:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <Circle className="w-2 h-2 fill-brand-blue text-brand-blue flex-shrink-0" />
                <span className="text-lg text-black/80">Kitchens</span>
              </div>
              <div className="flex items-center gap-3">
                <Circle className="w-2 h-2 fill-brand-blue text-brand-blue flex-shrink-0" />
                <span className="text-lg text-black/80">Bathrooms</span>
              </div>
              <div className="flex items-center gap-3">
                <Circle className="w-2 h-2 fill-brand-blue text-brand-blue flex-shrink-0" />
                <span className="text-lg text-black/80">High-traffic rooms</span>
              </div>
              <div className="flex items-center gap-3">
                <Circle className="w-2 h-2 fill-brand-blue text-brand-blue flex-shrink-0" />
                <span className="text-lg text-black/80">Allergy-sensitive homes</span>
              </div>
              <div className="flex items-center gap-3">
                <Circle className="w-2 h-2 fill-brand-blue text-brand-blue flex-shrink-0" />
                <span className="text-lg text-black/80">Rentals</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link href="/contact">
              <button className="bg-brand-blue hover:brightness-90 text-white font-bold text-lg px-10 py-4 rounded-[5px] transition-colors duration-200">
                Schedule Blind Cleaning Pickup
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
