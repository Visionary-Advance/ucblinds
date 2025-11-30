'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title = '',
  description = ''
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  // Handle mouse/touch move
  const handleMove = (clientX) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  // Mouse events
  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e) => {
    if (isDragging) handleMove(e.clientX);
  };

  // Touch events
  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  // Click to position
  const handleClick = (e) => {
    if (!isDragging) handleMove(e.clientX);
  };

  // Global mouse up listener
  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalMouseMove = (e) => {
      if (isDragging) handleMove(e.clientX);
    };

    if (isDragging) {
      window.addEventListener('mouseup', handleGlobalMouseUp);
      window.addEventListener('mousemove', handleGlobalMouseMove);
    }

    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/10] rounded-[20px] overflow-hidden select-none cursor-ew-resize shadow-2xl"
      onClick={handleClick}
      onTouchMove={handleTouchMove}
    >
      {/* BEFORE Image - Full Width */}
      <div className="absolute inset-0 bg-gray-200">
        <Image
          src={beforeImage}
          alt={`Before - ${title}`}
          fill
          className="object-cover"
          priority
          onError={(e) => {
            // Fallback for missing images
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* BEFORE Label */}
        <div className="absolute bottom-4 left-4 bg-black/80 text-white px-4 py-2 rounded-[8px] font-montserrat font-bold text-sm backdrop-blur-sm">
          BEFORE
        </div>
      </div>

      {/* AFTER Image - Clipped by Slider */}
      <div
        className="absolute inset-0 bg-gray-300"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <Image
          src={afterImage}
          alt={`After - ${title}`}
          fill
          className="object-cover"
          priority
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* AFTER Label */}
        <div className="absolute bottom-4 right-4 bg-[#357cce] text-white px-4 py-2 rounded-[8px] font-montserrat font-bold text-sm backdrop-blur-sm">
          AFTER
        </div>
      </div>

      {/* Slider Line & Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Circular Drag Handle */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center pointer-events-auto cursor-ew-resize border-4 border-[#357cce] hover:border-[#2d6bb8] transition-colors"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          {/* Arrow Icons */}
          <div className="flex items-center gap-0.5 text-[#357cce]">
            <ChevronLeft className="w-5 h-5" strokeWidth={3} />
            <ChevronRight className="w-5 h-5" strokeWidth={3} />
          </div>
        </div>
      </div>
    </div>
  );
}
