"use client";

import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { experiences } from "@app/lib";
import { range } from "@app/utils";
import { HomeButton, Rings, SlideInFromBottom } from "@app/components";
import { Experience, ScreenLine } from "@app/components/ExperiencePage";

//! Must be an even number larger than `experience.length`
const TOTAL_PAGE_COUNT = 100;
const PAGES_PER_ITEM = TOTAL_PAGE_COUNT / experiences.length;

const BUTTON_CLASS =
  "flex items-center disabled:bg-gray-800 enabled:active:scale-125 enabled:cursor-pointer disabled:cursor-not-allowed enabled:hover:scale-105 justify-center enabled:hover:ring-2 enabled:hover:ring-blue-600 transition-all duration-300 px-2 py-2 enabled:border rounded-full border-white/20 enabled:bg-black/80";
const ICON_CLASS = "w-12 h-12 md:w-36 md:h-36";

const ExperiencePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onButtonClick = (direction: "backwards" | "forwards") => {
    const scrollElem = document.getElementById("scrollElem");
    const scrollTop = scrollElem?.scrollTop ?? 0;
    const windowHeight = window.innerHeight;
    const currentPageNum = scrollTop / windowHeight;

    //! Get closest page number
    const remainder = currentPageNum % PAGES_PER_ITEM;
    const closestPageNum = currentPageNum - remainder;

    const nextPageNum = closestPageNum + PAGES_PER_ITEM;
    let prevPageNum = closestPageNum - PAGES_PER_ITEM;
    if (prevPageNum < 0) prevPageNum = 0;

    const forwardsScrollBy =
      windowHeight * nextPageNum - currentPageNum * windowHeight;

    const backwardsScrollBy =
      windowHeight * prevPageNum - currentPageNum * windowHeight;

    if (direction === "forwards") scrollElem?.scrollBy(0, forwardsScrollBy);
    if (direction === "backwards") scrollElem?.scrollBy(0, backwardsScrollBy);

    console.log({
      forwardsScrollBy,
      backwardsScrollBy,
      scrollTop,
      windowHeight,
      currentPageNum,
      remainder,
      closestPageNum,
      nextPageNum,
      prevPageNum,
    });
  };

  return (
    <SlideInFromBottom>
      <HomeButton />
      <div className="absolute flex gap-4 top-4 right-4">
        <button
          // disabled={currentIndex <= 0}
          onClick={() => onButtonClick("backwards")}
          className={BUTTON_CLASS}
        >
          <IoIosArrowBack className={ICON_CLASS} />
        </button>
        <button
          // disabled={currentIndex >= experiences.length - 1}
          className={BUTTON_CLASS}
          onClick={() => onButtonClick("forwards")}
        >
          <IoIosArrowForward className={ICON_CLASS} />
        </button>
      </div>
      <Rings />
      <main
        id="scrollElem"
        className="h-[100dvh] scroll-smooth snap-y snap-mandatory overflow-x-hidden overflow-y-auto app-scrollbar"
      >
        {range(0, TOTAL_PAGE_COUNT - PAGES_PER_ITEM + 1).map((n) => {
          // {range(0, TOTAL_PAGE_COUNT).map((n) => {
          const isEmpty = n % PAGES_PER_ITEM !== 0 && n !== 0;
          if (isEmpty) return <ScreenLine key={n} />;

          const { title, startYear, company } = experiences[n / PAGES_PER_ITEM];

          return (
            <ScreenLine key={n}>
              <Experience title={title} year={startYear} company={company} />
            </ScreenLine>
          );
        })}
      </main>
    </SlideInFromBottom>
  );
};

export default ExperiencePage;
