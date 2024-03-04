import Link from "next/link";
import { HackedText, SlideIn } from "@app/components";

interface HomeLinkProps {
  href: string;
  text: string;
  delay?: number;
}

export const HomeLink = ({ href, text, delay = 1000 }: HomeLinkProps) => {
  return (
    <Link href={href}>
      <SlideIn
        delay={delay}
        className="px-4 text-3xl text-center text-red-500 rounded-2xl hover:text-white hover:bg-red-600"
      >
        <HackedText text={text} />
      </SlideIn>
    </Link>
  );
};
