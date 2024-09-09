import { Pacifico } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Globe, HomeButton, SlideIn, SlideInFromBottom } from "@app/components";
import { ContactPageForm, SocialList } from "@app/components/ContactPage";
import { type ContactFormValidationError } from "@app/types";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

interface ContactPageProps {
  searchParams: { error: ContactFormValidationError };
}

const ContactPage = ({ searchParams }: ContactPageProps) => {
  const { error } = searchParams;

  return (
    <SlideInFromBottom>
      <HomeButton />
      <Globe />
      <main className="flex h-[100dvh]">
        <SocialList />
        <div className="absolute top-0 mt-[5dvh] md:static text-center w-screen md:w-[40vw] md:mt-[10dvh] md:h-[80dvh] md:mx-auto md:px-8 md:py-4">
          <SlideIn>
            <h1
              className={twMerge(
                "text-2xl md:text-6xl pb-2 lg:text-8xl text-purple-700",
                pacifico.className
              )}
            >
              Let&apos;s get things Done!
            </h1>
          </SlideIn>
        </div>
        <ContactPageForm error={error} />
      </main>
    </SlideInFromBottom>
  );
};

export default ContactPage;
