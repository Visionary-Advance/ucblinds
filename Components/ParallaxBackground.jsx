'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

/**
 * ParallaxBackground - Reusable component for parallax scroll effect
 * @param {string} imageSrc - Path to background image
 * @param {string} alt - Alt text for image
 * @param {number} speed - Parallax speed (0.1-1.0, lower = more dramatic)
 * @param {string} overlayClass - Tailwind classes for overlay (optional)
 * @param {React.ReactNode} children - Content to display on top of background
 * @param {string} className - Additional classes for section wrapper
 */
export default function ParallaxBackground({
  imageSrc,
  alt = 'Background image',
  speed = 0.3,
  overlayClass = 'bg-black/30',
  children,
  className = ''
}) {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollPosition = window.scrollY;
        const elementTop = rect.top + scrollPosition;
        const offset = (scrollPosition - elementTop) * speed;
        setScrollY(offset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <section ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY}px)`,
          willChange: 'transform'
        }}
      >
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        {overlayClass && (
          <div className={`absolute inset-0 ${overlayClass}`}></div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
