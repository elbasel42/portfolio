import { IoIosArrowDown } from "react-icons/io";

interface AboutPageDownArrowProps {
  href: string;
}

export const AboutPageDownArrow = ({ href }: AboutPageDownArrowProps) => {
  return (
    <a href={href}>
      <IoIosArrowDown className="absolute w-8 h-8 bounce bottom-[5rem] md:bottom-10" />
    </a>
  );
};
