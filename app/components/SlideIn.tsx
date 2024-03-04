"use client";

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

  useEffect(() => {
    setTimeout(() => {
      setTransition("translate-y-0");
    }, delay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="overflow-hidden">
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
