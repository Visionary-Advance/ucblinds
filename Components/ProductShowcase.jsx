'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ProductShowcase({ products, cityName }) {
  const ProductCard = ({ product }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleMobileClick = (e) => {
      // Only handle click on mobile (below lg breakpoint)
      if (window.innerWidth < 1024) {
        setIsExpanded(!isExpanded);
      }
    };

    return (
      <div
        className="relative h-[400px] w-full rounded-[20px] overflow-hidden group cursor-pointer"
        onClick={handleMobileClick}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Gradient overlay with hover effect */}
        <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-5 pb-6 transition-all duration-500 ease-out
          ${isExpanded ? 'h-full' : 'h-[120px]'}
          lg:h-[120px] lg:group-hover:h-full
        `}>
          <div className="h-full flex flex-col justify-end">
            {/* Popular badge */}
            {product.popular && (
              <div className="absolute top-4 right-4 bg-[#357cce] text-white px-3 py-1 rounded-full text-sm font-bold">
                POPULAR
              </div>
            )}

            {/* Product name - always visible */}
            <h3 className="text-2xl text-white font-montserrat font-bold mb-3 leading-tight">
              {product.name}
            </h3>

            {/* Description and button - slide in on hover */}
            <div className={`transition-all duration-750 ease-out overflow-hidden
              ${isExpanded ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}
              lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-[300px] lg:group-hover:opacity-100
            `}>
              <p className="text-white mb-4 leading-relaxed">{product.description}</p>
              <Link
                href="/contact"
                className="bg-[#357cce] hover:bg-[#2d6bb8] text-white font-bold text-sm px-6 py-3 rounded-[5px] transition-colors duration-200 inline-block"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 px-4 lg:px-16 bg-gradient-to-br from-[#357cce] to-[#9fd7e9]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          Window Blinds for {cityName} Homes
        </h2>
        <div className="w-16 h-1 mb-2">
          <Image
            src="/Img/services-underline.svg"
            alt=""
            width={65}
            height={4}
            className="w-full"
          />
        </div>
        <p className="text-xl text-white/90 mb-12 max-w-3xl">
          Choose from our wide selection of premium blinds, shades, and window treatments
          designed for {cityName} homes.
        </p>

        {/* Grid layout - matches ServiceHome pattern */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-5">
          {products.slice(0, 6).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden flex flex-col gap-5 items-center">
          {products.slice(0, 6).map((product, index) => (
            <div key={index} className="w-full max-w-[350px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
