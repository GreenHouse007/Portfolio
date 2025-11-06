"use client";

import * as React from "react";
import { Section } from "@/components/layout/Section";

// ----------- FEATURED TOOLS (cards) -----------
const featured = [
  {
    name: "Redux Toolkit",
    tagline: "Predictable state with less boilerplate.",
    href: "https://redux-toolkit.js.org/",
    color: "#764ABC",
  },
  {
    name: "OpenAI Codex",
    tagline: "AI-assisted coding and idea exploration.",
    href: "https://openai.com/research/codex",
    color: "#10A37F",
  },
  {
    name: "Claude Code",
    tagline: "Anthropic’s helpful AI for code & reviews.",
    href: "https://www.anthropic.com/claude",
    color: "#5A3FFF",
  },
  {
    name: "Firebase",
    tagline: "Auth, Firestore, hosting & realtime DB.",
    href: "https://firebase.google.com/",
    color: "#FFCA28",
  },
  {
    name: "OpenAI API",
    tagline: "Chat, embeddings, and intelligent assistants.",
    href: "https://platform.openai.com/",
    color: "#000000",
  },
  {
    name: "AWS",
    tagline: "Foundations for scalable cloud architectures.",
    href: "https://aws.amazon.com/",
    color: "#FF9900",
  },
];

// ----------- STACK SKILLS (chips) -----------
const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "REST",
  "MongoDB",
  "Docker",
  "Raspberry Pi",
];

export function FavoriteTools() {
  return (
    <Section id="tools" className="py-16">
      <h2 className="mb-2 text-center text-3xl font-semibold tracking-tight">
        Some of My Favorite Tools
      </h2>
      <p className="mx-auto mb-10 max-w-2xl text-center text-neutral-700">
        From clean front-end design to powerful cloud automation, these are the
        frameworks, libraries, and platforms I reach for most often.
      </p>

      {/* Featured tools */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((tool) => (
          <a
            key={tool.name}
            href={tool.href}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border bg-white/60 p-5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div
                className="grid h-10 w-10 place-items-center rounded-full text-white shadow-sm"
                style={{ backgroundColor: tool.color }}
              >
                <span className="text-sm font-semibold">{tool.name[0]}</span>
              </div>
              <div className="text-base font-medium">{tool.name}</div>
            </div>
            <p className="mt-3 text-sm text-neutral-700">{tool.tagline}</p>
          </a>
        ))}
      </div>

      {/* Divider */}
      <div className="mx-auto my-10 h-px w-32 bg-neutral-300"></div>

      {/* Skill chips */}
      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-neutral-300 bg-white/60 px-4 py-1.5 text-sm text-neutral-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-neutral-400"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Footer line */}
      <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-neutral-500">
        Constantly experimenting with new stacks and workflows — from{" "}
        <span className="font-medium">Raspberry Pi</span> automation to{" "}
        <span className="font-medium">AI-powered</span> developer tools.
      </p>
    </Section>
  );
}
