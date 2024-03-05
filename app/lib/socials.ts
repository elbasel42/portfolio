import { type ElementType } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

interface Social {
  icon: ElementType;
  href: string;
}

export const socials: Social[] = [
  {
    icon: FaGithub,
    href: "https://github.com/elbasel42",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/abdelrahman-elbasel/",
  },
  {
    icon: BsDiscord,
    href: "https://discord.com/users/1086081241985601646",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com/HonorableD55280",
  },
];
