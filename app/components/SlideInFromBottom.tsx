"use client";

import { useEffect, useState, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SlideInFromBottomProps {
  children: ReactNode;
}

export const SlideInFromBottom = ({ children }: SlideInFromBottomProps) => {
  const [className, setClassName] = useState("");

  useEffect(() => {
    setClassName("translate-y-0");
  }, []);

  return (
    <div className="h-[100dvh] overflow-hidden">
      <div
        className={twMerge(
          "transition-transform h-[100dvh] duration-3000 translate-y-1000",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
