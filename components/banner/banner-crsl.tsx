// 'use client';

// import { useState, useEffect } from 'react';
// import Banner from './Banner';
// import { banners } from '@/data/banners';

// const BannerCarousel = () => {
//   const [current, setCurrent] = useState(0);

//   const total = banners.length;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % total);
//     }, 5000); // 5 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full overflow-hidden">
//       {/* Slide wrapper */}
//       <div
//         className="flex transition-transform duration-5000 ease-in-out"
//         style={{ transform: `translateX(-${current * 100}%)` }}
//       >
//         {banners.map((banner, index) => (
// <div className="w-full flex-shrink-0" key={index}>
//           <Banner bannerData={banner}  />
//         </div>
//         ))}
        
//       </div>

//       {/* Dots */}
//       <div className="absolute bottom-10 left-1/2 transition-all duration-200 transform -translate-x-1/2 flex space-x-2 z-10">
//         {Array.from({ length: total }).map((_, i) => (
//           <span
//             key={i}
//             className={`w-2.5 h-2.5 rounded-full transition-all bg-gray-400 duration-300 ${
//               i === current ? ' w-8' : ' opacity-50'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BannerCarousel;



// // import * as React from "react"

// // import { Card, CardContent } from "@/components/ui/card"
// // import {
// //   Carousel,
// //   CarouselContent,
// //   CarouselItem,
// //   CarouselNext,
// //   CarouselPrevious,
// // } from "@/components/ui/carousel"

// // export function CarouselDemo() {
// //   return (
// //     <Carousel className="w-full max-w-xs">
// //       <CarouselContent>
// //         {Array.from({ length: 5 }).map((_, index) => (
// //           <CarouselItem key={index}>
// //             <div className="p-1">
// //               <Card>
// //                 <CardContent className="flex aspect-square items-center justify-center p-6">
// //                   <span className="text-4xl font-semibold">{index + 1}</span>
// //                 </CardContent>
// //               </Card>
// //             </div>
// //           </CarouselItem>
// //         ))}
// //       </CarouselContent>
// //       <CarouselPrevious />
// //       <CarouselNext />
// //     </Carousel>
// //   )
// // }



'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

import Banner from './Banner';
import { banners } from '@/data/banners';

import type { EmblaCarouselType } from 'embla-carousel';

const AUTOPLAY_INTERVAL = 5000;

const BannerCarousel = () => {
  const emblaRef = useRef<EmblaCarouselType | null>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (emblaRef.current) {
        const next = (emblaRef.current.selectedScrollSnap() + 1) % emblaRef.current.scrollSnapList().length;
        emblaRef.current.scrollTo(next);
        setCurrent(next);
      }
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <Carousel
        opts={{ loop: true, }}
        setApi={(api) => {
          emblaRef.current = api;
          api.on('select', () => setCurrent(api.selectedScrollSnap()));
        }}
      >
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem key={index} className="w-full will-change-transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
              <Banner bannerData={banner} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Optional buttons */}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {banners.map((_, i) => (
          <span
            key={i}
            className={`h-2.5 rounded-full bg-gray-300 transition-all duration-300 ${
              i === current ? 'w-8 bg-black' : 'w-2.5 opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
