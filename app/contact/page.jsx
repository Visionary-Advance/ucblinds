'use client';
import { useState } from 'react';
import BookingForm from "@/Components/BookingForm";
import Image from "next/image";
import { ChevronDown, MapPin, Phone, MessageSquare, Mail } from 'lucide-react';




export default function Contact(){
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

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
            question: 'Do you offer free consultations?',
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
        {
            id: 4,
            question: 'Do you offer mobile or on-site cleaning?',
            answer: 'No, we currently perform all cleaning in-shop only to ensure the best results. This allows us to use specialized equipment and maintain full control over water temperature, cleaning time, and drying conditions — ensuring every blind or shade leaves spotless and fully intact.',
        },
        {
            id: 5,
            question: 'How does your ultrasonic blind cleaning process work?',
            answer: {
                intro: 'Our ultrasonic cleaning uses sound wave technology to gently remove dirt, dust, grease, and allergens from every part of your blinds — even cords and crevices.',
                list: [
                    'It\'s gentle on delicate materials like cellular and honeycomb shades.',
                    'It\'s eco-friendly, using biodegradable solutions and minimal water.',
                    'It\'s thorough, restoring your window coverings to a like-new condition without fading or damage.'
                ],
                outro: 'This process is completed in our Springfield facility for quality control and consistency.'
            }
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
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="col-span-1 lg:col-span-2 lg:translate-x-10 lg:ps-[calc((100%-1340px)/2)] w-11/12 mx-auto lg:mx-0 lg:w-auto lg:max-w-6xl">
                    <h2 className="font-montserrat lg:text-left text-center py-8 text-[2.86rem] lg:text-6xl text-black font-bold">Contact Us Now</h2>
                    <p className='font-montserrat lg:text-left text-center pb-8 text-lg lg:text-xl font-semibold'>Ready for a free quote, design consultation, or professional cleaning service? We'd love
to hear from you.</p>
                </div>
            </div>
            


            <div className="grid grid-cols-1 lg:grid-cols-2">

                <div className="col-span-1 lg:translate-x-10 mx-auto lg:w-5/12 w-11/12 z-40 mb-10">
                    <BookingForm />
                </div>
                <div className="col-span-1 w-10/12 mx-auto lg:w-full relative my-auto">
                    <Image src={'/Img/Contact_Img.png'} width={800} height={800} alt="Window Blinds" className="rounded-3xl lg:-translate-x-72" />
                </div>
            </div>

            {/* Contact Info Grid - STYLE 5: Gradient Background Blocks */}
            <div className="w-11/12 mt-5 lg:w-10/12 mx-auto pb-16">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {/* Address */}
                    <div className="col-span-2 lg:col-span-1 bg-gradient-to-br from-[#357CCE]/10 to-[#9FD7E9]/10 rounded-3xl p-6 hover:from-[#357CCE]/20 hover:to-[#9FD7E9]/20 transition-all">
                        <MapPin className="w-10 h-10 text-[#357CCE] mb-4" />
                        <p className="font-montserrat text-xs text-gray-600 uppercase tracking-wider mb-2 font-bold">Address</p>
                        <p className="font-montserrat text-sm lg:text-base text-black font-semibold leading-relaxed">
                            PO Box 70539<br/>Springfield, OR 97475
                        </p>
                    </div>

                    {/* Phone */}
                    <div className="bg-gradient-to-br from-[#357CCE]/10 to-[#9FD7E9]/10 rounded-3xl p-6 hover:from-[#357CCE]/20 hover:to-[#9FD7E9]/20 transition-all">
                        <Phone className="w-10 h-10 text-[#357CCE] mb-4" />
                        <p className="font-montserrat text-xs text-gray-600 uppercase tracking-wider mb-2 font-bold">Call</p>
                        <a href="tel:541-343-8000" className="font-montserrat text-sm lg:text-base text-black font-semibold hover:text-[#357CCE]">
                            541-343-8000
                        </a>
                    </div>

                    {/* Text */}
                    <div className="bg-gradient-to-br from-[#357CCE]/10 to-[#9FD7E9]/10 rounded-3xl p-6 hover:from-[#357CCE]/20 hover:to-[#9FD7E9]/20 transition-all">
                        <MessageSquare className="w-10 h-10 text-[#357CCE] mb-4" />
                        <p className="font-montserrat text-xs text-gray-600 uppercase tracking-wider mb-2 font-bold">Text</p>
                        <a href="sms:541-246-3002" className="font-montserrat text-sm lg:text-base text-black font-semibold hover:text-[#357CCE]">
                            541-246-3002
                        </a>
                    </div>

                    {/* Email */}
                    <div className="col-span-2 lg:col-span-1 bg-gradient-to-br from-[#357CCE]/10 to-[#9FD7E9]/10 rounded-3xl p-6 hover:from-[#357CCE]/20 hover:to-[#9FD7E9]/20 transition-all">
                        <Mail className="w-10 h-10 text-[#357CCE] mb-4" />
                        <p className="font-montserrat text-xs text-gray-600 uppercase tracking-wider mb-2 font-bold">Email</p>
                        <a href="mailto:brett@ucblinds.co" className="font-montserrat text-sm lg:text-base text-black font-semibold hover:text-[#357CCE] break-all">
                            brett@ucblinds.co
                        </a>
                    </div>
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section className="pb-16 px-4 md:px-8 lg:px-16 bg-gray-50">
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
                                    {typeof faq.answer === 'string' ? (
                                        <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    ) : (
                                        <div className="text-base lg:text-lg text-gray-700 leading-relaxed">
                                            <p className="mb-3 whitespace-pre-line">{faq.answer.intro}</p>
                                            <ul className="list-disc list-inside space-y-2 mb-3 ml-2">
                                                {faq.answer.list.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                            <p>{faq.answer.outro}</p>
                                        </div>
                                    )}
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