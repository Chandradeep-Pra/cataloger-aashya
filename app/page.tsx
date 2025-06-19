"use client";

import CarasoulLoader from "@/components/CarasoulLoader";
import FlipText from "@/components/FlipText";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [landingConfig, setLandingConfig] = useState("config1")
  return (
    <div className="h-screen flex md:flex-row flex-col">
      {/* Desktop Grid */}
      <div className="hidden md:grid md:w-[60%] md:h-full grid-cols-3 grid-rows-3 gap-0 bg-red-300">
        <FlipText text="Aashya" />
        <div className="w-full h-full  relative">
  <Image
    src="/splash-screen/langingP1.png"
    alt="Landing image 1"
    fill
    className="object-cover "
  />
</div>

        <div className="w-full h-full aspect-square bg-[#AF52DE]" />
        <div className="w-full h-full col-span-2 relative">
  <Image
    src="/splash-screen/landingP2.jpg"
    alt="Landing image"
    fill
    className="object-cover object-[50%_10%]"
  />
</div>

        <div className="w-full h-full  relative overflow-hidden">
  <Image
    src="/splash-screen/haldiLooks.jpg"
    alt="Landing image 4"
    fill
    className="object-cover object-[50%_40%]"
  />
</div>
        <div className="w-full h-full aspect-square bg-background" />
        <div className="w-full h-full aspect-square bg-purple-700" />
</div>


      {/* Mobile Grid (uses proper layout now) */}
      <div className="md:hidden w-full aspect-[3/4] grid grid-cols-3 grid-rows-4 gap-0 bg-red-300">
  <div className="w-full h-full bg-apricot relative overflow-hidden">
    <div className="w-full h-full bg-[#FAD4A3] rounded-full absolute -top-[50%] -left-[50%] scale-200 flex items-center justify-center">
      <div className="h-16 w-16 rounded-full bg-[#34C759]"></div>
    </div>
  </div>
  <div className="w-full h-full bg-[#EE7682] flex items-center justify-center" > 
    <div className="h-12 w-12 rounded-full bg-[#34C759]"></div>
  </div>
   <div className="w-full h-full  relative">
  <Image
    src="/splash-screen/langingP1.png"
    alt="Landing image 1"
    fill
    className="object-cover"
  />
</div>

  <div className="w-full h-full col-span-2 relative">
  <Image
    src="/splash-screen/landingP2.jpg"
    alt="Landing image"
    fill
    className="object-cover object-top"
  />
</div>
  <div className="w-full h-full bg-[#B076EE]" />

  <div className="w-full h-full bg-[#A2845E]" />
  <div className="w-full h-full col-span-2 bg-[#EEEEEE] flex items-center justify-end">
        <FlipText text="Aashya" flippedText="Aashyaa" />
  </div>

  <div className="w-full h-full bg-[#D9D9D9]"/>
  <div className="w-full h-full bg-[#EE7682]" />
  <div className="w-full h-full  relative">
  <Image
    src="/splash-screen/haldiLooks.jpg"
    alt="Landing image 4"
    fill
    className="object-cover"
  />
</div>
</div>


      {/* Welcoming Screen */}
      <div className="md:w-[40%] h-full px-4  flex flex-col justify-between py-16">
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold md:text-[64px] pr-20 text-textPrimary">
            100+ support brand local
          </h1>
          <p className="text-xs md:text-xl font-light mt-2 text-textSecondary">
            Local brands that already have perfect quality and are not inferior to foreign brands
          </p>
        </div>

        <div className="w-full flex md:flex-col-reverse items-center md:items-start md:gap-8 justify-between">
          <CarasoulLoader setLandingConfig={setLandingConfig} />
          <Button className="md:hidden rounded-full text-sm bg-olive" onClick={() => router.push("/explore")}>Explore</Button>
          <Button className="hidden md:flex rounded-full text-lg justify-center items-center  w-[50%] bg-olive" onClick={() => router.push("/explore")}>Something for you</Button>
        </div>
      </div>
    </div>
  );
}
