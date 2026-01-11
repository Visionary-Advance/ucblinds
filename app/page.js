
import Image from "next/image";
import BookingForm from "@/Components/BookingForm";
import AboutHome from "@/Components/AboutHome";
import ServiceHome from "@/Components/ServiceHome";
import TestimonialsHome from "@/Components/TestimonialsHome";
import BlindsVid from "@/Components/BlindsVid";
import PDFHome from "@/Components/PDFHome";
import ContactHome from "@/Components/ContactHome";
import ParallaxBackground from "@/Components/ParallaxBackground";
import ScrollToTop from "@/Components/ScrollToTop";
import WhatWeService from "@/Components/WhatWeService";

export default function LandingPage() {
  return (
    <div className="relative w-full min-h-screen">

      {/* Hero Section with Parallax Background */}
      <ParallaxBackground
        imageSrc="/Img/energy-efficient-cellular-shades-home.jpg"
        alt="Living room featuring energy-efficient cellular shades on bay windows"
        speed={0.2}
        overlayClass="bg-black/30"
        className="w-full -translate-y-2 mt-[45px] pb-10 lg:pb-0 min-h-[700px] "
      >
        <div className="justify-center lg:pt-[200px] pt-[120px] px-4 lg:px-8 pb-16 lg:pb-0">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-start">
              {/* Left Content */}
              <div className="space-y-6 lg:space-y-8 lg:w-11/12">
                <h2 className="font-montserrat tracking-[-1px] font-bold text-white text-[40px] lg:text-[3.75em] leading-tight">
                Custom Window Coverings &amp; Professional Ultrasonic Blind Cleaning  
                </h2>
                <p className="font-roboto text-white text-[20px] lg:text-[24px] leading-normal max-w-full lg:max-w-[731px]">
                 We provide new window coverings, installation, and blind cleaning for Residential properties, Rentals, Property Management, and Businesses. Convenient pickup service with flexible turnaround options.
                </p>
              </div>
              {/* Desktop Form - Inside background */}
              <div className="hidden lg:block lg:scale-90 lg:origin-top">
                <BookingForm />
                <p className="text-white/90 text-center text-sm mt-2 max-w-[400px] mx-auto leading-relaxed">
                  Local, licensed, and family-owned — Oregon CCB #226429, proudly serving Lane County and surrounding regions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ParallaxBackground>

      {/* Mobile Form - Overlapping background and white space */}
      <div className="lg:hidden bg-gray-50 -mb-30">
        <div className="px-4 -translate-y-26.5 flex flex-col items-center">
          <BookingForm />
          <p className="text-black/70 text-center text-sm mt-2 max-w-[400px] mx-auto leading-relaxed px-4">
            Local, licensed, and family-owned — Oregon CCB #226429, proudly serving Lane County and surrounding regions.
          </p>
        </div>
      </div>

      {/* About Section */}
      <AboutHome />

      {/* What We Service Section */}
      <WhatWeService />

      <TestimonialsHome />

      {/* Services Section */}
      <ServiceHome />

      {/* Testimonials Section */}

      {/* Video Section */}
      {/* <BlindsVid /> */}

      {/* PDF Download Section */}
      {/* <PDFHome /> */}

      {/* Contact Section */}
      <ContactHome />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
