"use client";

import { type FormEvent, useState } from "react";
import { type ContactFormValidationError } from "@app/types";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { SlideIn, SlideInFromRight } from "@app/components";
import { capitalize } from "@app/utils";
import { sendMail } from "@app/actions";
import {
  ContactPageInput,
  ContactPageTextArea,
} from "@app/components/ContactPage";
import { validateFormData } from "@app/actions";

const INPUTS = ["name", "email", "subject"];

interface ContactPageFormProps {
  error?: ContactFormValidationError;
}

export const ContactPageForm = ({ error }: ContactPageFormProps) => {
  const [formHidden, setFormHidden] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formElem = e.target as HTMLFormElement;
    const formData = new FormData(formElem);
    const validationError = await validateFormData(formData);
    console.log({ validationError });
    if (validationError === null) {
      setFormHidden(true);
    }
  };

  if (formHidden)
    return (
      <SlideIn>
        <div className="fade-in mx-auto flex justify-center items-center md:mr-[8vw] md:w-[30vw] flex-col gap-4 md:ml-auto mt-[20vh] md:mt-[10vh] text-xl md:text-3xl text-white bg-black/40 rounded-3xl h-fit px-4 py-2 font-mono text-center">
          <p>Your message has been sent! you should hear from me soon!</p>
          <IoIosCheckmarkCircle className="w-8 h-8 md:w-20 md:h-20 text-green-600" />
        </div>
      </SlideIn>
    );

  return (
    <form
      action={sendMail}
      onSubmit={onSubmit}
      className="mx-auto md:w-[38vw] md:ml-auto mt-[20vh] md:mt-[10vh] space-y-4"
    >
      {INPUTS.map((n, index) => (
        <SlideInFromRight
          className="px-1 py-1"
          key={n}
          delay={2000}
          duration={(index + 2) * 1000}
        >
          <ContactPageInput
            type={n === "email" ? "email" : "text"}
            name={n}
            placeholder={capitalize(n)}
          />
        </SlideInFromRight>
      ))}
      <SlideInFromRight
        delay={2000}
        duration={4000}
        className="flex justify-end w-full px-1 py-1"
      >
        <ContactPageTextArea />
      </SlideInFromRight>
      <SlideInFromRight
        delay={2000}
        duration={5000}
        className="w-full px-1 py-1"
      >
        <button className="w-full px-4 py-2 border md:text-3xl hover:ring-2 hover:ring-white border-white/20 rounded-3xl bg-black/80 active:scale-105 hover:bg-black transition-all duration-500">
          Send
        </button>
      </SlideInFromRight>
      {error && (
        <div className="text-red-300 shake text-center text-2xl">
          {error}, please try again!
        </div>
      )}
    </form>
  );
};
