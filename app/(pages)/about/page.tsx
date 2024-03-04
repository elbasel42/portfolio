import { PageTransition } from "@app/components";

const AboutPage = () => {
  return (
    <PageTransition
      from="translate-y-[100vh] bg-red-600"
      to="translate-y-0 bg-black"
    >
      <main className="flex flex-col items-center justify-center h-screen">
        About Page
      </main>
    </PageTransition>
  );
};

export default AboutPage;
