'use client';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsHome() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'John D.',
      role: 'Customer',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      id: 2,
      name: 'John D.',
      role: 'Customer',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      id: 3,
      name: 'John D.',
      role: 'Customer',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      id: 4,
      name: 'Jane S.',
      role: 'Customer',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      id: 5,
      name: 'Mike J.',
      role: 'Customer',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const StarRating = ({ rating }) => (
    <div className="flex gap-1 items-center">
      {[...Array(rating)].map((_, i) => (
        <div key={i} className="w-5 h-5 relative">
          <Image src="/Img/star-icon.svg" alt="" fill className="object-contain" />
        </div>
      ))}
    </div>
  );

  const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white rounded-[20px] shadow-[0px_4px_4px_0px_rgba(53,124,206,0.5)] p-6 h-[400px] flex flex-col justify-between w-full max-w-[340px] mx-auto lg:mx-0">
      {/* Quote Mark */}
      <div>
        <p className="font-roboto text-[#357cce] text-[150px] leading-none font-bold -mt-6 -ml-2">"</p>

        {/* Testimonial Text */}
        <p className="text-black text-xl md:text-2xl font-normal -mt-16 px-2">
          {testimonial.text}
        </p>
      </div>

      {/* Author Info */}
      <div>
        <div className="w-full h-px mb-3">
          <Image src="/Img/divider-line.svg" alt="" width={390} height={1} className="w-full" />
        </div>
        <div className="flex items-center justify-between px-2">
          <div>
            <p className="text-black text-2xl md:text-[28px] font-bold mb-0">{testimonial.name}</p>
            <p className="text-black/50 text-xl md:text-2xl italic">{testimonial.role}</p>
          </div>
          <StarRating rating={testimonial.rating} />
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative w-full py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          {/* Title and Navigation Arrows */}
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-4xl md:text-5xl font-bold text-black">Testimonials</h2>

            {/* Navigation Arrows - All screens */}
            <div className="flex gap-3 lg:gap-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-gray-400 hover:bg-gray-500 flex items-center justify-center transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-[#357cce] hover:bg-[#2d6bb8] flex items-center justify-center transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
              </button>
            </div>
          </div>

          {/* Underline and Description */}
          <div>
            <div className="w-16 h-1 mb-6">
              <Image
                src="/Img/testimonials-underline.svg"
                alt=""
                width={65}
                height={4}
                className="w-full"
              />
            </div>
            <p className="text-xl md:text-2xl text-black/80 max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>

        {/* Desktop Layout - 3 Cards Carousel */}
        <div className="hidden lg:block ">
          <div className="overflow-hidden pb-2">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-[calc(33.333%-1rem)] flex-shrink-0">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout - Carousel */}
        <div className="lg:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 pb-2 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? 'w-5 h-2.5 bg-[#357cce]'
                    : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
