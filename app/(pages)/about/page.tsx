import Link from "next/link";
import { FaDownload } from "react-icons/fa6";
import { Dots, HomeButton, SlideInFromBottom } from "@app/components";
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
      <HomeButton />
      <Link
        className="fixed z-20 flex flex-col gap-2 px-2 py-2 border rounded-lg hover:scale-125 top-4 border-white/50 right-4"
        href="/Abdelrahman-Elbasel-Resume.pdf"
        download="Abdelrahman-Elbasel-Resume.pdf"
      >
        <FaDownload className="w-8 h-8 active:scale-125 hover:bounce" />
      </Link>
      <Dots />
      <main className="h-[100svh] overflow-y-auto snap-y scroll-smooth snap-mandatory app-scrollbar">
        <AboutPageSection className="items-center justify-center">
          <ABoutPageMainTitle />
          <AboutPageDownArrow id="bio" />
        </AboutPageSection>
        <AboutPageSection id="bio" className="relative items-center px-4">
          <AboutPageTitle text="Bio" />
          <Bio />
          <AboutPageDownArrow id="tech" />
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
