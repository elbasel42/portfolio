"use client";

import { useEffect, useState, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { useIntersectionObserver } from "@app/hooks";

interface SlideInFromRightProps {
  children: ReactNode;
  duration?: number;
}

export const SlideInFromRight = ({
  children,
  duration = 1000,
}: SlideInFromRightProps) => {
  const [className, setClassName] = useState("");
  const { isIntersecting, ref } = useIntersectionObserver({});

  useEffect(() => {
    if (!isIntersecting) return setClassName("");
    setClassName("translate-x-0");
  }, [isIntersecting]);

  return (
    <div className="w-[50vw] overflow-hidden" ref={ref}>
      <div
        style={{
          transitionDuration: `${duration}ms`,
          animationDuration: `${duration}ms`,
        }}
        className={twMerge("transform w-fit -translate-x-[100vw]", className)}
      >
        {children}
      </div>
    </div>
  );
};
