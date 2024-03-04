import Link from "next/link";
import { HackedText } from "./HackedText";
import { SlideIn } from "./SlideIn";

interface HomeLinkProps {
  href: string;
  text: string;
}

export const HomeLink = ({ href, text }: HomeLinkProps) => {
  return (
    <Link
      className="px-4 text-3xl text-center text-red-500 hover:text-white hover:bg-red-600"
      href={href}
    >
      <SlideIn>
        <HackedText text={text} />
      </SlideIn>
    </Link>
  );
};
