import React from 'react';
import { cn } from '@/lib/utils'; // shadcn-style cn helper

interface GlassContainerProps {
  children: React.ReactNode;
  className?: string;
  blurLevel?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  bgColor?: string; // "r,g,b"
  bgOpacity?: number; // 0.1
  borderOpacity?: number; // 0.1
  borderColor?: string; // optional hex or rgb
}

const GlassContainer = ({
  children,
  className,
  blurLevel = 'lg',
  bgColor = '255,255,255',
  bgOpacity = 0.12,
  borderOpacity = 0.1,
  borderColor = '255,255,255',
}: GlassContainerProps) => {
  return (
    <div
      className={cn(
        'border backdrop-blur',
        `backdrop-blur-${blurLevel}`,
        className
      )}
      style={{
        backgroundColor: `rgba(${bgColor}, ${bgOpacity})`,
        borderColor: `rgba(${borderColor}, ${borderOpacity})`,
        borderWidth: '1px',
        borderStyle: 'solid',
      }}
    >
      {children}
    </div>
  );
};

export default GlassContainer;
