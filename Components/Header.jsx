"use client"
import { Phone, MessageSquareText, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Dynamic classes based on page
  const containerClass = isHomePage ? "absolute" : "relative";
  const logoTextColor = isHomePage ? "text-white" : "text-brand-blue";
  const navTextColor = isHomePage ? "text-white" : "text-brand-blue";
  const navBgColor = isHomePage ? "" : "bg-white shadow-md";
  const menuIconColor = isHomePage ? "text-white" : "text-brand-blue";

  return (
    <>
      {/* Top Blue Bar */}
      <div className={`${containerClass} top-0 left-0 right-0 bg-brand-blue h-[50px] md:h-[50px] z-50`}>
        <div className="max-w-[1850px] mx-auto h-full flex items-center justify-center gap-2 md:gap-4 px-4 md:px-8">
          {/* Text Contact Button */}
          <div className="flex items-center gap-2 bg-neutral-100 rounded-[5px] px-3 md:px-4 py-2 h-[36px] md:h-[40px]">
            <MessageSquareText className="w-5 h-5 md:w-6 md:h-6 text-brand-blue" />
            <span className="text-brand-blue font-inter text-[13px] md:text-[15px]">541-343-8000</span>
          </div>

          {/* Phone Contact Button */}
          <div className="flex items-center gap-2 bg-neutral-100 rounded-[5px] px-3 md:px-4 py-2 h-[36px] md:h-[40px]">
            <Phone className="w-5 h-5 md:w-6 md:h-6 text-brand-blue" />
            <span className="text-brand-blue font-inter text-[13px] md:text-[15px]">541-343-8000</span>
          </div>
        </div>
      </div>

      {/* Logo and Navigation Section */}
      <div className={`${containerClass} ${isHomePage ? 'top-[55px]' : 'top-0'} left-0 right-0 z-40 pt-3  px-4 md:px-8 ${navBgColor}`}>
        <div className="max-w-[1850px] mx-auto">
          {/* Logo and Navigation in one row */}
          <div className="flex items-center pb-4">
            {/* Logo */}
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-[55px] h-[55px] md:w-[80px] md:h-[80px] relative">
                <Image
                  src="/Img/UC_Logo.png"
                  width={80}
                  height={80}
                  alt="UC Blinds Logo"
                  className="object-cover"
                />
              </div>
              <h1 className={`font-montserrat font-bold ${logoTextColor} text-[24px] md:text-[32px]`}>UCBlinds</h1>
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-end gap-6">
              <Link href="/" className={`${navTextColor} font-inter text-[18px] hover:opacity-80 transition-opacity`}>
                Home
              </Link>
              <Link href="/services" className={`${navTextColor} font-inter text-[18px] hover:opacity-80 transition-opacity`}>
                Services
              </Link>
              <Link href="/about" className={`${navTextColor} font-inter text-[18px] hover:opacity-80 transition-opacity`}>
                About
              </Link>
              <Link href="/contact" className={`${navTextColor} font-inter text-[18px] hover:opacity-80 transition-opacity`}>
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`ml-auto lg:hidden ${menuIconColor} p-2`}
              aria-label="Open menu"
            >
              <Menu className="w-8 h-8" />
            </button>

            {/* Desktop Book Now Button - Hidden on mobile */}
            <button className="ml-auto hidden lg:block bg-brand-blue text-white font-montserrat font-bold text-[18px] px-5 py-2 cursor-pointer rounded-[5px] hover:brightness-90 transition duration-150">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slideout Menu */}
      <div
        className={`fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="font-montserrat font-bold text-brand-blue text-[24px]">Menu</h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex flex-col p-6 space-y-4">
            <Link
              href="/"
              className="text-gray-800 font-inter text-[18px] hover:text-brand-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-800 font-inter text-[18px] hover:text-brand-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-gray-800 font-inter text-[18px] hover:text-brand-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 font-inter text-[18px] hover:text-brand-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Book Now Button */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
            <button
              className="w-full bg-brand-blue text-white font-montserrat font-bold text-[18px] px-5 py-3 rounded-[5px] hover:brightness-90 transition duration-150"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
