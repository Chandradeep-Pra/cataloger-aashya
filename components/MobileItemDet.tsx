'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Maximize2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileCarousel() {
  const thumbnails = new Array(5).fill('/splash-screen/haldiLooks.jpg');
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const childWidth = e.currentTarget.firstElementChild?.clientWidth || 1;
    const index = Math.round(scrollLeft / (childWidth + 16));
    setActiveIndex(index);
  };

  return (
    <>
      {/* Scrollable Mobile Carousel */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="md:hidden overflow-x-auto snap-x snap-mandatory -mx-6 px-6 flex gap-4 no-scrollbar"
      >
        {thumbnails.map((src, i) => {
          const isActive = i === activeIndex;
          return (
            <motion.div
              key={i}
              layout
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className={`snap-center shrink-0 w-[90%] relative overflow-hidden rounded-3xl`}
              animate={{
                scaleY: isActive ? 1 : 0.9,
                opacity: isActive ? 1 : 0.9,
              }}
            >
              <Image
                src={src}
                alt={`carousel-${i}`}
                width={400}
                height={600}
                className="w-full h-auto object-cover aspect-[3/4] rounded-3xl"
              />

              {/* Fullscreen trigger */}
              <Maximize2
                onClick={() => setOpenIndex(i)}
                className="absolute bottom-3 right-3 p-2 bg-white rounded-full text-black shadow-md w-8 h-8 cursor-pointer"
              />
            </motion.div>
          );
        })}
      </div>

      {/* 🔘 Dot indicators */}
      <div className="flex justify-center gap-2 mt-2 md:hidden">
        {thumbnails.map((_, i) => (
          <motion.div
            key={i}
            className={`bg-black transition-all`}
            animate={{
              width: i === activeIndex ? 12 : 4,
              height: 4,
              borderRadius: i === activeIndex ? 4 : 999,
              opacity: i === activeIndex ? 1 : 0.5,
            }}
          />
        ))}
      </div>

      {/* Fullscreen View */}
      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="relative w-full max-w-[90vw] max-h-[90vh] aspect-[3/4] bg-white rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Close button */}
              <button
                onClick={() => setOpenIndex(null)}
                className="absolute top-3 right-3 z-10 bg-black/70 text-white rounded-full p-1 hover:bg-black/90"
              >
                <X size={18} />
              </button>

              <Image
                src={thumbnails[openIndex]}
                alt="fullscreen"
                fill
                className="object-cover w-full h-full rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
