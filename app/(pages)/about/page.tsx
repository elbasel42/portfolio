import Link from "next/link";
import { TbArrowBackUpDouble } from "react-icons/tb";
import { Dots, SlideInFromBottom } from "@app/components";
import {
  ABoutPageMainTitle,
  AboutPageDownArrow,
  AboutPageSection,
  AboutPageTitle,
  Bio,
  Technologies,
} from "@app/components/AboutPage";

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
        <AboutPageSection className="items-center justify-center">
          <ABoutPageMainTitle />
          <AboutPageDownArrow href="#bio" />
        </AboutPageSection>
        <AboutPageSection id="bio" className="relative items-center px-4">
          <AboutPageTitle text="Bio" />
          <Bio />
          <AboutPageDownArrow href="#tech" />
        </AboutPageSection>
        <AboutPageSection id="tech">
          <AboutPageTitle text="Technologies" />
          <Technologies />
        </AboutPageSection>
      </main>
    </SlideInFromBottom>
  );
};

export default AboutPage;
