import {
  AboutPageSection,
  AboutPageTitle,
  Dots,
  SlideIn,
  SlideInFromBottom,
} from "@app/components";
import { Pacifico } from "next/font/google";
import { twMerge } from "tailwind-merge";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const AboutPage = () => {
  return (
    <SlideInFromBottom>
      <Dots />
      <main className="snap-y h-screen scroll-smooth snap-mandatory overflow-y-auto scrollbar-thin scrollbar-track-rounded-3xl scrollbar-thumb-rounded-3xl scrollbar-track-black scrollbar-thumb-red-600">
        <AboutPageSection className="items-center">
          <h1 className={twMerge("text-5xl select-none", pacifico.className)}>
            Frontend Developer
          </h1>
        </AboutPageSection>
        <AboutPageSection>
          <AboutPageTitle text="Tools" />
        </AboutPageSection>
        <div className="h-screen snap-center">Second Page</div>
        <div className="h-screen snap-center">Second Page</div>
        <div className="h-screen snap-center">Second Page</div>
      </main>
    </SlideInFromBottom>
  );
};

export default AboutPage;
