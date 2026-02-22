"use client";

import { Section } from "@/components/layout/Section";
import { MotionDiv } from "@/lib/motion";

export function DigitalGravy() {
  return (
    <div className="bg-sage/20 w-full">
      <Section id="digital-gravy">
        <MotionDiv delay={0}>
          <span className="inline-block rounded-full border border-bear/20 bg-bear/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-bear">
            Co-Founded
          </span>
          <h2 className="mt-3 text-3xl font-bold text-forest">Digital Gravy</h2>
          <p className="mt-1 text-sm uppercase tracking-wide text-moss">
            Animation &amp; Film Production Studio
          </p>
        </MotionDiv>

        <div className="mt-8 grid items-center gap-10 md:grid-cols-2">
          <MotionDiv delay={0.1} className="space-y-4">
            <p className="text-lg leading-relaxed text-forest/80">
              Co-founded a production studio creating content and telling stories
              for real audiences. We handled everything — production, creative
              direction, client work, and business operations — with a small team
              and zero shortcuts.
            </p>
            <p className="text-lg leading-relaxed text-forest/80">
              Wearing every hat taught me to think in systems, work under real
              deadlines, and care deeply about the end experience. It&apos;s where I
              first learned that the craft and the business are the same problem.
            </p>
            <p className="mt-4 text-xs font-medium text-moss">2018 – 2023</p>
          </MotionDiv>

          <MotionDiv delay={0.2}>
            <div className="flex h-48 items-center justify-center rounded-xl border border-moss/30 bg-sage text-6xl shadow-sm">
              🎬
            </div>
          </MotionDiv>
        </div>
      </Section>
    </div>
  );
}
