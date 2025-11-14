'use client';
import { useState } from 'react';
import { Play } from 'lucide-react';
import Image from 'next/image';

export default function BlindsVid() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center tracking-[-1px] font-bold text-4xl md:text-5xl text-black mb-12">
          <h3>Getting Started with your Blinds</h3>
        </div>

        <div className="relative w-full max-w-5xl mx-auto aspect-video bg-black rounded-2xl overflow-hidden shadow-lg">
          {!isPlaying ? (
            // Thumbnail with play button
            <div
              className="absolute inset-0 cursor-pointer group"
              onClick={handlePlayClick}
            >
              {/* Video Thumbnail */}
              <Image
                src="/Img/video-thumbnail.jpg"
                alt="Getting Started with your blinds video thumbnail"
                fill
                className="object-cover"
                priority
              />

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 transition-all flex items-center justify-center shadow-xl">
                  <Play className="w-10 h-10 md:w-12 md:h-12 text-[#357cce] ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          ) : (
            // Video player
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/sV7kYU3Dq38?autoplay=1"
              title="Getting Started with your blinds"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
}
