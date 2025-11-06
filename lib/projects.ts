import type { Project } from "@/types/project";

const ALL: Project[] = [
  {
    slug: "shadow-paths",
    title: "Shadow Paths",
    tagline: "Choose-your-path story web app",
    tags: ["React", "Fierbase", "MongoDB"],
    cover: "/images/projects/shadow-Path.png",
    links: {
      demo: "https://adventurestory.onrender.com/",
      code: "https://github.com/GreenHouse007/AdventureStory",
      caseStudy: "/projects/shadow-paths",
    },
  },
  {
    slug: "enfield-world-builder",
    title: "Enfield World Builder",
    tagline: "Living Software Design Document generator",
    tags: ["TypeScript", "React", "Markdown"],
    cover: "/images/coming-soon.jpg",
    links: {
      demo: null,
      code: "https://github.com/GreenHouse007",
      caseStudy: "/projects/sdd-live-forms",
    },
  },
  {
    slug: "enfield-story-forge",
    title: "Enfield Story Forge",
    tagline: "Story Writers Workflow",
    tags: ["React", "Zod", "Markdown"],
    cover: "/images/coming-soon.jpg",
    links: {
      demo: null,
      code: "https://github.com/GreenHouse007",
      caseStudy: "/projects/sdd-live-forms",
    },
  },
  {
    slug: "sdd-live-forms",
    title: "SDD Live Forms",
    tagline: "Living Software Design Document generator",
    tags: ["React", "Zod", "Markdown"],
    cover: "/images/coming-soon.jpg",
    links: {
      demo: null,
      code: "https://github.com/GreenHouse007",
      caseStudy: "/projects/sdd-live-forms",
    },
  },
  {
    slug: "the-angle-edit",
    title: "The Angle Edit",
    tagline: "Influencer Marketing Platform",
    tags: ["React", "Zod", "Markdown"],
    cover: "/images/coming-soon.jpg",
    links: {
      demo: null,
      code: "https://github.com/GreenHouse007",
      caseStudy: "/projects/sdd-live-forms",
    },
  },
  {
    slug: "mad-hatter-hats",
    title: "Mad Hatter Hatshop",
    tagline: "Full e-commerce platform for custom hats",
    tags: ["React", "Zod", "Markdown"],
    cover: "/images/coming-soon.jpg",
    links: {
      demo: null,
      code: "https://github.com/GreenHouse007",
      caseStudy: "/projects/sdd-live-forms",
    },
  },
];

export async function getProjects({ limit }: { limit?: number } = {}) {
  return limit ? ALL.slice(0, limit) : ALL;
}
export async function getProject(slug: string) {
  return ALL.find((p) => p.slug === slug) ?? null;
}
