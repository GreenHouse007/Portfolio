"use client";

import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { MotionDiv } from "@/lib/motion";

const passionTags = [
  "Cloud Development",
  "Worldbuilding",
  "Game Design",
  "Creative Writing",
  "Film & Animation",
];

export function About() {
  return (
    <Section id="about">
      <MotionDiv delay={0}>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-bear">
          About
        </h2>
        <p className="mt-2 text-3xl font-bold text-forest">
          The person behind the code.
        </p>
      </MotionDiv>

      <div className="mt-10 grid items-start gap-12 md:grid-cols-[1.2fr_1fr]">
        {/* Bio */}
        <div className="space-y-5">
          <MotionDiv delay={0.08}>
            <p className="text-lg leading-relaxed text-forest/80">
              I started out in animation and film production — co-founded a
              studio called Digital Gravy, where we created content and told
              stories for real audiences. That world taught me to think
              visually, work under production pressure, and care deeply about
              the end experience.
            </p>
          </MotionDiv>

          <MotionDiv delay={0.16}>
            <p className="text-lg leading-relaxed text-forest/80">
              Eventually, software development clicked. Now I build at the
              intersection of technology and creative worlds — production-ready
              web apps during the day, and game systems, story engines, and
              interactive fiction at night.
            </p>
          </MotionDiv>

          <MotionDiv delay={0.24}>
            <p className="text-lg leading-relaxed text-forest/80">
              Based in Tooele, Utah. Family man first. My wife has her own
              creative work too — you&apos;ll spot her site in the project hub.
              This is a labor of love and a professional home all at once.
            </p>
          </MotionDiv>

          <MotionDiv delay={0.32}>
            <div className="flex flex-wrap gap-2 pt-2">
              {passionTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-moss/50 bg-sage px-4 py-1.5 text-sm font-medium text-forest"
                >
                  {tag}
                </span>
              ))}
            </div>
          </MotionDiv>
        </div>

        {/* Headshot */}
        <MotionDiv delay={0.12} className="justify-self-center md:justify-self-end">
          <div className="relative">
            <div className="absolute -bottom-3 -right-3 h-full w-full rounded-xl border border-bear/30 bg-sage" />
            <Image
              src="/images/headshot.png"
              alt="Alexander Green"
              width={320}
              height={380}
              className="relative rounded-xl shadow-md"
            />
          </div>
        </MotionDiv>
      </div>
    </Section>
  );
}
