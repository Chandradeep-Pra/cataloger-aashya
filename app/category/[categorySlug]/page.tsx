'use client';

import Banner from '@/components/banner/Banner';
import { Button } from '@/components/ui/button';
import { getGradientFromImage } from '@/lib/getGrdientFromImage';
import { HomeIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const items = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: `Luxe Piece ${i + 1}`,
  color: [`#ECE0DB`, `#F7D9C4`, `#D0C9C0`, `#E4DDD3`, `#F0EFEA`, `#DDD9CE`][i % 6],
  price: Math.floor(Math.random() * 4000) + 1499,
  tag: i % 3 === 0 ? 'Curated' : i % 2 === 0 ? 'New' : 'Bestseller',
}));

const data = {
  imageAlighn: 'left',
  frontImgUrl:
    '/desktop-landing-img.png',
  backImgUrl:
    '/desktop-landing-pattern-Photoroom.png',
  bannerBackround: '#FFEFE9',
  backgroundGradient: 'bg-linear-to-r from-[#432041] to-[#572954]',
  bannerTitle: 'Festive Sarees Are ',
  bannerSubtitle: 'Wrap yourself in elegance and tradition.',
  bannerTextClr: '#D7C085',
}

//@ts-ignore
export default function CategoryPage({ params }: { params: any }) {
  const router = useRouter();
  const title = params.categorySlug.replace(/-/g, ' ');

  const [gradient, setGradient] = useState("");
  const frontImg = '/desktop-landing-img-2.png';

  useEffect(() => {
    getGradientFromImage(frontImg).then(setGradient).catch(console.error);
    // console.log(gradient)
  }, []);

  const bannerData = {
    imageAlign: 'left',
    frontImgUrl: frontImg,
    backImgUrl: '/desktop-landing-pattern-Photoroom.png',
    bannerBackround: '#FFEFE9',
    backgroundGradient: gradient,
    bannerTitle: 'Festive Sarees Are',
    bannerSubtitle: 'Wrap yourself in elegance and tradition.',
    bannerTextClr: '#D7C085',
  };



  return (
    <div className="px-6 md:px-12 py-8 space-y-10 max-w-screen-2xl mx-auto font-sans">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2">
        <HomeIcon
          size={32}
          onClick={() => router.push('/explore')}
          className="p-2 rounded-full border text-apricot border-apricot hover:scale-105 transition"
        />
        <h1 className="text-3xl font-light tracking-tight capitalize">{title}</h1>
      </div>

      {/* Hero Banner */}
      {/* <div className="rounded-3xl bg-gradient-to-br from-[#FAECE2] to-[#F7D9C4] py-14 px-8 text-center shadow-sm">
        <h2 className="text-5xl md:text-6xl font-serif text-[#2E2C2B]">The {title} Edit</h2>
        <p className="text-muted-foreground text-base md:text-lg mt-2 max-w-xl mx-auto font-light">
          Refined selections to elevate your wardrobe this season.
        </p>
      </div> */}

      <div>
      {gradient && <Banner bannerData={bannerData} />}
    </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative p-5 aspect-[3/4] rounded-3xl flex flex-col justify-between transition duration-300 group hover:shadow-md"
            style={{ backgroundColor: item.color }}
            onClick={() => router.push(`/category/${params.categorySlug}/${item.id}`)}
          >
            <span className="absolute top-3 right-4 bg-white text-black text-[10px] font-medium px-2 py-0.5 rounded-full shadow-sm">
              {item.tag}
            </span>

            <div className="text-black/80">
              <h3 className="text-lg md:text-xl font-medium">{item.name}</h3>
              <p className="text-sm mt-1 text-neutral-600">₹{item.price}</p>
            </div>

            <Button
              variant="outline"
              className="w-fit rounded-full text-xs px-4 py-1 mt-3 bg-white/80 backdrop-blur-sm border border-black/10 hover:bg-black hover:text-white transition"
            >
              View
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
