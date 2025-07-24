import React from "react";
import { SparklesText } from "./magicui/sparkles-text";
import Image from "next/image";
import { Button } from "./ui/button";

const FeaturedProducts = () => {
  return (
    <div className="w-full  bg-gradient-to-r from-transparent via-25%-red-200 via-yellow-300 to-transparent text-center p-4 mt-4">
      <SparklesText className="flex w-full flex-col">
        <div className="flex flex-col">
          <span className="font-semibold text-3xl font-lora tracking-tight">
            {"Featured".toLocaleUpperCase()}
          </span>
          <span className="font-bold text-5xl capitalize">
            {"products".toLocaleUpperCase()}
          </span>
        </div>
      </SparklesText>
      <div className="w-full flex gap-8 mt-4 overflow-x-scroll ">
        {[...Array(10)].map((_, i) => (
          <div className="relative h-full my-6" key={i}>
            <div className="w-full h-64  bg-gray-200 rounded-xl aspect-square border-4">
              <Image
                src={"/splash-screen/haldiLooks.jpg"}
                fill
                alt="image-name"
                className="overflow-hidden border-4 rounded-xl object-cover"
              />
            </div>
            <Button className="flex gap-2 absolute -bottom-2 -right-6 bg-[#F99471] hover:bg-[#e88360] text-white p-4 rounded-lg shadow-card-foreground ">
                <span className="text-sm font-thin">approx</span>
              <span className="text-lg">Rs.11,999</span>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
