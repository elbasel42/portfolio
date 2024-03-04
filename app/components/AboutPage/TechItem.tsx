import { type ElementType } from "react";
import { SlideInFromRight, SlideIn, SlideInFromLeft } from "@app/components";
import { twMerge } from "tailwind-merge";

interface TechItemProps {
  Logo: ElementType;
  title: string;
  slideFrom: "right" | "left";
  animDuration?: number;
  containerClassName?: string;
  logoClassName?: string;
  titleClassName?: string;
  className?: string;
}

export const TechItem = ({
  Logo,
  title = "",
  animDuration = 1000,
  slideFrom = "right",
  containerClassName = slideFrom === "left" ? "flex-row-reverse" : "",
  logoClassName = "",
  titleClassName = "",
  className = "",
}: TechItemProps) => {

  const Container = slideFrom === "right" ? SlideInFromRight : SlideInFromLeft;

  return (
    <Container duration={animDuration}>
      <div
        className={twMerge(
          "flex bg-black/70 items-center gap-2 px-2 py-2 rounded-3xl",
          containerClassName
        )}
      >
        <Logo
          className={twMerge(
            "w-8 h-8 md:w-12 md:h-12",
            className,
            logoClassName
          )}
        />
        <SlideIn duration={animDuration}>
          <h2
            className={twMerge(
              "text-xl md:text-3xl text-white",
              // className,
              titleClassName
            )}
          >
            {title}
          </h2>
        </SlideIn>
      </div>
    </Container>
  );
};
