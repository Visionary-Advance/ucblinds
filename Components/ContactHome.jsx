'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import BookingForm from './BookingForm';

export default function ContactHome() {
  const [openFaqIndex, setOpenFaqIndex] = useState(2); // Third item open by default

  const faqs = [
    {
      id: 1,
      question: 'How do I measure my blinds?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem',
    },
    {
      id: 2,
      question: 'How do I measure my blinds?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem',
    },
    {
      id: 3,
      question: 'How do I measure my blinds?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem',
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(index);
  };

  return (
    <section className="relative w-full">
      {/* Background Image - Fixed Position */}
      <div className="absolute inset-0 min-h-[940px]">
        <div className="sticky top-0 w-full h-screen">
          <Image
            src="/Img/contact-bg.png"
            alt="Contact background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30 lg:bg-black/50"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Title and FAQs */}
            <div className="order-1 min-h-0">
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-2">
                Contact Us Today
              </h2>
              <div className="w-16 h-1 mb-8">
                <Image
                  src="/Img/contact-underline.svg"
                  alt=""
                  width={65}
                  height={4}
                  className="w-full"
                />
              </div>
              <p className="text-2xl text-white/80 mb-12 max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>

              {/* FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={faq.id}
                    className={`bg-white/95 rounded-[15px] transition-all duration-300 ${
                      openFaqIndex === index ? 'border-2 border-[#9fd7e9]' : ''
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <h3 className="text-xl lg:text-3xl font-bold text-black pr-4">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={`w-8 h-8 lg:w-9 lg:h-9 text-black flex-shrink-0 transition-transform duration-300 ${
                          openFaqIndex === index ? 'rotate-180' : 'rotate-[-90deg]'
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openFaqIndex === index ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-lg lg:text-2xl text-black leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Booking Form */}
            <div className="order-2">
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
