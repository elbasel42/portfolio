import { Social } from "@app/components/ContactPage";

import { socials } from "@app/lib";
export const SocialList = () => {
  return (
    <div className="absolute flex items-center justify-center w-screen bottom-4 md:space-y-4 md:w-fit md:flex-col md:h-screen md:static">
      {socials.map((s, index) => (
        <Social
          Icon={s.icon}
          href={s.href}
          key={s.href}
          animDuration={(index + 2) * 1000}
        />
      ))}
    </div>
  );
};
