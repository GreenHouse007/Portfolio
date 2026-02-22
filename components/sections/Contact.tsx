"use client";

import * as React from "react";

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
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  return (
    <section id="contact" className="bg-forest py-24 text-canvas">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-canvas">
            Let&apos;s build something together.
          </h2>
          <p className="mt-4 text-canvas/70">
            I love turning ideas into working software — clean, accessible, and
            cloud-ready. If you&apos;re looking for someone who can team up, own
            outcomes, and ship, I&apos;d love to collaborate.
          </p>
        </div>

        {/* Form */}
        <div className="mx-auto mt-10 max-w-2xl">
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-moss/30 bg-canvas p-6 shadow-sm"
          >
            <div className="grid gap-4">
              <div className="text-left">
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-forest"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md border border-moss/50 px-3 py-2 text-forest outline-none ring-0 focus:border-bear focus:ring-1 focus:ring-bear"
                  placeholder="Jane Doe"
                />
              </div>

              <div className="text-left">
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-forest"
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
                  className="w-full rounded-md border border-moss/50 px-3 py-2 text-forest outline-none ring-0 focus:border-bear focus:ring-1 focus:ring-bear"
                  placeholder="you@company.com"
                />
              </div>

              <div className="text-left">
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium text-forest"
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
                  className="w-full resize-y rounded-md border border-moss/50 px-3 py-2 text-forest outline-none ring-0 focus:border-bear focus:ring-1 focus:ring-bear"
                  placeholder="Tell me a bit about your project, goals, and timeline."
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-2 inline-flex w-1/2 items-center justify-center rounded-md bg-bear px-4 py-2 font-medium text-canvas transition hover:bg-crest disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>
              </div>

              {status === "ok" && (
                <p className="text-center text-sm text-crest">
                  Thanks! Your message has been sent.
                </p>
              )}
              {status === "error" && (
                <p className="text-center text-sm text-red-400">
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
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM18 5.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
              </svg>
            </Social>
            <Social href="https://twitter.com/" label="X (Twitter)">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.2 2H21l-6.5 7.4L22 22h-6.9l-4.3-5.7L5.8 22H3l7-7.9L2 2h7l3.9 5.2L18.2 2Zm-1.2 18h1.9L9.1 4H7.2l9.8 16Z" />
              </svg>
            </Social>
          </div>
        </div>
      </div>
    </section>
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
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-canvas/20 bg-canvas/10 text-canvas shadow-sm transition hover:-translate-y-0.5 hover:bg-canvas/20"
      title={label}
    >
      {children}
    </a>
  );
}
