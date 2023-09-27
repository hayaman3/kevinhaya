const nodemailer = require("nodemailer");

interface IMailOptions {
  subject: string;
  name: string;
  fromEmail: string;
  message: string;
}

export async function sendMail({
  subject,
  name,
  fromEmail,
  message,
}: IMailOptions) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  const mailOptions = {
    to: process.env.NODEMAILER_EMAIL,
    from: fromEmail,
    subject: subject,
    text: message,
    html: `
      <h3>name: ${name}</h3>
      <h3>from: ${fromEmail}</h3>
      <p>message: ${message}</p>
    `,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (error: any, info: any) {
      if (error) {
        reject(error);
      } else {
        resolve("email sent");
      }
    });
  });
}
