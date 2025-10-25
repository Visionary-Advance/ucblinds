'use client';
import { useState } from 'react';
import BookingForm from "@/Components/BookingForm";
import Image from "next/image";
import { ChevronDown } from 'lucide-react';




export default function Contact(){
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const faqs = [
        {
            id: 1,
            question: 'What types of blinds do you clean and repair?',
            answer: 'We service all types of window treatments including vertical blinds, horizontal blinds, roller shades, Roman shades, cellular shades, and wood blinds. Our team is equipped to handle any brand or style.',
        },
        {
            id: 2,
            question: 'How long does the cleaning and repair process take?',
            answer: 'Most cleaning and repair services are completed within 24-48 hours. For larger projects or extensive repairs, we will provide you with a detailed timeline during your initial consultation.',
        },
        {
            id: 3,
            question: 'Do you offer on-site or off-site services?',
            answer: 'We offer both on-site and off-site services depending on the scope of work. Simple repairs can often be done on-site, while deep cleaning is performed at our facility to ensure the best results.',
        },
        {
            id: 4,
            question: 'What areas do you service?',
            answer: 'We proudly serve the greater metropolitan area and surrounding communities. Contact us to confirm service availability in your specific location.',
        },
        {
            id: 5,
            question: 'How much does blind cleaning and repair cost?',
            answer: 'Pricing varies based on the type, size, and condition of your blinds. We offer free quotes and competitive pricing. Contact us today for a personalized estimate.',
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

    return(
        <>

        <section className="w-full">
            <h2 className="font-montserrat lg:w-10/12 text-center py-8 mx-auto text-[2.86rem] lg:text-6xl text-black font-bold">Contact Us Now</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2">

                <div className="col-span-1 lg:translate-x-10 mx-auto lg:w-5/12 w-11/12 z-40 mb-10">
                    <BookingForm />
                </div>
                <div className="col-span-1 w-11/12 mx-auto lg:w-full relative my-auto">
                    <Image src={'/Img/window-blinds-repair.png'} width={900} height={900} alt="Window Blinds" className="rounded-3xl lg:-translate-x-72" />
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 text-center">
                    Frequently Asked Questions
                </h2>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={faq.id}
                            className={`bg-white rounded-[15px] transition-all duration-300  ${
                                openFaqIndex === index ? 'border-2 border-[#9fd7e9]' : 'border border-black '
                            }`}
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full cursor-pointer flex items-center justify-between p-6 text-left"
                            >
                                <h3 className="text-lg lg:text-xl font-bold text-black pr-4">
                                    {faq.question}
                                </h3>
                                <ChevronDown
                                    className={`w-8 h-8 lg:w-9 lg:h-9 text-black flex-shrink-0 transition-transform duration-300 ${
                                        openFaqIndex === index ? 'rotate-180' : 'rotate-[-90deg]'
                                    }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden  transition-all duration-300 ${
                                    openFaqIndex === index ? 'max-h-96' : 'max-h-0'
                                }`}
                            >
                                <div className="px-6 pb-6">
                                    <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        </>
    );
}