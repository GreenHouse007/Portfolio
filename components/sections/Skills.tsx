"use client";

import { Section } from "@/components/layout/Section";
import { MotionDiv } from "@/lib/motion";

const SKILL_CATEGORIES = [
  {
    label: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML / CSS",
    ],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "MongoDB", "Prisma", "Zod"],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      "AWS (EC2, S3, Lambda)",
      "GitHub Actions",
      "Docker",
      "Vercel",
      "CI/CD Pipelines",
    ],
  },
  {
    label: "Creative Tech",
    skills: [
      "Game Design",
      "Interactive Fiction",
      "Worldbuilding Systems",
      "Narrative Design",
      "Animation Pipeline",
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills">
      <MotionDiv delay={0}>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-bear">
          Skills
        </h2>
        <p className="mt-2 text-3xl font-bold text-forest">
          What I bring to the table.
        </p>
      </MotionDiv>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {SKILL_CATEGORIES.map((cat, i) => (
          <MotionDiv key={cat.label} delay={i * 0.08}>
            <div className="mb-4 flex items-center gap-2">
              <div className="h-4 w-1 rounded-full bg-bear" />
              <h3 className="text-xs font-semibold uppercase tracking-widest text-forest/60">
                {cat.label}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-moss/40 bg-sage/50 px-3 py-1 text-sm text-forest/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </MotionDiv>
        ))}
      </div>
    </Section>
  );
}
