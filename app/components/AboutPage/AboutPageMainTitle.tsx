import { Pacifico } from "next/font/google";
import { twMerge } from "tailwind-merge";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

export const ABoutPageMainTitle = () => {
  return (
    <h1
      className={twMerge(
        "text-center text-5xl select-none",
        pacifico.className
      )}
    >
      Frontend Developer
    </h1>
  );
};
