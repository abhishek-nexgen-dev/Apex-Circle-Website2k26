import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (dir: number) => {
    setIndex(([prev]) => {
      const nextIndex = (prev + dir + images.length) % images.length;
      return [nextIndex, dir];
    });
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl">
      {/* Image Container */}
      <div className="relative h-[300px] md:h-[500px] ease-in-out duration-400">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={index}
            src={images[index]}
            custom={direction}
            initial={{
              x: direction > 0 ? 300 : -300,
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5 },
            }}
            exit={{
              x: direction > 0 ? -300 : 300,
              opacity: 0,
              scale: 0.95,
              transition: { duration: 0.4 },
            }}
            className="absolute w-full h-full object-cover rounded-2xl"
          />
        </AnimatePresence>
      </div>

      {/* Left Button */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:scale-110 transition"
      >
        <ChevronLeft />
      </button>

      {/* Right Button */}
      <button
        onClick={() => paginate(1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:scale-110 transition"
      >
        <ChevronRight />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? 'w-6 bg-white' : 'w-2 bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
