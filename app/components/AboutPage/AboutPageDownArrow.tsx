"use client";

import { IoIosArrowDown } from "react-icons/io";

interface AboutPageDownArrowProps {
  id: string;
}

export const AboutPageDownArrow = ({ id }: AboutPageDownArrowProps) => {
  return (
    <IoIosArrowDown
      onClick={() =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      }
      className="absolute cursor-pointer w-8 h-8 bounce bottom-[4rem] md:bottom-10"
    />
  );
};
