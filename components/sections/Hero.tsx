"use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { MotionDiv } from "@/lib/motion";

export function Hero() {
  return (
    <Section id="hero" className="pb-24 pt-32">
      <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        {/* Text / CTAs */}
        <div>
          <MotionDiv delay={0}>
            <h1 className="text-5xl font-bold tracking-tight text-forest md:text-6xl">
              Hi, I&apos;m Alex.
            </h1>
          </MotionDiv>

          <MotionDiv delay={0.08}>
            <p className="mt-4 text-2xl font-semibold text-bear">
              I build software, story worlds, and games — sometimes all at once.
            </p>
          </MotionDiv>

          <MotionDiv delay={0.16}>
            <p className="mt-4 max-w-prose text-lg leading-relaxed text-forest/70">
              Based in Tooele, Utah. Cloud and web development by trade, creative
              worldbuilding and game design by passion. Whether it&apos;s a
              production app or an interactive story — I ship things that work.
            </p>
          </MotionDiv>

          <MotionDiv delay={0.24}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#hub"
                className="rounded-md bg-bear px-6 py-3 font-semibold text-canvas transition hover:bg-crest"
              >
                See My Work
              </Link>
              <Link
                href="/#contact"
                className="rounded-md border border-bear px-6 py-3 font-semibold text-bear transition hover:bg-bear/10"
              >
                Get in Touch
              </Link>
            </div>
          </MotionDiv>
        </div>

        {/* Bear logo with glow */}
        <MotionDiv delay={0.12} className="justify-self-center">
          <div className="relative">
            <div className="absolute inset-0 -m-8 rounded-full bg-bear/10 blur-3xl" />
            <Image
              src="/images/reference/bear_logo.png"
              alt="Green Bear Labs"
              width={300}
              height={300}
              className="relative drop-shadow-xl"
              priority
            />
          </div>
        </MotionDiv>
      </div>
    </Section>
  );
}
