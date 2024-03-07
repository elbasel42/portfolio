"use client";

import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { experiences } from "@app/lib";
import { range } from "@app/utils";
import { Rings, SlideInFromBottom } from "@app/components";
import { Experience, ScreenLine } from "@app/components/ExperiencePage";

//! Must be an even number larger than `experience.length`
const MAX_YEAR_COUNT = 400;
const PAGES_PER_YEAR = MAX_YEAR_COUNT / experiences.length;

const BUTTON_CLASS =
  "flex items-center disabled:bg-gray-800 enabled:active:scale-125 enabled:cursor-pointer disabled:cursor-not-allowed enabled:hover:scale-105 justify-center enabled:hover:ring-2 enabled:hover:ring-blue-600 transition-all duration-300 px-2 py-2 enabled:border rounded-full border-white/20 enabled:bg-black/80";
const ICON_CLASS = "w-12 h-12 md:w-36 md:h-36";

const ExperiencePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onButtonClick = (direction: "backwards" | "forwards") => {
    const scrollElem = document.getElementById("scrollElem");
    const scrollTop = scrollElem?.scrollTop ?? 0;
    const windowHeight = window.innerHeight;
    const remainder = (scrollTop / windowHeight) % PAGES_PER_YEAR;
    const closestPageNum = scrollTop / windowHeight - remainder;
    const pageNum =
      direction === "backwards"
        ? closestPageNum - PAGES_PER_YEAR
        : closestPageNum + PAGES_PER_YEAR;
    const elemIndex = (pageNum / MAX_YEAR_COUNT) * experiences.length;
    if (elemIndex < 0) return;
    if (elemIndex >= experiences.length) return;
    const children = document.querySelectorAll(".experience");

    console.log({ scrollElem, remainder, closestPageNum , pageNum, elemIndex, children});
    const elemToScrollTo = children[elemIndex];
    elemToScrollTo.scrollIntoView({ behavior: "smooth" });
    //! setTimeout to prevent state from updating before the function s completed
    setTimeout(() => {
      setCurrentIndex(elemIndex);
    }, 1000);
  };

  return (
    <SlideInFromBottom>
      <div className="absolute flex gap-4 top-4 right-4">
        <button
          disabled={currentIndex <= 0}
          onClick={() => onButtonClick("backwards")}
          className={BUTTON_CLASS}
        >
          <IoIosArrowBack className={ICON_CLASS} />
        </button>
        <button
          disabled={currentIndex >= experiences.length - 1}
          className={BUTTON_CLASS}
          onClick={() => onButtonClick("forwards")}
        >
          <IoIosArrowForward className={ICON_CLASS} />
        </button>
      </div>
      <Rings />
      <div
        id="scrollElem"
        className="h-[100dvh] scroll-smooth snap-y snap-mandatory overflow-x-hidden overflow-y-auto app-scrollbar"
      >
        {range(0, MAX_YEAR_COUNT).map((n) => {
          const isEmpty = n % PAGES_PER_YEAR !== 0 && n !== 0;
          if (isEmpty) return <ScreenLine key={n} />;

          const { title, startYear, company } = experiences[n / PAGES_PER_YEAR];

          return (
            <ScreenLine key={n}>
              <Experience title={title} year={startYear} company={company} />
            </ScreenLine>
          );
        })}
      </div>
    </SlideInFromBottom>
  );
};

export default ExperiencePage;
