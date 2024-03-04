"use client";

import { ReactNode, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface SlideInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const SlideIn = ({
  className = "",
  children,
  delay = 1000,
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
        className={twMerge(
          "block text-3xl transition-transform duration-2000 transform translate-y-full",
          className,
          transition
        )}
      >
        {children}
      </span>
    </div>
  );
};
