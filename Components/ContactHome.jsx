'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import BookingForm from './BookingForm';
import ParallaxBackground from './ParallaxBackground';

export default function ContactHome() {
  const [openFaqIndex, setOpenFaqIndex] = useState(2); // Third item open by default

    const faqs = [
        {
            id: 1,
            question: 'What types of blinds do you clean and repair?',
            answer: {
                intro: 'We service all types of window treatments including:',
                list: [
                    'Vertical blinds',
                    'Horizontal blinds',
                    'Roller shades',
                    'Faux Wood',
                    'Cellular shades',
                    'Wood blinds',
                    'Motorized coverings'
                ],
                outro: 'Our team is equipped to handle any brand or style.'
            }
        },
        {
            id: 2,
            question: 'Does UCBlinds offer free consultations?',
            answer: {
                intro: 'Yes. We offer free on-site consultations throughout Lane County, Springfield, Eugene, Roseburg, Bend, Florence, Woodburn, and nearby areas.\n\nDuring your consultation, we\'ll:',
                list: [
                    'Take precise measurements',
                    'Show you samples and design options',
                    'Provide a clear, no-obligation quote'
                ],
                outro: 'You can call 541-343-8000 or text 541-246-3002 to schedule your appointment.'
            }
        },
        {
            id: 3,
            question: 'What makes UC Blinds different from other companies?',
            answer: "Our difference lies in our complete service lifecycle. We don’t just sell and install blinds — we care for them for life. When you purchase from us, you’ll receive discounted ultrasonic cleaning for as long as you own your blinds or shades. We also specialize in cellular shade cleaning, a service most competitors can’t safely provide.",
        },
  ];

  const toggleFaq = (index) => {
    // If clicking the same FAQ, just close it
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
      return;
    }

    // If a different FAQ is open, close it first, then open the new one
    if (openFaqIndex !== null) {
      setOpenFaqIndex(null); // Close current
      setTimeout(() => {
        setOpenFaqIndex(index); // Open new one after close animation
      }, 300); // Match the transition duration
    } else {
      // No FAQ is open, just open the clicked one
      setOpenFaqIndex(index);
    }
  };

  return (
    <>
      {/* Desktop Layout - Parallax with FAQs inside */}
      <div className="hidden lg:block">
        <ParallaxBackground
          imageSrc="/Img/main_photo.webp"
          alt="Contact background"
          speed={0.1}
          overlayClass="bg-black/30 lg:bg-black/50"
          className="w-full pb-10 min-h-[800px]"
        >
          <div className="py-16 px-4 md:px-8 lg:px-16 pb-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Column - Title and FAQs */}
                <div className="order-1 min-h-0">
                  <h2 className="text-4xl tracking-[-1px] lg:text-6xl font-bold text-white mb-2">
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
                  <p className="text-xl text-white/80 mb-12 max-w-2xl">
                    Ready for a free quote, design consultation, or professional cleaning service? We'd love to hear from you.
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
                          <h3 className="text-faq-question font-bold text-black pr-4">
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
                            openFaqIndex === index ? 'max-h-[600px]' : 'max-h-0'
                          }`}
                        >
                          <div className="px-6 pb-6">
                            {typeof faq.answer === 'string' ? (
                              <p className="text-faq-answer text-black leading-relaxed whitespace-pre-line">
                                {faq.answer}
                              </p>
                            ) : (
                              <div className="text-faq-answer text-black leading-relaxed space-y-3">
                                <p className="whitespace-pre-line">{faq.answer.intro}</p>
                                {faq.answer.list && (
                                  <ul className="list-disc pl-6 space-y-1">
                                    {faq.answer.list.map((item, i) => (
                                      <li key={i}>{item}</li>
                                    ))}
                                  </ul>
                                )}
                                {faq.answer.outro && <p>{faq.answer.outro}</p>}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Booking Form */}
                <div className="order-2 mx-auto self-start mt-[205px]">
                  <BookingForm />
                </div>
              </div>
            </div>
          </div>
        </ParallaxBackground>
      </div>

      {/* Mobile Layout - Short hero, white FAQ section, overlapping form */}
      <div className="lg:hidden">
        {/* Short Hero - Just Title */}
        <ParallaxBackground
          imageSrc="/Img/main_photo.webp"
          alt="Contact background"
          speed={0.1}
          overlayClass="bg-black/40"
          className="w-full h-[450px] pb-64"
        >
          <div className="py-16 px-4">
            <h2 className="text-4xl tracking-[-1px] font-bold text-white mb-2">
              Contact Us Today
            </h2>
            <div className="w-16 h-1 mb-6">
              <Image
                src="/Img/contact-underline.svg"
                alt=""
                width={65}
                height={4}
                className="w-full"
              />
            </div>
            <p className="text-lg text-white/90 max-w-xl">
              Ready for a free quote, design consultation, or professional cleaning service? We'd love to hear from you.
            </p>
          </div>
        </ParallaxBackground>

        {/* Overlapping Form */}
        <div className="-mt-48 px-4 mb-8 relative z-10">
          <BookingForm />
        </div>

        {/* FAQs on White Background */}
        <div className="bg-gray-50 py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.id}
                  className={`bg-white rounded-[15px] shadow-md transition-all duration-300 ${
                    openFaqIndex === index ? 'border-2 border-[#9fd7e9]' : ''
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <h3 className="text-base font-bold text-black pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-6 h-6 text-black flex-shrink-0 transition-transform duration-300 ${
                        openFaqIndex === index ? 'rotate-180' : 'rotate-[-90deg]'
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaqIndex === index ? 'max-h-[600px]' : 'max-h-0'
                    }`}
                  >
                    <div className="px-5 pb-5">
                      {typeof faq.answer === 'string' ? (
                        <p className="text-sm text-black/80 leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>
                      ) : (
                        <div className="text-sm text-black/80 leading-relaxed space-y-3">
                          <p className="whitespace-pre-line">{faq.answer.intro}</p>
                          {faq.answer.list && (
                            <ul className="list-disc pl-6 space-y-1">
                              {faq.answer.list.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          )}
                          {faq.answer.outro && <p>{faq.answer.outro}</p>}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
