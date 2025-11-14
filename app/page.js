
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
    <div className="relative w-full min-h-screen overflow-hidden">

      {/* Hero Section with Parallax Background */}
      <ParallaxBackground
        imageSrc="/Img/rollerhades_creme.webp"
        alt="Window blinds background"
        speed={0.2}
        overlayClass="bg-black/30"
        className="w-full mt-[50px] pb-10 lg:pb-0 min-h-[900px] lg:min-h-[991px]"
      >
        <div className="justify-center lg:pt-[200px] pt-[120px] px-4 lg:px-8 pb-16 lg:pb-0">
          <div className="max-w-[1500px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-start">
              {/* Left Content */}
              <div className="space-y-6 lg:space-y-8 lg:w-10/12">
                <h2 className="font-montserrat tracking-[-1px] font-bold text-white text-[40px] lg:text-[4rem] leading-tight">
                 Premium Window Coverings &amp; Ultrasonic Blind Cleaning in Lane
County and Beyond
                </h2>
                <p className="font-roboto text-white text-[20px] lg:text-[24px] leading-normal max-w-full lg:max-w-[731px]">
                 Residential Blind Cleaning, Blind Repair & Blind Replacement
Convenient pickup service and fast turnaround — often same day within Lane County.
Call, Text or Fill out our form to Get a Free Home Estimate

                </p>
              </div>
              {/* Desktop Form - Inside background */}
              <div className="hidden lg:block">
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </ParallaxBackground>

      {/* Mobile Form - Overlapping background and white space */}
      <div className="lg:hidden bg-gray-50 -mb-52">
        <div className="px-4 -translate-y-64 flex justify-center">
          <BookingForm />
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
