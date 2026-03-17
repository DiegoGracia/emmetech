import { NextRequest, NextResponse } from "next/server";

function sanitize(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

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

  const body = await req.json();
  const name     = String(body.name     ?? "").trim();
  const email    = String(body.email    ?? "").trim();
  const company  = String(body.company  ?? "").trim();
  const message  = String(body.message  ?? "").trim();
  // Multi-step form fields
  const city     = String(body.city     ?? "").trim();
  const size     = String(body.size     ?? "").trim();
  const revenue  = String(body.revenue  ?? "").trim();
  const service  = String(body.service  ?? "").trim();
  const problem  = String(body.problem  ?? "").trim();
  const budget   = String(body.budget   ?? "").trim();
  const start    = String(body.start    ?? "").trim();
  const contPref = String(body.contPref ?? "").trim();
  const phone    = String(body.phone    ?? "").trim();

  // Honeypot
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  // Only name and email are required
  if (!name || !email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  // Build email body — simple form uses message, multi-step form uses rich fields
  const s = (v: string) => sanitize(v);
  const isMultiStep = !message && (problem || service || budget);
  const html = isMultiStep
    ? `<h2>New diagnostic request from ${s(name)}</h2>
       <p><strong>Email:</strong> ${s(email)}</p>
       ${phone    ? `<p><strong>Phone:</strong> ${s(phone)}</p>` : ""}
       ${company  ? `<p><strong>Company:</strong> ${s(company)}</p>` : ""}
       ${city     ? `<p><strong>City:</strong> ${s(city)}</p>` : ""}
       ${size     ? `<p><strong>Company size:</strong> ${s(size)}</p>` : ""}
       ${revenue  ? `<p><strong>Annual revenue:</strong> ${s(revenue)}</p>` : ""}
       ${service  ? `<p><strong>Service interest:</strong> ${s(service)}</p>` : ""}
       ${problem  ? `<p><strong>Main challenge:</strong> ${s(problem)}</p>` : ""}
       ${budget   ? `<p><strong>Budget:</strong> ${s(budget)}</p>` : ""}
       ${start    ? `<p><strong>Start timeline:</strong> ${s(start)}</p>` : ""}
       ${contPref ? `<p><strong>Preferred contact:</strong> ${s(contPref)}</p>` : ""}`
    : `<p><strong>Name:</strong> ${s(name)}</p>
       <p><strong>Email:</strong> ${s(email)}</p>
       <p><strong>Company:</strong> ${s(company) || "—"}</p>
       <p><strong>Message:</strong> ${s(message) || "—"}</p>`;

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "noreply@emxtech.eu",
      to: "info@emxtech.eu",
      replyTo: email,
      subject: `New contact from ${name}`,
      html,
    });

    if (error) {
      console.error("Resend error:", JSON.stringify(error));
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
  } catch (err) {
    console.error("Resend exception:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
