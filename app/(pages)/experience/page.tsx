"use client";

import { Rings, SlideInFromBottom, SlideInFromLeft } from "@app/components";
import { range } from "@app/utils";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

interface Experience {
  title: string;
  startYear: number;
  endYear: number;
  company: string;
}

const experience: Experience[] = [
  {
    title: "Technical Support Engineer",
    startYear: 2016,
    endYear: 2017,
    company: "Teleperformance",
  },
  {
    title: "Technical Support Engineer",
    startYear: 2017,
    endYear: 2019,
    company: "Concentrix",
  },
  {
    title: "Frontend Developer",
    startYear: 2019,
    endYear: 2021,
    company: "Freelance",
  },
  {
    title: "Software Developer",
    startYear: 2021,
    endYear: 2023,
    company: "Scandiweb",
  },
  {
    title: "Frontend Developer",
    startYear: 2023,
    endYear: 2024,
    company: "Freelance",
  },
];

// Must be an even number larger than `experience.length`
const MAX_YEAR_COUNT = 1000;
const PAGES_PER_YEAR = MAX_YEAR_COUNT / experience.length;

const buttonClassName =
  "flex items-center active:scale-125 hover:scale-105 justify-center hover:ring-2 hover:ring-blue-600 transition-all duration-300 px-2 py-2 border rounded-full border-white/20 bg-black/80";
const iconClassName = "w-12 h-12 md:w-36 md:h-36";

const ExperiencePage = () => {
  const onForwardClick = () => {
    const scrollElem = document.getElementById("scrollElem");
    const scrollTop = scrollElem?.scrollTop ?? 0;
    const windowHeight = window.innerHeight;
    // if (scrollTop === undefined) throw new Error("Invalid scrollTop ");
    const currentPageNum = scrollTop / windowHeight;
    const nextElemIndex =
      ((currentPageNum + PAGES_PER_YEAR) / MAX_YEAR_COUNT) * experience.length;
    const children = document.querySelectorAll(".year");
    const elemToScrollTo = children[nextElemIndex];
    elemToScrollTo.scrollIntoView({ behavior: "smooth" });
    // console.log({
    //   currentPageNum,
    //   nextElemIndex,
    //   children,
    //   elemToScrollTo,
    // });
  };

  return (
    <SlideInFromBottom>
      <div className="absolute flex gap-4 top-4 right-4">
        <button className={buttonClassName}>
          <IoIosArrowBack className={iconClassName} />
        </button>
        <button className={buttonClassName} onClick={onForwardClick}>
          <IoIosArrowForward className={iconClassName} />
        </button>
      </div>
      <Rings />
      <div
        id="scrollElem"
        className="h-[100dvh] scroll-smooth snap-y snap-mandatory overflow-x-hidden overflow-y-auto app-scrollbar"
      >
        {range(0, MAX_YEAR_COUNT).map((n) => {
          // console.log({ n, r: n % 200 });
          const isEmpty = n % 200 !== 0 && n !== 0;
          const exp = isEmpty
            ? {
                title: "",
                startYear: 0,
                endYear: 0,
                company: "",
              }
            : experience[n / PAGES_PER_YEAR];

          // if (!isEmpty) console.log(exp);
          // if (!exp) return;
          if (isEmpty)
            return (
              <div
                key={n}
                className="snap-always snap-center h-[100dvh] left-4 bg-white w-2 relative"
              >
                <span className="absolute w-6 h-6 transform scale-125 -translate-x-[8px] -translate-y-1/2 bg-red-500 rounded-full top-1/2" />
              </div>
            );
          return (
            <div
              key={n}
              className="year snap-always snap-center h-[100dvh] left-4 bg-white w-2 relative"
            >
              <span className="absolute w-6 h-6 transform scale-125 -translate-x-[8px] -translate-y-1/2 bg-red-500 rounded-full top-1/2" />
              <div className="absolute px-4 py-2 transform translate-x-8 -translate-y-1/2 top-1/2 bg-black/40 rounded-3xl">
                <SlideInFromLeft duration={1300}>
                  <p className="space-x-2 md:text-xl">
                    <span className="text-3xl text-purple-600">
                      {exp.startYear}
                    </span>
                  </p>
                  <h2 className="text-3xl w-[80vw] md:w-max md:text-5xl">
                    {exp.title}
                  </h2>
                  <span className="text-blue-600">@{exp.company}</span>
                </SlideInFromLeft>
              </div>
            </div>
          );
        })}
      </div>
    </SlideInFromBottom>
  );
};

export default ExperiencePage;
