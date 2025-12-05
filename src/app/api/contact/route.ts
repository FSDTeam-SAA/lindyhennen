import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;

    // Create a transporter using Outlook SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com", // Outlook SMTP server
      port: 587,                  // TLS port
      secure: false,              // Use TLS
      auth: {
        user: process.env.SMTP_USER,     // Your Outlook email
        pass: process.env.SMTP_PASSWORD, // Your Outlook password or app password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER, // You can change this to any recipient
      subject: `New Contact Form Submission`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
