import { SlideInFromLeft } from "../SlideInFromLeft";

interface ExperienceProps {
  year: number;
  company: string;
  title: string;
}

export const Experience = ({ year, company, title }: ExperienceProps) => {
  return (
    <div className="absolute px-4 py-2 transform translate-x-8 -translate-y-1/2 experience top-1/2 bg-black/40 rounded-3xl">
      <SlideInFromLeft duration={1300}>
        <p className="space-x-2 md:text-xl">
          <span className="text-3xl text-purple-600">{year}</span>
        </p>
        <h2 className="text-3xl w-[80vw] md:w-max md:text-5xl">{title}</h2>
        <span className="italic font-mono">@{company}</span>
      </SlideInFromLeft>
    </div>
  );
};
