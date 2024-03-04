"use client";

import { useEffect, useState, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface PageTransitionProps {
  children: ReactNode;
  from: string;
  to: string;
}
export const PageTransition = ({ children, from, to }: PageTransitionProps) => {
  const [className, setClassName] = useState("");

  useEffect(() => {
    setClassName(to);
  }, [to]);

  return <div className={twMerge("transform transition-all duration-2000", from, className)}>{children}</div>;
};
