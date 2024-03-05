import { SlideInFromRight } from "@app/components";
import { capitalize } from "@app/utils";
import {
  ContactPageInput,
  ContactPageTextArea,
} from "@app/components/ContactPage";

const inputNames = ["name", "email", "subject"];

export const ContactPageForm = () => {
  return (
    <form className="mx-auto md:ml-auto mt-[20vh] md:mt-[10vh] space-y-4">
      {inputNames.map((n, index) => (
        <SlideInFromRight
          className="px-1 py-1"
          key={n}
          delay={2000}
          duration={(index + 2) * 1000}
        >
          <ContactPageInput name={n} placeholder={capitalize(n)} />
        </SlideInFromRight>
      ))}
      <SlideInFromRight
        delay={2000}
        duration={4000}
        className="flex justify-end w-full px-1 py-1"
      >
        <ContactPageTextArea />
      </SlideInFromRight>
      <SlideInFromRight delay={2000} duration={5000} className="w-full">
        <button className="w-full px-4 py-2 border md:text-3xl border-white/20 rounded-3xl bg-black/80">
          Send
        </button>
      </SlideInFromRight>
    </form>
  );
};
