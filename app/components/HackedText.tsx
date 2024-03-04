"use client";

import { useEffect, useState } from "react";
import { getRandomLetter } from "@app/utils/getRandomLetter";
import { twMerge } from "tailwind-merge";
import { useIntersectionObserver } from "@app/hooks";

interface HackedTextProps {
  text: string;
  className?: string;
}

export const HackedText = ({ text, className = "" }: HackedTextProps) => {
  const [iteration, setIteration] = useState(0);
  const [hackedText, setHackedText] = useState(text);
  const { isIntersecting, ref } = useIntersectionObserver({});

  const randomizeLetters = () => {
    const randomText = text
      .split("")
      .map((letter, index) => {
        if (iteration > index) return letter;
        return getRandomLetter();
      })
      .join("");

    setHackedText(randomText);
  };

  const onMouseEnter = () => {
    setIteration(0);
  };

  useEffect(() => {
    if (!isIntersecting) return setIteration(0);
    if (iteration > text.length) return;
    setTimeout(() => {
      randomizeLetters();
    }, iteration * 100);
    setIteration((prev) => prev + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [iteration, isIntersecting]);

  return (
    <span
      ref={ref}
      className={twMerge("select-none font-mono block", className)}
      onMouseEnter={onMouseEnter}
    >
      {hackedText}
    </span>
  );
};
