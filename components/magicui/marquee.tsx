import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, useState } from "react";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  pauseOnTouch?: boolean; // ✅ New prop
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  pauseOnTouch = false, // ✅ Default false
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  const [isTouched, setIsTouched] = useState(false);

  return (
    <div
      {...props}
      onTouchStart={pauseOnTouch ? () => setIsTouched(true) : undefined}
      onTouchEnd={pauseOnTouch ? () => setIsTouched(false) : undefined}
      onMouseDown={pauseOnTouch ? () => setIsTouched(true) : undefined}
      onMouseUp={pauseOnTouch ? () => setIsTouched(false) : undefined}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around [gap:var(--gap)]",
              {
                "animate-marquee flex-row": !vertical,
                "animate-marquee-vertical flex-col": vertical,
                "group-hover:[animation-play-state:paused]": pauseOnHover,
                "[animation-play-state:paused]": pauseOnTouch && isTouched,
                "[animation-direction:reverse]": reverse,
              }
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
