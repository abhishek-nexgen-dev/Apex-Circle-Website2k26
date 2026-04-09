import { useState } from 'react';

interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate images for seamless looping
  const duplicatedImages = [...images, ...images];

  return (
    <div
      className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl cursor-pointer group"
      onClick={() => setIsPaused(!isPaused)}
    >
      {/* Continuous Marquee Container */}
      <div
        className={`flex animate-marquee-reverse hover:[animation-play-state:paused] ${isPaused ? '[animation-play-state:paused]' : ''}`}
        style={{
          width: `${duplicatedImages.length * 100}%`,
          animationDuration: `${images.length * 5}s`, // Dynamic speed based on image count
        }}
      >
        {duplicatedImages.map((image, i) => (
          <div
            key={i}
            className="relative flex-shrink-0"
            style={{ width: `${100 / duplicatedImages.length}%` }}
          >
            <div className="h-[300px] md:h-[500px] px-2">
              <img
                src={image}
                alt={`Apex Scene ${i}`}
                className="w-full h-full object-cover rounded-2xl border border-white/10 group-hover:border-tertiary transition-colors duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Label Overlay */}
      <div className="absolute bottom-6 left-6 z-20">
        <span className="px-3 py-1 bg-tertiary text-black text-[10px] font-black uppercase tracking-widest rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity">
          Live_From_The_Field {isPaused ? '(PAUSED)' : ''}
        </span>
      </div>
    </div>
  );
}
