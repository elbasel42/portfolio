"use client";

import { useEffect, useState, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { useIntersectionObserver } from "@app/hooks";

interface SlideInFromLeftProps {
  children: ReactNode;
  duration?: number;
}

export const SlideInFromLeft = ({
  children,
  duration = 1000,
}: SlideInFromLeftProps) => {
  const [className, setClassName] = useState("");
  const { isIntersecting, ref } = useIntersectionObserver({});

  useEffect(() => {
    if (!isIntersecting) return setClassName("");
    setClassName("translate-x-0");
  }, [isIntersecting]);

  return (
    <div className="w-[50vw] overflow-hidden flex justify-end pr-8" ref={ref}>

      <div
        style={{
          transitionDuration: `${duration}ms`,
          animationDuration: `${duration}ms`,
        }}
        className={twMerge("transform w-fit translate-x-[100vw]", className)}
      >
        {children}
      </div>
    </div>
  );
};
