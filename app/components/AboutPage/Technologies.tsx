"use client";

import { TechItem } from "@app/components/AboutPage";
import { technologies } from "@app/lib";
import { useWindowSize } from "@app/hooks";

export const Technologies = () => {
  const { width = 0 } = useWindowSize({
    initializeWithValue: false,
  });

  const isMobile = width < 700;
  const separator = isMobile ? 9 : 6;

  return (
    <div className="flex mt-8">
      <div className="space-y-4">
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
      <div className="overflow-hidden">
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
