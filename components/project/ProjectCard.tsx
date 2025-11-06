import Image from "next/image";
import type { Project } from "../../types/project";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-xl border bg-white shadow-sm">
      <Image
        src={project.cover}
        alt={project.title}
        width={800}
        height={500}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-1 text-sm text-neutral-600">{project.tagline}</p>
        <div className="mt-3 flex flex-wrap gap-1">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded bg-neutral-100 px-2 py-0.5 text-xs"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-3 text-sm">
          {project.links.demo ? (
            <a className="underline" href={project.links.demo}>
              Demo
            </a>
          ) : (
            <span className="text-neutral-400">Demo (coming soon)</span>
          )}
          {project.links.code && (
            <a className="underline" href={project.links.code}>
              Code
            </a>
          )}
          {project.links.caseStudy && (
            <a className="underline" href={project.links.caseStudy}>
              Case Study
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
