'use client';

import { Button } from '@/components/ui/button';
import { BannerContent } from '@/types/banner-content';
// import { b } from 'framer-motion/client';
import Image from 'next/image';
import { useEffect, useState } from 'react';



// const Banner = ({bannerData}:{bannerData:BannerContent}) => {
 
//   console.log(bannerData.backgroundGradient)
//   return (
//     <div className={`w-[98%] mx-auto my-6 rounded-3xl overflow-hidden h-[500px] ${bannerData.backgroundGradient || "bg-gradient-to-r from-[#ab9887] to-[#362925]"}  relative md:h-[500px] bg-cover bg-center shadow-lg`} >
//     <div
//       className="w-full  rounded-3xl overflow-hidden  relative h-[500px] bg-cover bg-center shadow-lg ">
//         {/* <Image src={"/desktop-landing-pattern.png"} fill className='z-10 absolute inset-0 object-cover pointer-events-none' alt='background-img'   /> */}
//         <div
//     className="absolute inset-0 z-0 opacity-5"
//     style={{
//       backgroundImage: `url(${bannerData.backImgUrl})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//     }}

//   />
//       <div className={` flex relative  ${bannerData.imageAlighn === 'left' ? 'flex-row-reverse' : 'flex-row'}   p-6 md:p-12` }>
//         {/* Left Text Section */}
//         {/* {bannerData.imageAlighn === 'right' && ( */}
//         <Image src={bannerData.frontImgUrl} alt='' width={400} height={750} className='z-30 md:mt-0 mt-20 ' />
//         {/* )} */}
//         <div
//           className={`md:text-left md:space-y-4  absolute  md:relative md:block flex-1 z-20  h-full  ${
//             bannerData.imageAlighn === 'left' ? 'order-1' : 'order-2'
//           }`}
//           style={{ color: bannerData.bannerTextClr }}
//         >
//           <h2 className="text-6xl md:text-[100px] font-lora leading-tight drop-shadow ml-2">
//             {bannerData.bannerTitle}
//           </h2>
//           <p className="text-lg md:text-xl  font-krona-one text-yellow-300 max-w-xl hidden md:block  drop-shadow-sm">
//             {bannerData.bannerSubtitle}
//           </p>
//           <Button
//             className="rounded-full bg-[#F99471] hover:bg-[#e88360] text-white px-6 py-2 text-lg md:mt-8 mt-48 md:ml-0 ml-2 hidden md:block "
//             size="lg"
//           >
//             Shop Now
//           </Button>
//         </div>

//         <p className="text-lg md:text-xl  font-krona-one text-yellow-300 max-w-xl top-[50%]  md:hidden absolute z-40 drop-shadow-sm ml-2">
//             {bannerData.bannerSubtitle}
//           </p>

//         {/* Right Image Section */}
//         {/* {bannerData.imageAlighn === 'left' && (
//           <Image src={"/desktop-landing-img.png"} alt='' width={400} height={750}/>
//         )} */}
//     <Button className='md:hidden block absolute z-40 top-[70%] rounded-full bg-[#F99471] hover:bg-[#e88360] text-white px-6 py-2' variant="default">Shop Now</Button>
//       </div>
//     </div>
//     </div>
//   );
// };

const Banner = ({ bannerData }: { bannerData: BannerContent }) => {
  const isTailwindGradient = bannerData.backgroundGradient?.startsWith("bg-");

  const containerClasses = `
    w-[98%] mx-auto my-6 rounded-3xl overflow-hidden h-[500px]
    ${isTailwindGradient ? bannerData.backgroundGradient : ""}
    relative md:h-[500px] bg-cover bg-center shadow-lg
  `;

  const containerStyle = !isTailwindGradient && bannerData.backgroundGradient
    ? { backgroundImage: bannerData.backgroundGradient }
    : {};

  return (
    <div className={containerClasses} style={containerStyle}>
      <div className="w-full rounded-3xl overflow-hidden relative h-[500px] bg-cover bg-center shadow-lg">
        {/* Pattern background */}
        <div
          className="absolute inset-0 z-0 opacity-5"
          style={{
            backgroundImage: `url(${bannerData.backImgUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Content */}
        <div className={`flex relative ${bannerData.imageAlighn === 'left' ? 'flex-row-reverse' : 'flex-row'} p-6 md:p-12`}>
          {/* Image */}
          <Image
            src={bannerData.frontImgUrl}
            alt=""
            width={400}
            height={750}
            className="z-30 md:mt-0 mt-20"
          />

          {/* Text */}
          <div
            className={`md:text-left md:space-y-4 absolute md:relative md:block flex-1 z-20 h-full ${
              bannerData.imageAlighn === 'left' ? 'order-1' : 'order-2'
            }`}
            style={{ color: bannerData.bannerTextClr }}
          >
            <h2 className="text-6xl md:text-[100px] font-lora leading-tight drop-shadow ml-2">
              {bannerData.bannerTitle}
            </h2>
            <p className="text-lg md:text-xl font-krona-one text-yellow-300 max-w-xl hidden md:block drop-shadow-sm">
              {bannerData.bannerSubtitle}
            </p>
            <Button className="rounded-full bg-[#F99471] hover:bg-[#e88360] text-white px-6 py-2  justify-center items-center text-lg md:mt-8 mt-48 md:ml-0 ml-2 hidden md:flex">
              Shop Now
            </Button>
          </div>

          {/* Mobile Subtitle & CTA */}
          <p className="text-lg md:text-xl font-krona-one text-yellow-300 max-w-xl top-[50%] md:hidden absolute z-40 drop-shadow-sm ml-2">
            {bannerData.bannerSubtitle}
          </p>
          <Button className="md:hidden flex items-center justify-center absolute z-40 top-[70%] rounded-full bg-[#F99471] hover:bg-[#e88360] text-white px-6 py-2">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};


export default Banner;
