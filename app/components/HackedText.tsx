"use client";

import { useEffect, useState } from "react";
import { getRandomLetter } from "@app/utils/getRandomLetter";

interface HackedTextProps {
  text: string;
}

export const HackedText = ({ text }: HackedTextProps) => {
  const [iteration, setIteration] = useState(0);
  const [hackedText, setHackedText] = useState(text);

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
    if (iteration > text.length) return;
    setTimeout(() => {
      randomizeLetters();
    }, iteration * 30);
    setIteration((prev) => prev + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [iteration]);

  return (
    <span className="font-mono" onMouseEnter={onMouseEnter}>
      {hackedText}
    </span>
  );
};
