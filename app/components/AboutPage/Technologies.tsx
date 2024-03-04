"use client";

import { TechItem } from "@app/components/AboutPage";
import { technologies } from "@app/lib";
import { useWindowSize } from "@app/hooks";

export const Technologies = () => {
  const { width = 0, height = 0 } = useWindowSize({
    initializeWithValue: false,
  });

  return (
    <div className="flex mt-8">
      <div>
        width: {width} height:{height}
      </div>
      <div className="space-y-4">
        {technologies.slice(0, 6).map((tech, index) => (
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
    </div>
  );
};
