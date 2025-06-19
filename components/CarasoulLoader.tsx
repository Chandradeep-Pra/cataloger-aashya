"use client";

import { useState, useEffect } from "react";

export default function CarasoulLoader({setLandingConfig}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSteps = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1 < totalSteps ? prev + 1 : prev));
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="loader-container">
      {[...Array(totalSteps)].map((_, i) => {
        let status =
          i < activeIndex
            ? "visited"
            : i === activeIndex
            ? "visiting"
            : "not-visited";

        return (
          <div key={i} className={`loader-bar ${status}`}>
            {status === "visiting" && <div className="bar-fill" />}
          </div>
        );
      })}
    </div>
  );
}
