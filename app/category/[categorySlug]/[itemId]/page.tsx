'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { ChevronLeft, Maximize2, SlashIcon, Heart, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import MobileItemDet from '@/components/MobileItemDet';
import { Lens } from '@/components/magicui/lens';

export default function ItemPage({
  params,
}: {
  params: { categorySlug: string; itemId: string };
}) {
  const { categorySlug, itemId } = params;

  const thumbnails = new Array(5).fill('/splash-screen/haldiLooks.jpg');
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const colors = ['#6E2A1B', '#D8B978', '#007843', '#8A2BE2', '#E91E63', '#A78BFA'];

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="p-4 space-y-6 max-w-7xl mx-auto ">
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center">
        <button className="w-9 h-9 rounded-full border flex items-center justify-center">
          <ChevronLeft />
        </button>
        <span className="text-base font-medium">Details</span>
        <button className="w-9 h-9 rounded-full border bg-[#D6E6B3] flex items-center justify-center">
          <Heart className="text-green-900" size={20} />
        </button>
      </div>

      {/* Desktop Breadcrumb */}
      <div className="hidden md:flex items-center gap-4">
        <ChevronLeft className="border border-textPrimary rounded-full p-1" size={32} />
        <Breadcrumb className="font-bold">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon className="w-4 h-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href={`/category/${categorySlug}`}>
                {categorySlug}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon className="w-4 h-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Item {itemId}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row md:gap-10">
        {/* Mobile Carousel with Peek */}
        {/* <div className="md:hidden overflow-x-scroll snap-x snap-mandatory -mx-6 px-6 flex gap-4 no-scrollbar">
          {thumbnails.map((src, i) => {
              
            return (<div
              key={i}
              className="snap-center shrink-0 w-[90%] rounded-3xl relative overflow-hidden"
            >
              <Image
                src={src}
                alt={`carousel-${i}`}
                width={400}
                height={600}
                className={`w-full h-auto object-cover aspect-[3/4] rounded-3xl`}
              />
              <Maximize2 className="absolute bottom-3 right-3 p-2 bg-white rounded-full text-black shadow-md w-8 h-8" />
            </div>)
})}
        </div> */}
        <MobileItemDet />

        {/* Desktop Thumbs */}
        <div className="hidden md:flex md:flex-col gap-3 md:w-20 ">
          {thumbnails.map((src, i) => (
            <div
              key={i}
              className="aspect-[3/4] w-20 h-28 md:w-16 md:h-24 rounded-2xl overflow-hidden border"
            >
              <Image
                src={src}
                alt="thumb"
                width={100}
                height={150}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* Desktop Main Image */}
        <div className="hidden md:block relative w-full md:w-[55%] rounded-3xl overflow-hidden">
          <Lens
          zoomFactor={2}
          lensSize={300}
          isStatic={false}
          ariaLabel="Zoom Area"
          >

          <Image
            src="/splash-screen/haldiLooks.jpg"
            alt="main"
            width={350}
            height={450}
            className="rounded-3xl object-cover w-full h-full aspect-[3/4]"
            />
            </Lens>
          <Maximize2 className="absolute bottom-3 right-3 p-2 bg-white rounded-full text-black shadow-md w-8 h-8" />
        </div>

        {/* Right Panel Info */}
        <div className="flex flex-col gap-4 flex-1 text-textPrimary mt-6 md:mt-0">
          <h1 className="text-2xl md:text-3xl font-semibold">Jissy Pearl Gown</h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {isExpanded
              ? 'There will be some description regarding the clothes and we try to put as much information as possible about material, fit, comfort and more. Customers can make better choices when they know how the dress feels and flows. This helps convert better!'
              : 'There will be some description regarding the clothes and we try to put as much. '}
            <span
              className="text-pink-500 font-medium cursor-pointer"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? ' Show less' : ' Read more...'}
            </span>
          </p>

          {/* Sizes */}
          <div>
            <h4 className="font-medium text-sm mb-1">Sizes</h4>
            <div className="flex gap-2 flex-wrap">
              {sizes.map((size) => (
                <span
                  key={size}
                  className="border border-muted-foreground px-3 py-1 text-sm rounded-full"
                >
                  {size}
                </span>
              ))}
              <span className="text-sm underline text-muted-foreground ml-1 cursor-pointer">
                more...
              </span>
            </div>
          </div>

          {/* Colors */}
          <div>
            <h4 className="font-medium text-sm mb-1">Colors</h4>
            <div className="flex gap-2 items-center">
              {colors.map((clr, i) => (
                <span
                  key={i}
                  className="w-6 h-6 rounded-full border border-black/10"
                  style={{ backgroundColor: clr }}
                />
              ))}
            </div>
          </div>

          {/* Price + CTA */}
          <div className="flex items-center justify-between mt-4">
            <div className="text-2xl font-semibold">₹600</div>
            <Button
              variant="default"
              className="rounded-full bg-black hover:bg-black/90 px-5 py-2 text-white flex items-center gap-2"
            >
              {/* <Image src="/icons/whatsapp.svg" width={16} height={16} alt="wa" /> */}
              <MessageCircle />
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
