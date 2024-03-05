"use client";

import { useEffect, useState, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { useIntersectionObserver } from "@app/hooks";

interface SlideInFromLeftProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
}

export const SlideInFromLeft = ({
  children,
  duration = 1000,
  delay = 0,
}: SlideInFromLeftProps) => {
  const [className, setClassName] = useState("");
  const { isIntersecting, ref } = useIntersectionObserver({});

  useEffect(() => {
    if (!isIntersecting) return setClassName("");
    setTimeout(() => {
      setClassName("translate-x-0");
    }, delay);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIntersecting]);

  return (
    <div className="overflow-hidden" ref={ref}>
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
