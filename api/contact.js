export const runtime = "nodejs";

import { Resend } from "resend";
import { sql } from "@vercel/postgres";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // Get form data
    const { name, companyName, email, phone, message } = req.body;

    // Validate fields
    if (!name || !companyName || !email || !phone || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // ============================
    // 1. SAVE TO DATABASE
    // ============================
    await sql`
      INSERT INTO contacts (name, company_name, email, phone, message)
      VALUES (${name}, ${companyName}, ${email}, ${phone}, ${message})
    `;

    // ============================
    // 2. SEND EMAIL USING RESEND
    // ============================

    // ⚠️ IMPORTANT:
    // If your domain is NOT verified in Resend yet,
    // replace "contact@justpackagingsolutions.com"
    // with "onboarding@resend.dev" TEMPORARILY

    const emailResponse = await resend.emails.send({
      from: "onboarding@resend.dev", 
      // change to: "contact@justpackagingsolutions.com" AFTER domain verification

      to: "pranavstoretransform@gmail.com", // your company email
//    to :"process.env.TARGET_EMAIL"
      subject: "New Contact Form Submission",

      reply_to: email,

      text: `
New Contact Form Submission

Name: ${name}
Company: ${companyName}
Email: ${email}
Phone: ${phone}

Message:
${message}
      `,
    });

    // Log response for debugging
    console.log("Resend response:", emailResponse);

    // ============================
    // SUCCESS RESPONSE
    // ============================
    return res.status(200).json({
      message: "Saved & Email sent successfully",
      emailResponse,
    });

  } catch (error) {
    console.error("FULL ERROR:", error);

    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
}