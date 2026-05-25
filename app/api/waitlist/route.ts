/**
 * WAITLIST_WEBHOOK_URL (optional): POST JSON { email } when set — fire-and-forget from signup flow.
 */

import { NextResponse } from "next/server";

function isValidEmail(raw: string): boolean {
  const email = raw.trim();
  if (email.length > 254 || email.length < 3) {
    return false;
  }
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  if (
    typeof body !== "object" ||
    body === null ||
    !("email" in body) ||
    typeof (body as { email: unknown }).email !== "string"
  ) {
    return NextResponse.json({ ok: false, error: "Email is required." }, { status: 400 });
  }

  const email = (body as { email: string }).email;

  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Enter a valid email address." }, { status: 400 });
  }

  const normalized = email.trim().toLowerCase();
  console.info("[waitlist]", normalized);

  const webhook = process.env.WAITLIST_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: normalized }),
      });
    } catch {
      /* Non-blocking — signup still succeeds */
    }
  }

  return NextResponse.json({ ok: true });
}
