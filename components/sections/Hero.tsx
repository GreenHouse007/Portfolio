"use client";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { MotionDiv } from "@/lib/motion";
import { site } from "@/config/site";

export function Hero() {
  return (
    <Section id="hero" className="pt-24">
      <MotionDiv>
        <div className="grid items-center gap-8 md:grid-cols-[1.2fr_1fr]">
          <div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Cloud-minded web developer building reliable, human-centered apps.
            </h1>
            <p className="mt-4 max-w-prose text-lg text-neutral-600">
              I’m {site.ownerName}, focused on AWS and modern web. I connect
              people, reduce complexity, and ship. I like turning fuzzy ideas
              into reliable, human-centered apps.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                className="rounded-md border px-4 py-2 hover:bg-neutral-100"
                href="/contact"
              >
                Let’s work together
              </a>
              <a
                className="rounded-md border px-4 py-2 hover:bg-neutral-100"
                href={site.github}
              >
                View my GitHub
              </a>
            </div>
          </div>
          <div className="justify-self-center">
            <Image
              src="/images/headshot.png"
              alt="Alexander Green"
              width={360}
              height={360}
              className="rounded-xl shadow-md"
              priority
            />
          </div>
        </div>
      </MotionDiv>
    </Section>
  );
}
