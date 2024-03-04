import { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface AboutPageSection {
  children: ReactNode;
  className?: string;
}

export const AboutPageSection = ({ children, className }: AboutPageSection) => {
  return (
    <div
      className={twMerge(
        "h-screen snap-center py-4 px-8 flex justify-center items-start",
        className
      )}
    >
      {children}
    </div>
  );
};
