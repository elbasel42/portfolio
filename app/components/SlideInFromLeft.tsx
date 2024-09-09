"use client";

import { useEffect, useState, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { useIntersectionObserver } from "@app/hooks";

interface SlideInFromLeftProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
}

export const SlideInFromLeft = ({
  children,
  duration = 1000,
  delay = 0,
  className = "",
}: SlideInFromLeftProps) => {
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
    <div className="overflow-hidden" ref={ref}>
      <div
        style={{
          transitionDuration: `${duration}ms`,
          animationDuration: `${duration}ms`,
        }}
        className={twMerge(
          "transform w-fit out-expo -translate-x-[100vw]",
          className,
          transition
        )}
      >
        {children}
      </div>
    </div>
  );
};
