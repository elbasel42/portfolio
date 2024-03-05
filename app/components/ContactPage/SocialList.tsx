import { Social } from "@app/components/ContactPage";

import { socials } from "@app/lib";
export const SocialList = () => {
  return (
    <div className="space-y-4 flex flex-col justify-center h-screen">
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
