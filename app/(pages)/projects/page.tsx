import { Birds, HomeButton, Topology } from "@app/components";
import { Pacifico } from "next/font/google";
import { twMerge } from "tailwind-merge";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});
const ProjectsPage = () => {
  return (
    <main className="h-[100dvh] flex items-center justify-center">
      {/* <Birds /> */}
      <Topology />
      <HomeButton />
      <h1
        className={twMerge(
          "md:text-9xl text-4xl text-purple-600 md:underline text-center",
          pacifico.className
        )}
      >
        Under Construction
      </h1>
    </main>
  );
};

export default ProjectsPage;
