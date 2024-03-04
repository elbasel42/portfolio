"use client";

import { Dots, SlideIn, SlideInFromBottom } from "@app/components";
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
        <div className="snap-center h-screen flex justify-center items-center">
          <h1 className={twMerge("text-5xl select-none", pacifico.className)}>
            Frontend Dev
          </h1>
        </div>
        <div className="h-screen snap-center py-4 px-8 flex justify-center">
          <SlideIn className={twMerge("mt-20 text-red-600 text-4xl", pacifico.className)}>
            Tools
          </SlideIn>
        </div>
        <div className="h-screen snap-center">Second Page</div>
        <div className="h-screen snap-center">Second Page</div>
        <div className="h-screen snap-center">Second Page</div>
      </main>
    </SlideInFromBottom>
  );
};

export default AboutPage;
