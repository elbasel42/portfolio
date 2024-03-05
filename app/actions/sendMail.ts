"use server";
import { emailHTML } from "@app/lib/emailHTML";
import { redirect } from "next/navigation";
const nodemailer = require("nodemailer");

const validateFormData = (formData: FormData) => {
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const subject = formData.get("subject")?.toString();
  const body = formData.get("body")?.toString();

  if (!name || name.length < 1) return "Invalid Name";
  if (!email || email.length < 1) return "Invalid Email";
  if (!subject || subject.length < 1) return "Invalid Subject";
  if (!body || body.length < 1) return "Invalid Message";
  return "";
};

// async..await is not allowed in global scope, must use a wrapper
export async function sendMail(formData: FormData) {
  const validationError = validateFormData(formData);
  if (validationError !== "")
    redirect(`/contact/?error=${encodeURIComponent(validationError)}`);

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
    from: '"Abdelrahman Elbasel" <abdelrahman.elbasel42@gmail.com>',
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

  console.log("Previous message successful");
  console.log("==================================");
}
