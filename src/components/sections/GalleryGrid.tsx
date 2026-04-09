import { useState } from 'react';
import { motion } from 'motion/react';
import { Maximize2 } from 'lucide-react';
import { GalleryItem } from '@/types';
import ImageCarousel from '../ImageCarousel';

interface GalleryGridProps {
  items: GalleryItem[];
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  const [visibleCount, setVisibleCount] = useState(6);

  const visibleItems = items.slice(0, visibleCount);

  return (
    <div className="w-full">
      {/* 🔥 MASONRY GRID */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {visibleItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-2xl"
          >
            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* 🔥 HOVER OVERLAY */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                  <Maximize2
                    className="text-white bg-white/10 p-3 rounded-full backdrop-blur-md border border-white/20"
                    size={36}
                  />

                  {/* Title appears on hover */}
                  <span className="text-white text-sm font-semibold tracking-wide">
                    {item.title}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔥 VIEW MORE BUTTON */}
      {visibleCount < items.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold tracking-wide hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
}
