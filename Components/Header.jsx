"use client"
import { Phone, MessageSquareText, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { services } from "@/lib/services";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
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

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <Link
                  href="/services"
                  className={`${navTextColor} font-inter text-[18px] hover:opacity-80 transition-opacity flex items-center gap-1`}
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </Link>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 mt-2 w-[280px] bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
                    isServicesDropdownOpen
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="py-2">
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        className="block px-4 py-3 text-gray-800 hover:bg-brand-blue/10 hover:text-brand-blue transition-colors font-inter text-[16px]"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

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
        onClick={() => {
          setIsMobileMenuOpen(false);
          setIsMobileServicesOpen(false);
        }}
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
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsMobileServicesOpen(false);
              }}
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
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsMobileServicesOpen(false);
              }}
            >
              Home
            </Link>

            {/* Services Dropdown for Mobile */}
            <div className="space-y-2">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full text-left text-gray-800 font-inter text-[18px] hover:text-brand-blue transition-colors py-2 flex items-center justify-between"
              >
                Services
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Dropdown Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isMobileServicesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-4 space-y-2 pt-2">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="block text-gray-600 font-inter text-[16px] hover:text-brand-blue transition-colors py-2"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileServicesOpen(false);
                      }}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="text-gray-800 font-inter text-[18px] hover:text-brand-blue transition-colors py-2"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsMobileServicesOpen(false);
              }}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 font-inter text-[18px] hover:text-brand-blue transition-colors py-2"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsMobileServicesOpen(false);
              }}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Book Now Button */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
            <button
              className="w-full bg-brand-blue text-white font-montserrat font-bold text-[18px] px-5 py-3 rounded-[5px] hover:brightness-90 transition duration-150"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsMobileServicesOpen(false);
              }}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
