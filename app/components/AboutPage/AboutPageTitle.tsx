import { Pacifico } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { SlideIn } from "@app/components";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});
interface AboutPageProps {
  text: string;
}

export const AboutPageTitle = ({ text }: AboutPageProps) => {
  return (
    <h2>
      <SlideIn
        className={twMerge(
          "mt-20 pb-3 md:mt-6 text-red-600 text-4xl md:text-6xl text-center",
          pacifico.className
        )}
      >
        {text}
      </SlideIn>
    </h2>
  );
};
