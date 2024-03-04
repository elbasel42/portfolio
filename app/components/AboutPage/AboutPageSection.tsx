import { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface AboutPageSection {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const AboutPageSection = ({
  children,
  className,
  id,
}: AboutPageSection) => {
  return (
    <div
      id={id}
      className={twMerge(
        "h-screen snap-center py-4 px-8 flex flex-col items-center",
        className
      )}
    >
      {children}
    </div>
  );
};
