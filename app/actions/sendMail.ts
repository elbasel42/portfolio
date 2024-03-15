"use server";

import { redirect } from "next/navigation";
import nodemailer from "nodemailer";
import { emailHTML } from "@app/lib/emailHTML";
import { validateEmail } from "@app/utils";
import { validateFormData } from "./validateFormData";

// async..await is not allowed in global scope, must use a wrapper
export async function sendMail(formData: FormData) {
  const validationError = await validateFormData(formData);

  if (validationError !== null) {
    console.log("Failed to send message with error", validateEmail);
    redirect(`/contact/?error=${encodeURIComponent(validationError)}`);
  }

  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const subject = formData.get("subject")?.toString();
  const body = formData.get("body")?.toString();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  console.log("==================================");
  console.log({
    name,
    email,
    subject,
    body,
  });
  const senderInfo = await transporter.sendMail({
    from: `"Abdelrahman Elbasel" <${process.env.NODEMAILER_USER}>`,
    to: email,
    subject: "Thanks for reaching out!",
    html: emailHTML,
  });

  const receiverInfo = await transporter.sendMail({
    from: `"${name}" <${email}>`,
    to: "abdelrahman.elbasel42@gmail.com",
    subject: subject,
    html: `
    <div>name: ${name}</div>
    <div>subject: ${subject}</div>
    <div>body: ${body}</div>
    `,
  });

  console.log("Message sent successfully");
  console.log("==================================");
}
