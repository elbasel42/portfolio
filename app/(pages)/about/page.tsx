import { Dots, PageTransition } from "@app/components";
import { Pacifico } from "next/font/google";
import { twMerge } from "tailwind-merge";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const AboutPage = () => {
  return (
    <PageTransition
      from="translate-y-[1000px] duration-6000 bg-red-600"
      to="translate-y-0 bg-black"
    >
      <Dots />
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className={twMerge("text-5xl select-none", pacifico.className)}>
          Frontend Dev
        </h1>
      </main>
    </PageTransition>
  );
};

export default AboutPage;
