import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/project/ProjectCard";
import { getProjects } from "@/lib/projects";

export async function Portfolio() {
  const projects = await getProjects(); // ← no limit
  return (
    <Section id="portfolio">
      <h2 className="mb-8 text-3xl font-semibold">Portfolio</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </Section>
  );
}
