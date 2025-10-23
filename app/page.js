"use client"
import Image from "next/image";
import Header from "@/Components/Header";
import BookingForm from "@/Components/BookingForm";
import AboutHome from "@/Components/AboutHome";
import ServiceHome from "@/Components/ServiceHome";
import TestimonialsHome from "@/Components/TestimonialsHome";
import BlindsVid from "@/Components/BlindsVid";
import PDFHome from "@/Components/PDFHome";
import ContactHome from "@/Components/ContactHome";

export default function LandingPage() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Header Component */}
      <Header />

      {/* Background Image */}
      <div className="absolute left-0 top-[50px] w-full h-[941px]">
        <Image
          src="/Img/bali-roller-shades.png"
          alt="Window blinds background"
          fill
          className="object-fill"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Main Content */}
      <div className="relative justify-center z-30  lg:pt-[200px] pt-[150px] px-4 lg:px-8">
        <div className="max-w-[1650px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8 w-10/12">
              <h2 className="font-montserrat font-bold text-white text-[40px] lg:text-[4rem] leading-tight">
                Schedule Professional Blind Cleaning & Repair Services
              </h2>
              <p className="font-roboto text-white text-[20px] lg:text-[24px] leading-normal max-w-full lg:max-w-[731px]">
                We specialize in deep cleaning and expert repair of all window blind types, restoring them to like-new condition while saving you money on replacements.
              </p>
            </div>
            <div className="">
            {/* Booking Form Component */}
            <BookingForm />

            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <AboutHome />

      {/* Services Section */}
      <ServiceHome />

      {/* Testimonials Section */}
      <TestimonialsHome />

      {/* Video Section */}
      <BlindsVid />

      {/* PDF Download Section */}
      <PDFHome />

      {/* Contact Section */}
      <ContactHome />
    </div>
  );
}
