"use client";

import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { experiences } from "@app/lib";
import { range } from "@app/utils";
import { HomeButton, Rings, SlideInFromBottom } from "@app/components";
import { Experience, Quote, ScreenLine } from "@app/components/ExperiencePage";
import debounce from "lodash.debounce";

//! Must be an even number larger than `experience.length`
const TOTAL_PAGE_COUNT = 100;
const PAGES_PER_ITEM = TOTAL_PAGE_COUNT / experiences.length;

const BUTTON_CLASS =
  "flex items-center disabled:bg-gray-800 enabled:active:scale-125 enabled:cursor-pointer disabled:cursor-not-allowed enabled:hover:scale-105 justify-center enabled:hover:ring-2 enabled:hover:ring-blue-600 transition-all duration-300 px-2 py-2 enabled:border rounded-full border-white/20 enabled:bg-black/80";
const ICON_CLASS = "w-12 h-12 md:w-36 md:h-36";

const ExperiencePage = () => {
  const [scrollElemTop, setScrollTop] = useState(0);

  const onButtonClick = (direction: "backwards" | "forwards") => {
    const scrollElem = document.getElementById("scrollElem");
    const scrollTop = scrollElem?.scrollTop ?? 0;
    const windowHeight = window.innerHeight;
    const currentPageNum = scrollTop / windowHeight;
    const remainder = currentPageNum % PAGES_PER_ITEM;
    const closestPageNum = currentPageNum - remainder;
    const nextPageNum = closestPageNum + PAGES_PER_ITEM;
    let prevPageNum = closestPageNum - PAGES_PER_ITEM;
    prevPageNum = prevPageNum < 0 ? 0 : prevPageNum;
    const forwardsScrollBy =
      windowHeight * nextPageNum - currentPageNum * windowHeight;
    const backwardsScrollBy =
      windowHeight * prevPageNum - currentPageNum * windowHeight;
    if (direction === "forwards")
      scrollElem?.scrollBy({ top: forwardsScrollBy, behavior: "smooth" });
    if (direction === "backwards")
      scrollElem?.scrollBy({ top: backwardsScrollBy, behavior: "smooth" });
  };

  const handleScroll = debounce(() => {
    const scrollElem = document.getElementById("scrollElem");
    const scrollTop = scrollElem?.scrollTop;
    setScrollTop(scrollTop ?? 0);
  }, 200);

  if (typeof window == "undefined") return null;

  return (
    <SlideInFromBottom>
      <HomeButton />
      <div className="absolute bounce md:mr-[20vw] mt-[20dvh] md:mt-[30dvh] flex gap-4 top-4 right-4">
        <button
          disabled={scrollElemTop === 0}
          onClick={() => onButtonClick("backwards")}
          className={BUTTON_CLASS}
        >
          <IoIosArrowBack className={ICON_CLASS} />
        </button>
        <button
          disabled={
            scrollElemTop >=
              (TOTAL_PAGE_COUNT - PAGES_PER_ITEM) * window?.innerHeight ?? 0
          }
          className={BUTTON_CLASS}
          onClick={() => onButtonClick("forwards")}
        >
          <IoIosArrowForward className={ICON_CLASS} />
        </button>
      </div>
      <Rings />
      <main
        onScroll={handleScroll}
        id="scrollElem"
        className="h-[100dvh] scroll-smooth snap-y snap-mandatory overflow-x-hidden overflow-y-auto app-scrollbar"
      >
        {range(0, TOTAL_PAGE_COUNT - PAGES_PER_ITEM + 1).map((n) => {
          const isEmpty = n % PAGES_PER_ITEM !== 0 && n !== 0;

          if (isEmpty)
            return (
              <ScreenLine key={n}>
                {/* <Quote /> */}
              </ScreenLine>
            );

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
