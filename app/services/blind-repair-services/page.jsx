'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function RepairPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-brand-blue-light to-brand-blue py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-white space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Blind Repair Services
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
                src="/Img/workers-cleaning-blinds.png"
                alt="UC Blinds professional team repairing window blinds"
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
              Fix What You Have and Save Money
            </h2>
            <p className="text-xl text-black/80 leading-relaxed">
              Many blinds can be restored instead of replaced. Let us diagnose and repair the issue quickly.
            </p>
          </div>

          {/* Common Repairs */}
          <div className="bg-white p-8 md:p-12 rounded-[20px] shadow-sm mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">
              Common Home Blind Repairs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-brand-blue rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-xl font-semibold text-black mb-2">
                    Broken Lift Cords or Pull Mechanisms
                  </h4>
                  <p className="text-black/70">
                    We replace worn or broken lift cords and pull mechanisms to restore smooth operation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-brand-blue rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-xl font-semibold text-black mb-2">
                    Bent Slats and Vanes
                  </h4>
                  <p className="text-black/70">
                    We straighten or replace damaged slats and vanes to restore the appearance of your blinds.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-brand-blue rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-xl font-semibold text-black mb-2">
                    Tilt Mechanisms Not Rotating
                  </h4>
                  <p className="text-black/70">
                    We fix or replace faulty tilt mechanisms so your blinds open and close properly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-brand-blue rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-xl font-semibold text-black mb-2">
                    Headrail and Track Issues
                  </h4>
                  <p className="text-black/70">
                    We repair or replace damaged headrails and tracks for vertical blinds and sliding panels.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="bg-white p-8 rounded-[20px] shadow-sm mb-12">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">Our Repair Process</h3>
            <div className="max-w-3xl  space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="text-lg text-black/80">
                    We pick up the blinds
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="text-lg text-black/80">
                    Diagnose and fix the issue at our facility
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="text-lg text-black/80">
                    Return them ready to use, professionally reinstalled
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/contact">
              <button className="bg-brand-blue hover:brightness-90 text-white font-bold text-lg px-10 py-4 rounded-[5px] transition-colors duration-200">
                Get a Blind Repair Quote
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
