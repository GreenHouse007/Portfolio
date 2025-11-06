import { NextResponse } from "next/server";
import { Resend } from "resend";
import React from "react";
import { render } from "@react-email/render";
import ContactEmail from "@/components/email/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as {
    name?: string;
    email?: string;
    message?: string;
  } | null;

  const name = body?.name?.toString().slice(0, 200) || "";
  const fromEmail = body?.email?.toString().slice(0, 320) || "";
  const message = body?.message?.toString().slice(0, 5000) || "";

  if (!fromEmail || !message) {
    return NextResponse.json(
      { ok: false, error: "Missing email or message" },
      { status: 400 }
    );
  }

  // Build React node then render to HTML
  const emailNode = React.createElement(ContactEmail, {
    name,
    email: fromEmail,
    message,
  });
  const html = await render(emailNode);

  const { data, error } = await resend.emails.send({
    from: process.env.RESEND_FROM!, // e.g. "Alexander Green <onboarding@resend.dev>"
    to: [process.env.CONTACT_TO!],
    replyTo: fromEmail,
    subject: `New portfolio contact from ${name || fromEmail}`,
    html, // use the rendered HTML
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { ok: false, error: "Email send failed" },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, id: data?.id ?? null });
}
