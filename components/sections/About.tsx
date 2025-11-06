"use client";
import { Section } from "@/components/layout/Section";
import { MotionDiv } from "@/lib/motion";

export function About() {
  return (
    <Section id="about">
      <MotionDiv>
        <h2 className="text-3xl font-semibold">About</h2>
        <p className="mt-3 max-w-prose text-neutral-600">
          I’m Alexander Green, a web developer on a focused path toward AWS
          cloud. I like turning fuzzy ideas into reliable, human-centered apps.
        </p>
      </MotionDiv>
    </Section>
  );
}
