import { Net } from "@app/components/Net";
import Link from "next/link";

const HomePage = () => {
  return (
    <main className="flex items-center flex-col justify-center h-screen">
      <h1 className="text-3xl text-red-800">HomePage</h1>
      <Link className="text-3xl text-blue-800" href="/about">
        About
      </Link>

      <Net />
    </main>
  );
};

export default HomePage;
