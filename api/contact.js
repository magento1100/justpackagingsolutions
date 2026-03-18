import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, companyName, email, phone, message } = req.body;

    // Basic validation (don’t trust frontend like an innocent child)
    if (!name || !companyName || !email || !phone || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    await resend.emails.send({
      from: "onboarding@resend.dev", // change after domain verification
      to: process.env.TARGET_EMAIL,
      subject: "New Contact Form Submission",
      reply_to: email, // THIS is important
      text: `
Name: ${name}
Company: ${companyName}
Email: ${email}
Phone: ${phone}

Message:
${message}
      `,
    });

    return res.status(200).json({ message: "Email sent successfully" });

  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
}