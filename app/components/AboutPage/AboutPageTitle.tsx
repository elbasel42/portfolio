import { Pacifico } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { SlideIn, HackedText } from "@app/components";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});
interface AboutPageProps {
  text: string;
}

export const AboutPageTitle = ({ text }: AboutPageProps) => {
  return (
    <SlideIn
      className={twMerge("mt-20 text-red-600 text-6xl text-center", pacifico.className)}
    >
      {text}
    </SlideIn>
  );
};
