"use server";

const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
export async function sendMail(formData: FormData) {
  console.log(formData);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Mr.Jack" <jack@mail.com>',
    to: "dandelionhonorable@gmail.com",
    subject: "Hello ✔",
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}
// sendMail().catch(console.error);
