import { NextRequest, NextResponse } from "next/server";

// ─── Rate limiter (in-memory, per IP) ────────────────────────────────────────
const RATE_LIMIT = 3;          // max submissions
const WINDOW_MS = 10 * 60 * 1000; // per 10 minutes

const ipMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipMap.get(ip);
  if (!entry || now > entry.resetAt) {
    ipMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

// ─── Handler ─────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // Rate limiting
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const { name, email, company, message, website } = await req.json();

  // Honeypot: bots fill in the hidden "website" field, humans don't
  if (website) {
    return NextResponse.json({ ok: true }); // silently discard
  }

  // Basic validation
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Email address validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "contact@emxtech.eu",
      to: "info@emxtech.eu",
      subject: `New contact from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Company:</strong> ${company || "—"}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });
  } catch (err) {
    console.error("Email send failed:", err);
  }

  return NextResponse.json({ ok: true });
}
