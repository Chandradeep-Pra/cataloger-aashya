'use client';

import { Button } from '@/components/ui/button';
import { BannerContent } from '@/types/banner-content';
import { b } from 'framer-motion/client';
import Image from 'next/image';



const Banner = ({bannerData}:{bannerData:BannerContent}) => {
  return (
    <div className={`w-[98%] mx-auto my-6 rounded-3xl overflow-hidden h-[300px] ${bannerData.backgroundGradient}  relative md:h-[500px] bg-cover bg-center shadow-lg`} >
    <div
      className="w-full  rounded-3xl overflow-hidden h-[300px] relative md:h-[500px] bg-cover bg-center shadow-lg ">
        {/* <Image src={"/desktop-landing-pattern.png"} fill className='z-10 absolute inset-0 object-cover pointer-events-none' alt='background-img'   /> */}
        <div
    className="absolute inset-0 z-0 opacity-5"
    style={{
      backgroundImage: `url(${bannerData.backImgUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}

  />
      <div className={` flex relative  ${bannerData.imageAlighn === 'left' ? 'flex-row-reverse' : 'flex-row'}   p-6 md:p-12` }>
        {/* Left Text Section */}
        {/* {bannerData.imageAlighn === 'right' && ( */}
        <Image src={bannerData.frontImgUrl} alt='' width={400} height={750} className='z-30 ' />
        {/* )} */}
        <div
          className={`md:text-left space-y-4 absolute md:relative md:block flex-1 z-20  ${
            bannerData.imageAlighn === 'left' ? 'order-1' : 'order-2'
          }`}
          style={{ color: bannerData.bannerTextClr }}
        >
          <h2 className="text-6xl md:text-[100px] font-lora leading-tight drop-shadow ml-2">
            {bannerData.bannerTitle}
          </h2>
          <p className="text-lg md:text-xl  font-krona-one text-yellow-300 max-w-xl hidden md:block  drop-shadow-sm">
            {bannerData.bannerSubtitle}
          </p>
          <Button
            className="rounded-full bg-[#F99471] hover:bg-[#e88360] text-white px-6 py-2 text-lg md:mt-8 mt-16 md:ml-0 ml-4"
            size="lg"
          >
            Shop Now
          </Button>
        </div>

        <p className="text-lg md:text-xl  font-krona-one text-yellow-300 max-w-xl top-[30%] md:hidden absolute z-40 drop-shadow-sm ml-2">
            {bannerData.bannerSubtitle}
          </p>

        {/* Right Image Section */}
        {/* {bannerData.imageAlighn === 'left' && (
          <Image src={"/desktop-landing-img.png"} alt='' width={400} height={750}/>
        )} */}
      </div>
    </div>
    </div>
  );
};

export default Banner;
