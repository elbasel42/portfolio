"use client";

import { type ReactNode } from "react";

interface SlideInFromBottomProps {
  children: ReactNode;
}

export const SlideInFromBottom = ({ children }: SlideInFromBottomProps) => {
  return (
    <div className="relative transition-all duration-6000 animate-in slide-in-from-bottom-screen">
      {children}
    </div>
  );
};
