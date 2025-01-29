import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, phone, token } = await req.json();
  console.log(name, email, phone, token);
  if (!name || !email || !phone || !token) {
    return NextResponse.json(
      { message: "Please fill all fields" },
      { status: 400 }
    );
  }
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender address
    to: process.env.ADMIN_EMAIL, // Admin email address
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${phone}`,
  };
}

try {
  await transporter.sendMail(mailOptions);
} catch (error) {
  console.error(error);
  return NextResponse.json({ message: "Error sending email" }, { status: 500 });
}

//   return NextResponse.json({ message: "Token received" }, { status: 201 });
// }

export async function GET() {
  return NextResponse.json(
    { message: "GET request not allowed" },
    { status: 405 }
  );
}
