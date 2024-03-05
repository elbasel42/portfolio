import { SlideInFromRight } from "@app/components";
import { ContactPageInput } from "./ContactPageInput";
import { capitalize } from "@app/utils";

const inputNames = ["name", "email", "subject"];

export const ContactPageForm = () => {
  return (
    <form className="ml-auto mr-[44vw] space-y-4">
      {inputNames.map((n, index) => (
        <SlideInFromRight
          key={n}
          className="px-4 py-2"
          delay={2000}
          duration={(index + 2) * 1000}
        >
          <ContactPageInput name={n} placeholder={capitalize(n)} />
        </SlideInFromRight>
      ))}
    </form>
  );
};
