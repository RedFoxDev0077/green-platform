import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const runtime = "nodejs";

const clip = (v: unknown, n = 500) => String(v ?? "").trim().slice(0, n);
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields. Accept silently.
  if (clip(body.website)) return NextResponse.json({ ok: true });

  const lead = {
    name: clip(body.name, 120),
    email: clip(body.email, 200),
    phone: clip(body.phone, 40),
    eventType: clip(body.eventType, 60),
    date: clip(body.date, 20),
    guests: Math.max(1, Math.min(1000, Number(body.guests) || 0)),
    location: clip(body.location, 200),
    prefs: Array.isArray(body.prefs) ? body.prefs.slice(0, 20).map((p) => clip(p, 60)) : [],
    message: clip(body.message, 3000),
  };

  if (lead.name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email) || !lead.eventType || body.consent !== true) {
    return NextResponse.json({ error: "Missing fields" }, { status: 422 });
  }

  const summary = [
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone || "-"}`,
    `Occasion: ${lead.eventType}`,
    `Date: ${lead.date || "-"}`,
    `Guests: ${lead.guests >= 300 ? "300+" : lead.guests}`,
    `Location: ${lead.location || "-"}`,
    `Style: ${lead.prefs.join(", ") || "-"}`,
    `Message: ${lead.message || "-"}`,
  ].join("\n");

  const key = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_EMAIL || site.contact.email;
  const from = process.env.LEAD_FROM_EMAIL || site.contact.email;

  if (key) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: `${site.name} <${from}>`,
          to: [to],
          reply_to: lead.email,
          subject: `New inquiry: ${lead.eventType} · ${lead.name}`,
          html: `<h2>New event inquiry</h2><pre style="font:14px/1.6 system-ui">${esc(summary)}</pre>`,
        }),
      });
      if (!res.ok) console.error("Resend error", await res.text());
    } catch (e) {
      console.error("Notify failed", e);
    }
  } else {
    console.log("[INQUIRY]\n" + summary);
  }

  return NextResponse.json({ ok: true });
}
