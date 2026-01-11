import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Facebook, Linkedin, Circle } from 'lucide-react';
import { getAllCities } from '@/lib/cities';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const cities = getAllCities();

  return (
    <footer className="w-full bg-gray-50 py-8 px-4 md:px-8 lg:px-16">
      <div className=" mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-16 mb-8">
          {/* Logo, Brand, and Social Media */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="relative w-[90px] h-[90px] flex-shrink-0">
                <Image
                  src="/Img/UC_Logo.png"
                  alt="UCBlinds Logo"
                  fill
                  className=""
                />
              </div>
              <div className="flex flex-col mt-2">
                <h2 className="text-3xl font-montserrat font-bold text-black">UC Blinds</h2>
                <div className="flex items-center gap-2 text-black/80 text-[12px] font-inter tracking-wide mt-1">
                  <span>Clean</span>
                  <Circle className="w-1 h-1 fill-current" />
                  <span>Repair</span>
                  <Circle className="w-1 h-1 fill-current" />
                  <span>Replace</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pl-[25px]">
              <h3 className="text-xl font-bold text-black mb-4">Find Us on Social Media</h3>
              <div className="flex gap-4">
               <Link href="https://www.instagram.com/ucblindsllc/" className="text-black hover:text-[#357cce] transition-colors">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="https://www.facebook.com/UltraCleanLLC.net" className="text-black hover:text-[#357cce] transition-colors">
                <Facebook className="w-6 h-6" />
              </Link>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold text-black mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className=" text-black/90 hover:text-[#357cce] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className=" text-black/90 hover:text-[#357cce] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className=" text-black/90 hover:text-[#357cce] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold text-black mb-4">Useful Links</h3>
            <ul className="space-y-3">
              {/* <li>
                <Link href="/privacy" className=" text-black/90 hover:text-[#357cce] transition-colors">
                  Privacy Policy
                </Link>
              </li> */}
              <li>
                <Link href="/warranty" className=" text-black/90 hover:text-[#357cce] transition-colors">
                  Warranty
                </Link>
              </li>
              <li>
                <Link href="/limited-lifetime-cleaning-terms" className=" text-black/90 hover:text-[#357cce] transition-colors">
                  Limited Lifetime Cleaning Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className=" text-black/90 hover:text-[#357cce] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas We Serve */}
          <div>
            <h3 className="text-xl font-bold text-black mb-4">Areas We Serve</h3>
            <ul className="space-y-3">
              {cities.map((city) => (
                <li key={city.id}>
                  <Link
                    href={`/cities/${city.slug}`}
                    className="text-black/90 hover:text-[#357cce] transition-colors"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8 mb-8">
          <div className="w-full h-px bg-gray-300"></div>

          {/* Logo and Brand */}
          <div className="flex items-center gap-4">
            <div className="relative w-[55px] h-[55px] flex-shrink-0">
              <Image
                src="/Img/UC_Logo.png"
                alt="UC Blinds Logo"
                fill
                className=""
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold text-black">UC Blinds</h2>
              <div className="flex items-center gap-1.5 text-black/80 text-[11px] font-inter tracking-wide mt-0.5">
                <span>Clean</span>
                <Circle className="w-1 h-1 fill-current" />
                <span>Repair</span>
                <Circle className="w-1 h-1 fill-current" />
                <span>Replace</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">Find Us on Social Media</h3>
            <div className="flex gap-4">
              <Link href="https://www.instagram.com/ucblindsllc/" className="text-black hover:text-[#357cce] transition-colors">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="https://www.facebook.com/UltraCleanLLC.net" className="text-black hover:text-[#357cce] transition-colors">
                <Facebook className="w-6 h-6" />
              </Link>
              
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-lg text-black/90 hover:text-[#357cce] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-lg text-black/90 hover:text-[#357cce] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-lg text-black/90 hover:text-[#357cce] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-lg text-black/90 hover:text-[#357cce] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="text-lg text-black/90 hover:text-[#357cce] transition-colors">
                  Warranty
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-lg text-black/90 hover:text-[#357cce] transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas We Serve */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">Areas We Serve</h3>
            <ul className="space-y-3">
              {cities.map((city) => (
                <li key={city.id}>
                  <Link
                    href={`/cities/${city.slug}`}
                    className="text-lg text-black/90 hover:text-[#357cce] transition-colors"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 pt-6 text-center">
          <p className="text-sm text-black">Copyright © {currentYear} UC Blinds</p>
          <p className="text-sm text-black/30">Powered By <a href='https://visionaryadvance.com' target='_blank' rel='noopener noreferrer'>Visionary Advance</a></p>
        </div>
      </div>
    </footer>
  );
}
