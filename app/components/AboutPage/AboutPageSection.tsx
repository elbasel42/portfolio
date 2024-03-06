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
    <section
      id={id}
      className={twMerge(
        "h-screen snap-always relative snap-center px-2 flex flex-col",

        className
      )}
    >
      {children}
    </section>
  );
};
