import { createTransport } from "nodemailer";

export const sendMail = async function (
  name: string,
  email: string | "SELF",
  subject: string,
  message: string,
): Promise<{ status: number; message: string }> {
  const user = process.env.NODEMAILER_USER;
  const pass = process.env.NODEMAILER_PASS;

  if (!user || !pass) {
    const isDev = process.env.NODE_ENV !== "production";
    return new Promise((resolve) =>
      resolve({
        status: isDev ? 200 : 500,
        message: isDev
          ? "Mail skipped in development"
          : "Email service is not configured",
      }),
    );
  }

  const transporter = createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });

  const mailOptions = {
    from: process.env.NODEMAILER_USER,
    to: process.env.NODEMAILER_USER,
    subject: "Portfolio: [" + subject + " ]",
    text: `${name}: <${email}>\n${message}`,
  };

  return new Promise((resolve) => {
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        resolve({ status: 500, message: "Failed to send mail" });
      } else {
        resolve({ status: 200, message: "Mail send successfully" });
      }
    });
  });
};
