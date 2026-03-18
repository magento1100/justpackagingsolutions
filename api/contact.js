import { Resend } from "resend";
import { sql } from "@vercel/postgres";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, companyName, email, phone, message } = req.body;

    if (!name || !companyName || !email || !phone || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 🔥 INSERT INTO DATABASE
    await sql`
      INSERT INTO contacts (name, company_name, email, phone, message)
      VALUES (${name}, ${companyName}, ${email}, ${phone}, ${message})
    `;

    // ✉️ SEND EMAIL
    await resend.emails.send({
      from: "contact@justpackagingsolutions.com", // change later to domain
      to: process.env.TARGET_EMAIL,
      subject: "New Contact Form Submission",
      reply_to: email,
      text: `
Name: ${name}
Company: ${companyName}
Email: ${email}
Phone: ${phone}

Message:
${message}
      `,
    });

    return res.status(200).json({ message: "Saved & Email sent" });

  } catch (error) {
    console.error("ERROR:", error);
    return res.status(500).json({ message: "Error" });
  }
}