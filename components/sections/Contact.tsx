"use client";

import * as React from "react";
import { Section } from "@/components/layout/Section";

export function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [status, setStatus] = React.useState<
    "idle" | "sending" | "ok" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const json = await res.json().catch(() => ({}));
      if (!res.ok || json?.ok === false) {
        setStatus("error");
        setErrorMsg(json?.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("ok");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  return (
    <>
      <Section id="contact" className="py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Let’s build something great together
          </h2>
          <p className="mt-4 text-neutral-700">
            I love turning ideas into working software—clean, accessible, and
            cloud-ready. Whether you need a polished frontend, a reliable
            backend, or help shaping an AWS architecture, I bring a builder’s
            mindset, clear communication, and rapid iteration. If you’re looking
            for someone who can team up, own outcomes, and ship, I’d love to
            collaborate.
          </p>
        </div>

        {/* Form */}
        <div className="mx-auto mt-10 max-w-xxl">
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border bg-white/90 p-6 shadow-sm backdrop-blur"
          >
            <div className="grid gap-4">
              <div className="text-left">
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md border px-3 py-2 outline-none ring-0 focus:border-neutral-400"
                  placeholder="Jane Doe"
                />
              </div>

              <div className="text-left">
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border px-3 py-2 outline-none ring-0 focus:border-neutral-400"
                  placeholder="you@company.com"
                />
              </div>

              <div className="text-left">
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={8}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-y rounded-md border px-3 py-2 outline-none ring-0 focus:border-neutral-400"
                  placeholder="Tell me a bit about your project, goals, and timeline."
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-2 inline-flex w-1/2 items-center justify-center rounded-md border px-4 py-2 font-medium hover:bg-neutral-100 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>
              </div>

              {status === "ok" && (
                <p className="text-center text-sm text-emerald-600">
                  Thanks! Your message has been sent.
                </p>
              )}
              {status === "error" && (
                <p className="text-center text-sm text-red-600">
                  {errorMsg || "Something went wrong. Please try again."}
                </p>
              )}
            </div>
          </form>

          {/* Social icons */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <Social
              href="https://www.linkedin.com/in/alexander-green-729b58229"
              label="LinkedIn"
            >
              {/* LinkedIn */}
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5v-6.9c0-1.64-.03-3.74-2.28-3.74-2.28 0-2.63 1.78-2.63 3.62V24h-5V8z" />
              </svg>
            </Social>
            <Social href="https://github.com/GreenHouse007" label="GitHub">
              {/* GitHub */}
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.8-.25.8-.56v-2c-3.26.72-3.95-1.58-3.95-1.58-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.18.08 1.8 1.21 1.8 1.21 1.04 1.78 2.72 1.27 3.39.97.1-.76.41-1.27.75-1.56-2.6-.3-5.34-1.3-5.34-5.8 0-1.28.46-2.33 1.21-3.15-.12-.3-.52-1.52.11-3.17 0 0 .99-.32 3.25 1.2a11.2 11.2 0 0 1 5.92 0c2.26-1.52 3.25-1.2 3.25-1.2.63 1.65.23 2.87.11 3.17.76.82 1.21 1.87 1.21 3.15 0 4.51-2.75 5.49-5.37 5.79.42.36.8 1.07.8 2.16v3.2c0 .31.21.66.81.55A11.5 11.5 0 0 0 12 .5Z"
                />
              </svg>
            </Social>
            <Social href="https://www.instagram.com/" label="Instagram">
              {/* Instagram */}
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM18 5.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
              </svg>
            </Social>
            <Social href="https://www.facebook.com/" label="Facebook">
              {/* Facebook */}
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M13 22v-9h3l.5-4H13V7.5c0-1.1.3-1.8 1.9-1.8H17V2.2C16.6 2.1 15.5 2 14.2 2 11.5 2 9.6 3.6 9.6 6.7V9H7v4h2.6v9h3.4z" />
              </svg>
            </Social>
            <Social href="https://www.tiktok.com/" label="TikTok">
              {/* TikTok */}
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M21 8.5c-2.4 0-4.6-1.3-5.8-3.3V17a5.5 5.5 0 1 1-5.5-5.5c.3 0 .6 0 .9.1V9a8.5 8.5 0 0 0-1-.1A7 7 0 1 0 17.6 16V8.6c1.1 1 2.6 1.6 4.1 1.6h.3V8.5H21z" />
              </svg>
            </Social>
            <Social href="https://twitter.com/" label="X (Twitter)">
              {/* X / Twitter */}
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.2 2H21l-6.5 7.4L22 22h-6.9l-4.3-5.7L5.8 22H3l7-7.9L2 2h7l3.9 5.2L18.2 2Zm-1.2 18h1.9L9.1 4H7.2l9.8 16Z" />
              </svg>
            </Social>
            {/* Add YouTube if you want to showcase reels/demos */}
            <Social href="https://www.youtube.com/" label="YouTube">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .6 5.8 3 3 0 0 0 2.1 2.1C4.4 20.5 12 20.5 12 20.5s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .6-5.8 31 31 0 0 0-.6-5.8zM9.75 8.75l6.5 3.25-6.5 3.25V8.75z" />
              </svg>
            </Social>
          </div>
        </div>
      </Section>
    </>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white/70 text-neutral-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
      title={label}
    >
      {children}
    </a>
  );
}
