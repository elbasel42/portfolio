import { type ElementType } from "react";
import { IoLogoReact } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandPython } from "react-icons/tb";
import { BiLogoPhp } from "react-icons/bi";
import { IoLogoPwa } from "react-icons/io5";
import { GrArchlinux } from "react-icons/gr";

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
    icon: TbBrandReactNative,
    title: "Native",
    className: "text-blue-400",
  },
  {
    icon: SiRedux,
    title: "Redux",
    className: "text-purple-600",
  },  
  {
    icon: IoLogoPwa,
    title: "PWA",
    className: "text-white",
  },
  {
    icon: SiTailwindcss,
    title: "Tailwind",
    className: "text-cyan-600",
  },
  //! -------------------------------------
  {
    icon: GrArchlinux,
    title: "Linux",
    className: "text-blue-800",
  },
  {
    icon: SiJavascript,
    title: "JavaScript",
    className: "text-yellow-600",
  },
  {
    icon: FaNodeJs,
    title: "NodeJs",
    className: "text-green-600",
  },
  {
    icon: TbBrandPython,
    title: "Python",
    className: "text-green-600",
  },
  {
    icon: BiLogoPhp,
    title: "PHP",
    className: "text-purple-800",
  },
  {
    icon: TbBrandNextjs,
    title: "NextJs",
    className: "text-white",
  },
];
