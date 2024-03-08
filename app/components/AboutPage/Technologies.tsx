import { TechItem } from "@app/components/AboutPage";
import { technologies } from "@app/lib";

export const Technologies = () => {
  const separator = technologies.length / 2;

  return (
    <div className="flex mt-20 px-1 md:mt-8">
      <div className="space-y-4 ml-auto">
        {technologies.slice(0, separator).map((tech, index) => (
          <TechItem
            Logo={tech.icon}
            title={tech.title}
            slideFrom="right"
            animDuration={(index + 2) * 1000}
            className={tech.className}
            key={tech.title}
          />
        ))}
      </div>
      <div className="space-y-4 overflow-hidden mr-auto">
        {technologies
          .slice(separator, technologies.length)
          .map((tech, index) => (
            <TechItem
              Logo={tech.icon}
              title={tech.title}
              slideFrom="left"
              animDuration={(index + 2) * 1000}
              className={tech.className}
              key={tech.title}
            />
          ))}
      </div>
    </div>
  );
};
