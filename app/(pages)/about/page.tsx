import { Dots, SlideInFromBottom } from "@app/components";
import { Pacifico } from "next/font/google";
import { twMerge } from "tailwind-merge";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const AboutPage = () => {
  return (
    <SlideInFromBottom>
      <Dots />
      <main className="h-screen overflow-y-auto">
        <div className="h-screen flex justify-center items-center">
          <h1 className={twMerge("text-5xl select-none", pacifico.className)}>
            Frontend Dev
          </h1>
        </div>
        <div className="h-screen">Second Page</div>
      </main>
    </SlideInFromBottom>
  );
};

export default AboutPage;
