"use client";

import { useEffect, useState, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SlideInFromBottomProps {
  children: ReactNode;
  className?: string;
}

export const SlideInFromBottom = ({
  children,
  className = "",
}: SlideInFromBottomProps) => {
  const [transition, setTransition] = useState("");

  useEffect(() => {
    setTransition("translate-y-0");
  }, []);

  return (
    <div className="h-[100dvh] overflow-hidden">
      <div
        className={twMerge(
          "transition-transform h-[100dvh] duration-3000 translate-y-1000",
          className,
          transition
        )}
      >
        {children}
      </div>
    </div>
  );
};
