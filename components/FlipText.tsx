"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

interface FlipTextProps {
  text: string;
  flippedText?: string;
}

export default function FlipText({ text, flippedText = text + "a" }: FlipTextProps) {
  const topRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const bottomRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline();

    // Step 1: Set initial state: top (flipped) visible, bottom (true text) hidden
    gsap.set(topRefs.current, { opacity: 0, rotationX: 90 });
    gsap.set(bottomRefs.current, { opacity: 0, y: 10 });

    // Step 2: Flip in wrong text
    tl.to(topRefs.current, {
      rotationX: 0,
      opacity: 1,
      duration: 0.4,
      stagger: 0.1,
      ease: "power2.out",
    });

    // Step 3: Push wrong letters up from right, reveal correct text
    tl.to(
      topRefs.current,
      {
        y: -40,
        opacity: 0,
        stagger: {
          each: 0.1 ,
          from: "end",
        },
        ease: "power2.inOut",
        delay: 0.8,
      },
      "+=0.5"
    );

    tl.to(
      bottomRefs.current,
      {
        opacity: 1,
        y: 0,
        stagger: {
          each: 0.08,
          from: "end",
        },
        ease: "power2.out",
      },
      "<" // start at same time as top moving out
    );
  }, []);

  return (
    <div
      className="w-full h-full col-span-2 bg-[#EEEEEE] flex items-center justify-end md:items-start md:justify-start"
      style={{ perspective: "1000px" }}
    >
      <span className="text-3xl md:text-7xl font-krona-one md:pr-0 pr-12 md:pl-10 md:pt-8 flex gap-1 relative">
        {text.split("").map((char, i) => (
          <span key={i} className="relative inline-block overflow-hidden h-[2.5rem] w-[1.7rem] md:w-[4rem] md:h-[10rem]">
            {/* Top: Wrong Text */}
            <span
              ref={(el) => (topRefs.current[i] = el)}
              className="absolute top-0 left-0 w-full h-full text-apricot"
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                display: "inline-block",
              }}
            >
              {flippedText[i] ?? ""}
            </span>
            {/* Bottom: Real Text */}
            <span
              ref={(el) => (bottomRefs.current[i] = el)}
              className="absolute top-0 tracking-tighter left-0 w-full h-full text-textPrimary"
              style={{
                display: "inline-block",
              }}
            >
              {char}
            </span>
          </span>
        ))}
      </span>
    </div>
  );
}
