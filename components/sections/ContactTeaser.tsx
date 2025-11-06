"use client";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { MotionDiv } from "@/lib/motion";

export function ContactTeaser() {
  return (
    <Section id="contact-teaser">
      <MotionDiv>
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-semibold">Let’s work together</h2>
          <p className="mt-2 text-neutral-600">
            Have a project or role in mind? I’d love to chat.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block rounded-md border px-4 py-2 hover:bg-neutral-100"
          >
            Contact me
          </Link>
        </div>
      </MotionDiv>
    </Section>
  );
}
