import Link from "next/link";
import { TbArrowBackUpDouble } from "react-icons/tb";

export const BackLink = () => {
  return (
    <Link
      href="/"
      className="bg-black/80 fixed z-20 px-2 py-2 transform border rounded-lg transition-all duration-2000 hover:rotate-[360deg] active:rotate-[360deg] top-4 border-white/50 right-4"
    >
      <TbArrowBackUpDouble className="md:w-8 md:h-8 active:scale-125 hover:scale-125" />
    </Link>
  );
};
