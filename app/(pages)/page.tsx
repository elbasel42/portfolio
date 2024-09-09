import { HomeNav, Net } from "@app/components";

const HomePage = () => {
  return (
    <>
      <Net />
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="mb-4 select-none text-4xl font-bold text-center text-red-800 md:text-6xl lg:text-8xl neonText fade-in">
          Abdelrahman Elbasel
        </h1>
        <HomeNav />
      </main>
    </>
  );
};

export default HomePage;
