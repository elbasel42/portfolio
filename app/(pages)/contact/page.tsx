import { Globe, SlideIn, SlideInFromBottom } from "@app/components";
import { ContactPageForm, SocialList } from "@app/components/ContactPage";
import { Pacifico } from "next/font/google";
import { twMerge } from "tailwind-merge";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

interface ContactPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const ContactPage = ({ searchParams }: ContactPageProps) => {
  const { error } = searchParams;
  console.log({ error });

  return (
    <SlideInFromBottom>
      <Globe />
      <main className="flex h-screen py-4">
        <SocialList />
        <div className="absolute top-0 md:static mt-[10vh] text-center w-screen md:w-[40vw] md:h-[80vh] md:mx-auto md:px-8 md:py-4">
          <SlideIn>
            <h1
              className={twMerge(
                "text-2xl md:text-8xl text-purple-700",
                pacifico.className
              )}
            >
              Let&apos;s get things Done!
            </h1>
          </SlideIn>
        </div>
        <ContactPageForm />
      </main>
    </SlideInFromBottom>
  );
};

export default ContactPage;
