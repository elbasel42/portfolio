"use server"

import { ContactFormValidationError } from "@app/types";
import { validateEmail } from "@app/utils";

export const validateFormData = async (formData: FormData): Promise<ContactFormValidationError> => {
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const subject = formData.get("subject")?.toString();
    const body = formData.get("body")?.toString();
  
    if (!name || name.length < 1) return "Invalid Name";
    if (!subject || subject.length < 1) return "Invalid Subject";
    if (!body || body.length < 1) return "Invalid Message";
    if (!email || email.length < 1 || !validateEmail(email)) {
      return "Invalid Email";
    }
    return null;
  };