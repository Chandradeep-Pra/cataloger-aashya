"use client";

import { useState, useEffect } from "react";

type CarouselLoaderProps = {
  totalSteps: number;
  interval?: number;
  onStepChange?: (currentStep: number) => void;
};

export default function CarouselLoader({
  totalSteps,
  interval = 2500,
  onStepChange,
}: CarouselLoaderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % totalSteps;
        if (onStepChange) onStepChange(next);
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [totalSteps, interval, onStepChange]);

  return (
    <div className="loader-container flex gap-2">
      {Array.from({ length: totalSteps }).map((_, i) => {
        const status =
          i < activeIndex
            ? "visited"
            : i === activeIndex
            ? "visiting"
            : "not-visited";

        return (
          <div
            key={i}
            className={`loader-bar relative h-2 flex-1 rounded-full overflow-hidden bg-gray-200 ${
              status === "visiting"
                ? "bg-yellow-300 animate-pulse"
                : status === "visited"
                ? "bg-yellow-400"
                : ""
            }`}
          >
            {status === "visiting" && (
              <div className="bar-fill absolute left-0 top-0 h-full bg-yellow-500 animate-loader-fill" />
            )}
          </div>
        );
      })}
    </div>
  );
}
