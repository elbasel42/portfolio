import { ElementType } from "react";
import { SlideInFromLeft } from "@app/components";

interface SocialProps {
  Icon: ElementType;
  href: string;
  animDuration?: number;
}

export const Social = ({ Icon, href, animDuration = 1000 }: SocialProps) => {
  return (
    <SlideInFromLeft className="px-1 py-1 md:px-3 md:py-2" delay={1000} duration={animDuration}>
      <a href={href} target="_blank">
        <Icon className="w-8 h-8 md:w-20 md:h-20 transition-transform duration-300 hover:scale-125 hover:text-red-600" />
      </a>
    </SlideInFromLeft>
  );
};
