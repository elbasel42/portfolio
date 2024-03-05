"use client";

import { useEffect, useState, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { useIntersectionObserver } from "@app/hooks";

interface SlideInFromRightProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
}

export const SlideInFromRight = ({
  children,
  duration = 1000,
  delay = 0,
  className = "",
}: SlideInFromRightProps) => {
  const [transition, setTransition] = useState("");
  const { isIntersecting, ref } = useIntersectionObserver({});

  useEffect(() => {
    if (!isIntersecting) return setTransition("");
    setTimeout(() => {
      setTransition("translate-x-0");
    }, delay);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIntersecting]);

  return (
    <div className="flex justify-end overflow-hidden" ref={ref}>
      <div
        style={{
          transitionDuration: `${duration}ms`,
          animationDuration: `${duration}ms`,
        }}
        className={twMerge(
          "transform w-fit translate-x-[100vw]",
          className,
          transition
        )}
      >
        {children}
      </div>
    </div>
  );
};
