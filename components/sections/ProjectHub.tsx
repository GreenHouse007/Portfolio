"use client";

import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { MotionDiv } from "@/lib/motion";
import { getHubItems } from "@/lib/projects";
import type { HubItem } from "@/types/project";

function getHubEmoji(id: string): string {
  const map: Record<string, string> = {
    worlds: "🌍",
    mythica: "🐉",
    games: "🎮",
    enfield: "✍️",
    "shadow-realm": "🌑",
    "angel-in-progress": "💛",
  };
  return map[id] ?? "📁";
}

function HubCard({ item, index }: { item: HubItem; index: number }) {
  const emoji = item.icon || getHubEmoji(item.id);

  const inner = (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-moss/30 bg-canvas transition-all duration-200 hover:-translate-y-1 hover:border-bear hover:shadow-xl">
      {/* Left accent on hover */}
      <div className="absolute left-0 top-0 h-full w-1 bg-bear opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

      {/* Icon area */}
      <div className="flex items-center justify-center bg-sage/60 py-8 text-4xl">
        {emoji}
        {item.external && (
          <span className="ml-2 rounded-full bg-bear/10 px-2 py-0.5 text-xs font-semibold text-bear">
            ↗
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-semibold text-forest">{item.title}</h3>
        <p className="mt-1 flex-1 text-sm text-forest/60">{item.description}</p>
        <p className="mt-4 text-sm font-medium text-bear group-hover:underline">
          Explore →
        </p>
      </div>
    </div>
  );

  if (item.external) {
    return (
      <MotionDiv delay={index * 0.07} className="h-full">
        <a href={item.href} target="_blank" rel="noreferrer" className="block h-full">
          {inner}
        </a>
      </MotionDiv>
    );
  }

  return (
    <MotionDiv delay={index * 0.07} className="h-full">
      <Link href={item.href} className="block h-full">
        {inner}
      </Link>
    </MotionDiv>
  );
}

export function ProjectHub() {
  const items = getHubItems();

  return (
    <Section id="hub">
      <MotionDiv delay={0}>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-bear">
          Project Hub
        </h2>
        <p className="mt-2 text-3xl font-bold text-forest">
          Everything I&apos;m building lives here.
        </p>
        <p className="mt-1 text-forest/60">Click in.</p>
      </MotionDiv>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <HubCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </Section>
  );
}
