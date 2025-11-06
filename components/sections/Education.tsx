"use client";

import * as React from "react";
import { Section } from "@/components/layout/Section";

export function Education() {
  return (
    <Section id="education" className="py-12">
      <h2 className="mb-6 text-center text-3xl font-semibold tracking-tight">
        Education
      </h2>

      {/* Tooele Technical College — single line with logo */}
      <div className="mx-auto flex max-w-3xl items-center justify-center gap-3 rounded-2xl border bg-white/60 p-4 shadow-sm backdrop-blur">
        <img
          src="/images/tooele-tech.png"
          alt="Tooele Technical College"
          className="h-10 w-auto shrink-0"
          loading="lazy"
        />
        <div className="text-lg">
          <span className="font-medium">Tooele Technical College</span> —
          Software Development
          <span className="text-neutral-600"> (In Progress)</span>
        </div>
      </div>

      <div className="m-4 mx-auto flex max-w-3xl items-center justify-center gap-3 rounded-2xl border bg-white/60 p-4 shadow-sm backdrop-blur">
        <img
          src="/images/CFS.jpg"
          alt="Colorado Film School"
          className="h-14 w-auto"
          loading="lazy"
        />
        <div className="text-lg">
          <span className="font-medium">Colorado Film School</span> — Creative
          Producing
        </div>
      </div>

      <div className="mx-auto flex max-w-3xl items-center justify-center gap-3 rounded-2xl border bg-white/60 p-4 shadow-sm backdrop-blur">
        <img
          src="/images/regis-logo.png"
          alt="Regis University"
          className="h-20 w-auto"
          loading="lazy"
        />
        <div className="text-lg">
          <span className="font-medium">Regis University</span> — Business
          Management
        </div>
      </div>
    </Section>
  );
}
