import { NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = sanitize(body.name);
    const email = sanitize(body.email);
    const message = sanitize(body.message);

    // Validate required fields
    if (!name) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }

    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    // Structured log for future email service integration.
    // Replace this block with an email provider (e.g., Resend, SendGrid)
    // when ready to send actual emails.
    const submission: ContactFormData = { name, email, message };
    console.log("--- Contact Form Submission ---");
    console.log(JSON.stringify(submission, null, 2));
    console.log("--- End Submission ---");

    // TODO: Integrate email service here. Example with Resend:
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "website@rachelsiegel.com",
    //   to: "rachel@rachelsiegel.com",
    //   subject: `New contact form submission from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    // });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
