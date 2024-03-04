import { type ElementType } from "react";
import { IoLogoReact } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";

interface Tech {
  icon: ElementType;
  title: string;
  className: string;
}

export const technologies: Tech[] = [
  {
    icon: IoLogoReact,
    title: "React",
    className: "text-blue-600",
  },
  {
    icon: SiTypescript,
    title: "Typescript",
    className: "text-blue-600",
  },
  {
    icon: SiJavascript,
    title: "JavaScript",
    className: "text-yellow-600",
  },
  {
    icon: TbBrandReactNative,
    title: "React Native",
    className: "text-blue-400",
  },
  {
    icon: SiRedux,
    title: "Redux",
    className: "text-purple-600",
  },
  {
    icon: TbBrandNextjs,
    title: "NextJs",
    className: "text-white",
  },
  {
    icon: FaNodeJs,
    title: "NodeJs",
    className: "text-green-600"
  }
];
