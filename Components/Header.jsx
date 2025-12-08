"use client"
import { Phone, MessageSquareText, Menu, X, ChevronDown, Circle } from "lucide-react";
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
  const logoTextColor = isHomePage ? "text-white" : "text-black";
  const navTextColor = isHomePage ? "text-white" : "text-black";
  const navBgColor = isHomePage ? "" : "bg-white shadow-md";
  const menuIconColor = isHomePage ? "text-white" : "text-black";

  return (
    <>
      {/* Top Blue Bar */}
      <div className={`${containerClass} top-0 left-0 right-0 bg-brand-blue h-[50px] md:h-[50px] z-50`}>
        <div className="max-w-[1850px] mx-auto h-full flex items-center justify-center gap-2 md:gap-4 px-4 md:px-8">
          {/* Text Contact Button */}
          <Link href={"sms:541-246-3002"}>
          <div className="flex items-center gap-2 bg-neutral-100 rounded-[5px] px-3 md:px-4 py-2 h-[36px] md:h-[40px]">
            <MessageSquareText className="w-5 h-5 md:w-6 md:h-6 text-brand-blue" />
            <span className="text-brand-blue font-inter text-[13px] md:text-[15px]">541-246-3002</span>
          </div>
          </Link>

          {/* Phone Contact Button */}
          <Link href={"tel:541-343-8000"}>
          <div className="flex items-center gap-2 bg-neutral-100 rounded-[5px] px-3 md:px-4 py-2 h-[36px] md:h-[40px]">
            <Phone className="w-5 h-5 md:w-6 md:h-6 text-brand-blue" />
            <span className="text-brand-blue font-inter text-[13px] md:text-[15px]">541-343-8000</span>
          </div>
          </Link>
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
              <div className="flex flex-col">
                <h1 className={`font-montserrat font-bold ${logoTextColor} text-[24px] md:text-[32px]`}>UC Blinds</h1>
                <div className={`flex items-center gap-1.5 md:gap-2 ${logoTextColor} text-[10px] md:text-[12px] font-inter tracking-wide`}>
                  <span>Clean</span>
                  <Circle className="w-1 h-1 fill-current" />
                  <span>Repair</span>
                  <Circle className="w-1 h-1 fill-current" />
                  <span>Replace</span>
                </div>
              </div>
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
                  className={`absolute top-full left-0 pt-2 w-[280px] transition-all duration-300 ${
                    isServicesDropdownOpen
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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
              </div>

              <Link href="/about-us" className={`${navTextColor} font-inter text-[18px] hover:opacity-80 transition-opacity`}>
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
            <Link href="/contact" className="ml-auto  hidden lg:block" aria-label="Book Now Button">
            <button className="bg-brand-blue text-white font-montserrat font-bold text-[18px] px-5 py-2 cursor-pointer rounded-[5px] hover:brightness-90 transition duration-150">
              Book Now
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Modern Full-Screen Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Gradient Background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-[#357cce] via-[#2d6bb8] to-[#9fd7e9] transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => {
            setIsMobileMenuOpen(false);
            setIsMobileServicesOpen(false);
          }}
        />

        {/* Menu Content */}
        <div className="relative h-full flex flex-col">
          {/* Header with Close Button */}
          <div className="flex items-center justify-between p-6 pt-8">
            <div className={`transition-all duration-500 delay-100 ${
              isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}>
             
            </div>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsMobileServicesOpen(false);
              }}
              className={`text-white hover:bg-white/20 p-2 rounded-full transition-all duration-500 delay-150 ${
                isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
              }`}
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col justify-center px-8 space-y-1">
            {/* Home Link */}
            <Link
              href="/"
              className={`text-white font-montserrat text-[32px] font-bold py-4 hover:translate-x-2 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? '200ms' : '0ms' }}
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsMobileServicesOpen(false);
              }}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className={`transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
              style={{ transitionDelay: isMobileMenuOpen ? '250ms' : '0ms' }}
            >
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full text-left text-white font-montserrat text-[32px] font-bold py-4 flex items-center justify-between hover:translate-x-2 transition-all duration-300"
              >
                Services
                <ChevronDown
                  className={`w-7 h-7 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Services Submenu */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isMobileServicesOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-6 space-y-3 py-2">
                  {services.map((service, index) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="block text-white/90 font-inter text-[18px] hover:text-white hover:translate-x-2 transition-all duration-200 py-2"
                      style={{
                        transitionDelay: isMobileServicesOpen ? `${index * 50}ms` : '0ms',
                        opacity: isMobileServicesOpen ? 1 : 0,
                        transform: isMobileServicesOpen ? 'translateX(0)' : 'translateX(-10px)'
                      }}
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

            {/* About Link */}
            <Link
              href="/about-us"
              className={`text-white font-montserrat text-[32px] font-bold py-4 hover:translate-x-2 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? '300ms' : '0ms' }}
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsMobileServicesOpen(false);
              }}
            >
              About
            </Link>

            {/* Contact Link */}
            <Link
              href="/contact"
              className={`text-white font-montserrat text-[32px] font-bold py-4 hover:translate-x-2 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? '350ms' : '0ms' }}
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsMobileServicesOpen(false);
              }}
            >
              Contact
            </Link>
          </nav>

          {/* Bottom Action Buttons */}
          <div className="p-8 pb-12 space-y-4">
            {/* Book Now Button */}
            <Link
              href="/contact"
              className={`block w-full bg-white text-brand-blue font-montserrat font-bold text-[20px] px-6 py-4 rounded-[10px] hover:bg-gray-100 transition-all duration-300 text-center shadow-2xl ${
                isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? '400ms' : '0ms' }}
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsMobileServicesOpen(false);
              }}
            >
              Book Now
            </Link>

            {/* Call Button */}
            <a
              href="tel:541-343-8000"
              className={`flex items-center justify-center gap-3 w-full bg-white/10 backdrop-blur-sm border-2 border-white text-white font-montserrat font-bold text-[18px] px-6 py-4 rounded-[10px] hover:bg-white/20 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? '450ms' : '0ms' }}
            >
              <Phone className="w-6 h-6" />
              541-343-8000
            </a>

            {/* Text/SMS Button */}
            <a
              href="sms:541-246-3002"
              className={`flex items-center justify-center gap-3 w-full bg-white/10 backdrop-blur-sm border-2 border-white text-white font-montserrat font-bold text-[18px] px-6 py-4 rounded-[10px] hover:bg-white/20 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? '500ms' : '0ms' }}
            >
              <MessageSquareText className="w-6 h-6" />
              541-246-3002
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
