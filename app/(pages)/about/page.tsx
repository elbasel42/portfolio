import { PageTransition } from "@app/components/PageTransition";

const AboutPage = () => {
  return (
    <PageTransition
      className="transform translate-y-[100vh] rounded-t-3xl duration-2000 bg-red-600"
      transition="translate-y-0 bg-black rounded-t-none"
    >
      <main className="flex items-center justify-center flex-col h-screen">
        About Page
      </main>
    </PageTransition>
  );
};

export default AboutPage;
