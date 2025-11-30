'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function ReplacementPage() {
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
                Blind Replacement & New Installation
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
                src="/Img/New_Blinds_Img.avif"
                alt="UC Blinds professional team installing new window blinds"
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
              When It's Time for Something New
            </h2>
            <p className="text-xl text-black/80 leading-relaxed">
              If your blinds are worn out, outdated, or beyond repair, we help you choose beautiful replacements that fit your home and budget.
            </p>
          </div>

          {/* Available Styles */}
          <div className="bg-white p-8 md:p-12 rounded-[20px] shadow-sm mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">
              Available Styles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-black mb-2">Faux-Wood Blinds</h4>
                <p className="text-black/70">
                  Classic elegance with durability and moisture resistance
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-5V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-black mb-2">Roller Shades & Solar Shades</h4>
                <p className="text-black/70">
                  Modern style with UV protection and energy efficiency
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-black mb-2">Vertical Blinds</h4>
                <p className="text-black/70">
                  Perfect for sliding doors and large windows
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-black mb-2">Cellular/Honeycomb Shades</h4>
                <p className="text-black/70">
                  Energy-efficient with superior insulation
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-black mb-2">Privacy & Light Control</h4>
                <p className="text-black/70">
                  Customizable options for every room's needs
                </p>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="bg-white p-8 rounded-[20px] shadow-sm mb-12">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">Our Installation Process</h3>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="text-lg text-black/80">
                    We handle measurements, ordering, and delivery
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="text-lg text-black/80">
                    Custom blinds are made to your exact specifications
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="text-lg text-black/80">
                    Professional installation at your convenience
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/contact">
              <button className="bg-brand-blue hover:brightness-90 text-white font-bold text-lg px-10 py-4 rounded-[5px] transition-colors duration-200">
                Book a Free Product Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
