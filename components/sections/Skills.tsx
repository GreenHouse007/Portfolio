"use client";
import { Section } from "@/components/layout/Section";
import { MotionDiv } from "@/lib/motion";

export function Skills() {
  return (
    <Section id="skills">
      <MotionDiv>
        <h2 className="text-3xl font-semibold">Skills</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div>
            <h3 className="font-medium">Frontend</h3>
            <p className="text-neutral-600">
              React, Next.js, TypeScript, Tailwind
            </p>
          </div>
          <div>
            <h3 className="font-medium">Backend</h3>
            <p className="text-neutral-600">Node, Express, REST, MongoDB</p>
          </div>
          <div>
            <h3 className="font-medium">Cloud / DevOps</h3>
            <p className="text-neutral-600">
              GitHub Actions, Docker, AWS (learning)
            </p>
          </div>
        </div>
      </MotionDiv>
    </Section>
  );
}
