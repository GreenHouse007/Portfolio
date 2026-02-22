"use client";

import { Section } from "@/components/layout/Section";
import { MotionDiv } from "@/lib/motion";

export function SLAExpo() {
  return (
    <div className="bg-sage/20 w-full">
      <Section id="sla-expo">
        <MotionDiv delay={0}>
          <span className="inline-block rounded-full border border-bear/20 bg-bear/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-bear">
            Organized &amp; Ran
          </span>
          <h2 className="mt-3 text-3xl font-bold text-forest">
            Salt Lake Animation Expo
          </h2>
          <p className="mt-1 text-sm uppercase tracking-wide text-moss">
            Annual Animation &amp; Film Event, Salt Lake City
          </p>
        </MotionDiv>

        <div className="mt-8 grid items-center gap-10 md:grid-cols-2">
          <MotionDiv delay={0.1}>
            <div className="flex h-48 items-center justify-center rounded-xl border border-moss/30 bg-sage text-6xl shadow-sm">
              🎞️
            </div>
          </MotionDiv>

          <MotionDiv delay={0.2} className="space-y-4">
            <p className="text-lg leading-relaxed text-forest/80">
              Planned and executed a public-facing animation and film expo in Salt
              Lake City — managed venue, scheduling, speakers, and promotion from
              the ground up.
            </p>
            <p className="text-lg leading-relaxed text-forest/80">
              Proved that technical execution and people skills live in the same
              toolkit. Getting 200+ attendees through a door you built yourself
              changes how you think about shipping anything.
            </p>
            <p className="mt-4 text-xs font-medium text-moss">Event Organizer</p>
          </MotionDiv>
        </div>
      </Section>
    </div>
  );
}
