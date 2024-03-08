"use client"

import { useEffect, useState } from "react";
import { getRandomQuote } from "@app/utils";
import { SlideIn } from "@app/components/SlideIn";

export const Quote = () => {
  const [q, setQ] = useState("")
  const [a, setA] = useState("")

  useEffect(() => {
    const { quote, author } = getRandomQuote();
    setQ(quote)
    setA(author)
  }, [])
  
    return (
    <div className="fade-in absolute px-4 py-2 transform translate-x-8 -translate-y-1/2 experience w-[80vw] top-1/2 bg-black/40 rounded-3xl">
      <SlideIn>
        <p className="text-3xl">{q}</p>
        <p className="italic text-red-600">-{a}</p>
      </SlideIn>
    </div>
  );
};
