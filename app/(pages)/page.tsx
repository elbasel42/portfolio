import { Net } from "@app/components/Net";
import { HomeLink } from "@app/components/HomeLink";

const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-4 text-4xl font-bold text-center text-red-800 md:text-6xl lg:text-8xl neonText fade-in">
        Abdelrahman Elbasel
      </h1>
      <nav className="flex flex-col lg:flex-row">
        <HomeLink href="/about" text="about" />
        <HomeLink href="/contact" text="contact" />
        <HomeLink href="/projects" text="projects" />
        <HomeLink href="/experience" text="experience" />
      </nav>
      <Net />
    </main>
  );
};

export default HomePage;
