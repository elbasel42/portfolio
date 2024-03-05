import { Pacifico } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { BackLink, Globe, SlideIn, SlideInFromBottom } from "@app/components";
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
      <BackLink />
      <Globe />
      <main className="flex h-[100svh]">
        <SocialList />
        <div className="absolute top-0 mt-[10svh] md:static text-center w-screen md:w-[40vw] md:h-[80svh] md:mx-auto md:px-8 md:py-4">
          <SlideIn>
            <h1
              className={twMerge(
                "text-2xl md:text-6xl lg:text-8xl text-purple-700",
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
