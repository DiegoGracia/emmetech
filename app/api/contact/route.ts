import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, company, message } = await req.json();

  // Basic validation
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Email address validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  // TODO: Wire up Resend once RESEND_API_KEY and destination email are configured
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "contact@emmetechnologies.com",
  //   to: "hello@emmetechnologies.com",
  //   subject: `New contact from ${name}`,
  //   html: `<p><strong>Name:</strong> ${name}</p>
  //          <p><strong>Email:</strong> ${email}</p>
  //          <p><strong>Company:</strong> ${company || "—"}</p>
  //          <p><strong>Message:</strong> ${message}</p>`,
  // });

  console.log("Contact form submission:", { name, email, company, message });

  return NextResponse.json({ ok: true });
}
