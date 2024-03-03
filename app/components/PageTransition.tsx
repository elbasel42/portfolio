"use client";

import { useEffect, useState, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface PageTransitionProps {
  children: ReactNode;
  className: string;
  transition: string;
}
export const PageTransition = ({
  children,
  className,
  transition,
}: PageTransitionProps) => {
  const [transitionClass, setTransitionClass] = useState("");

  useEffect(() => {
    setTransitionClass(transition);
  }, [transition]);

  return <div className={twMerge(className, transitionClass)}>{children}</div>;
};
