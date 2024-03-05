import { Pacifico } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Globe, SlideIn, SlideInFromBottom } from "@app/components";
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
        <ContactPageForm error={error} />
      </main>
    </SlideInFromBottom>
  );
};

export default ContactPage;
