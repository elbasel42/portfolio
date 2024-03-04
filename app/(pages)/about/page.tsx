import { Pacifico } from "next/font/google";
import { Dots, SlideInFromBottom } from "@app/components";
import { twMerge } from "tailwind-merge";
import { IoIosArrowDown } from "react-icons/io";
import { TbArrowBackUpDouble } from "react-icons/tb";
import {
  AboutPageSection,
  AboutPageTitle,
  Bio,
} from "@app/components/AboutPage";
import Link from "next/link";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const AboutPage = () => {
  return (
    <SlideInFromBottom>
      <Link
        href="/"
        className="fixed z-20 px-2 py-2 transform border rounded-lg transition-all duration-2000 hover:rotate-[360deg] active:rotate-[360deg] top-4 border-white/50 right-4"
      >
        <TbArrowBackUpDouble className="w-8 h-8 active:scale-125 hover:scale-125" />
      </Link>
      <Dots />
      <main className="h-screen overflow-y-auto snap-y scroll-smooth snap-mandatory app-scrollbar">
        <AboutPageSection className="relative justify-center">
          <h1
            className={twMerge(
              "text-center text-5xl select-none",
              pacifico.className
            )}
          >
            Frontend Developer
          </h1>
          <a href="#bio">
            <IoIosArrowDown className="absolute w-8 h-8 bounce bottom-8" />
          </a>
        </AboutPageSection>
        <AboutPageSection id="bio">
          <AboutPageTitle text="Bio" />
          <Bio />
        </AboutPageSection>
        <AboutPageSection>
          <AboutPageSection>
            <AboutPageTitle text="Tools" />
          </AboutPageSection>
          <AboutPageTitle text="Tools" />
        </AboutPageSection>
      </main>
    </SlideInFromBottom>
  );
};

export default AboutPage;
