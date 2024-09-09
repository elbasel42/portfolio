import Link from "next/link";
import { HackedText, SlideIn } from "@app/components";

interface HomeLinkProps {
  href: string;
  text: string;
  delay?: number;
  duration?: number;
}

export const HomeLink = ({
  href,
  text,
  delay = 0,
  duration = 1000,
}: HomeLinkProps) => {
  return (
    <Link href={href}>
      <SlideIn
        delay={delay}
        duration={duration}
        className="text-3xl text-center text-red-500 rounded-2xl hover:text-white hover:bg-red-600"
      >
        <HackedText text={text} className="px-4 py-2" />
      </SlideIn>
    </Link>
  );
};
