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
    cover: "/images/worldBuilder.png",
    links: {
      demo: null,
      code: "https://github.com/GreenHouse007/world-builder",
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

import type { HubItem } from "@/types/project";

const HUB_ITEMS: HubItem[] = [
  {
    id: "worlds",
    title: "Worlds Hub",
    description: "A central hub for all of Alex's worldbuilding projects and lore archives.",
    href: "/worlds",
    icon: "🌍",
  },
  {
    id: "mythica",
    title: "Mythica",
    description: "A fantasy creature world — deep lore, ecology, and interactive species catalog.",
    href: "/mythica",
    icon: "🐉",
  },
  {
    id: "games",
    title: "Game Studio",
    description: "PWA game studio — browser-based games built for desktop and mobile.",
    href: "/games",
    icon: "🎮",
  },
  {
    id: "enfield",
    title: "Enfield Suite",
    description: "An AI-powered story writing suite — world builders, story forges, and SDD generators.",
    href: "/enfield",
    icon: "✍️",
  },
  {
    id: "shadow-realm",
    title: "Shadow Realm",
    description: "Choose your own adventure — branching narrative story app built with React and Firebase.",
    href: "/shadow_realm",
    icon: "🌑",
  },
  {
    id: "angel-in-progress",
    title: "Angel In Progress",
    description: "My wife's creative site — her own corner of the internet.",
    href: "https://angelinprogress.com",
    external: true,
    icon: "💛",
  },
  {
    id: "chow-pow",
    title: "Chow Pow",
    description: "A browser-based game — quick, fun, and fully playable on desktop and mobile.",
    href: "/games",
    icon: "🍜",
  },
];

export function getHubItems(): HubItem[] {
  return HUB_ITEMS;
}

export async function getProjects({ limit }: { limit?: number } = {}) {
  return limit ? ALL.slice(0, limit) : ALL;
}
export async function getProject(slug: string) {
  return ALL.find((p) => p.slug === slug) ?? null;
}
