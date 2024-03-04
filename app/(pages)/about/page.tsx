import { PageTransition } from "@app/components/PageTransition";

const AboutPage = () => {
  return (
    <PageTransition
      from="translate-y-[100vh] bg-red-600"
      to="translate-y-0 bg-black"
    >
      <main className="flex items-center justify-center flex-col h-screen">
        About Page
      </main>
    </PageTransition>
  );
};

export default AboutPage;
