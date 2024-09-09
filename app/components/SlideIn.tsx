"use client";

import { useIntersectionObserver } from "@app/hooks";
import { ReactNode, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface SlideInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export const SlideIn = ({
  className = "",
  children,
  delay = 0,
  duration = 2000,
}: SlideInProps) => {
  const [transition, setTransition] = useState("");
  const { isIntersecting, ref } = useIntersectionObserver({});

  useEffect(() => {
    if (!isIntersecting) return setTransition("translate-y-full");
    setTimeout(() => {
      setTransition("translate-y-0");
    }, delay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIntersecting]);

  return (
    <div className="overflow-hidden" ref={ref}>
      <span
        style={{
          transitionDuration: `${duration}ms`,
          animationDuration: `${duration}ms`,
        }}
        className={twMerge(
          "block text-3xl transition-transform transform translate-y-full",
          className,
          transition
        )}
      >
        {children}
      </span>
    </div>
  );
};
