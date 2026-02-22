"use client";

import Link from "next/link";

const SKILL_CATEGORIES = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML / CSS"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "MongoDB", "Prisma", "Zod"],
  },
  {
    label: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, Lambda)", "GitHub Actions", "Docker", "Vercel", "CI/CD Pipelines"],
  },
  {
    label: "Creative Tech",
    skills: ["Game Design", "Interactive Fiction", "Worldbuilding Systems", "Narrative Design", "Animation Pipeline"],
  },
];

const EXPERIENCE = [
  {
    title: "Freelance Project Manager",
    company: "Self-employed",
    range: "Jan 2023 – Present",
    bullets: [
      "Lead cross-functional project delivery for software and creative clients.",
      "Manage timelines, stakeholder communication, and deliverable quality.",
      "Coordinate remote contractors across design, dev, and content disciplines.",
    ],
  },
  {
    title: "Co-Founder / Lead Organizer",
    company: "Salt Lake Animation Expo",
    range: "Nov 2021 – Jan 2023",
    bullets: [
      "Co-founded and ran a regional animation industry event in Salt Lake City.",
      "Secured venue partnerships, organized panels, and managed volunteer teams.",
      "Grew attendance and industry credibility through direct outreach and marketing.",
    ],
  },
  {
    title: "Co-Creator",
    company: "Chow Pow The Game",
    range: "Oct 2021 – Dec 2022",
    bullets: [
      "Designed and co-developed a card/board game from concept through production.",
      "Coordinated playtesting cycles and iterated on game balance and ruleset.",
      "Managed print production logistics and distribution planning.",
    ],
  },
  {
    title: "Co-Founder, Senior Producer",
    company: "Digital Gravy Animation",
    range: "Oct 2017 – Jan 2023",
    bullets: [
      "Co-founded an independent animation studio focused on original IP.",
      "Oversaw production pipelines for animated series and short-form content.",
      "Coordinated writers, animators, and voice talent across multiple projects.",
      "Managed client relationships, budgets, and delivery schedules.",
    ],
  },
  {
    title: "Designer & Technician",
    company: "Peak Audio & Video",
    range: "Feb 2014 – Oct 2017",
    bullets: [
      "Designed and installed custom A/V systems for residential and commercial clients.",
      "Provided on-site technical support and end-user training.",
      "Managed equipment inventory and vendor relationships.",
    ],
  },
  {
    title: "Department Manager",
    company: "Michaels Stores",
    range: "Sep 2010 – Mar 2013",
    bullets: [
      "Managed inventory, merchandising, and daily operations for multiple departments.",
      "Trained and supervised department associates.",
      "Maintained loss prevention standards and departmental KPIs.",
    ],
  },
  {
    title: "Video Production Contractor",
    company: "Full Process Marketing",
    range: "Oct 2009 – Jan 2011",
    bullets: [
      "Produced and edited promotional video content for marketing campaigns.",
      "Handled on-location shooting, lighting, and audio capture.",
      "Delivered final cuts on deadline for client review cycles.",
    ],
  },
  {
    title: "Independent Video Producer",
    company: "Video by Alex",
    range: "Jan 2005 – Jan 2011",
    bullets: [
      "Operated full-service video production for weddings, events, and commercial clients.",
      "Self-managed client acquisition, shooting, editing, and delivery.",
      "Built and maintained client relationships through referral network.",
    ],
  },
  {
    title: "Gymnastics Coach",
    company: "Omega Sports Center",
    range: "Mar 2009 – Feb 2010",
    bullets: [
      "Coached youth gymnastics classes with a focus on technique and safety.",
      "Developed age-appropriate training progressions for beginner and intermediate athletes.",
    ],
  },
  {
    title: "Volunteer Representative",
    company: "The Church of Jesus Christ of Latter-day Saints",
    range: "Jul 2007 – Jul 2009",
    bullets: [
      "Served a full-time two-year volunteer mission.",
      "Developed communication, leadership, and cross-cultural skills.",
      "Managed a team of volunteers and coordinated community service initiatives.",
    ],
  },
];

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-canvas">
      <div className="mx-auto max-w-4xl px-6 py-10">

        {/* Controls — hidden on print */}
        <div className="print:hidden mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-medium text-bear hover:text-crest transition-colors"
          >
            ← Back to site
          </Link>
          <button
            onClick={() => window.print()}
            className="rounded-md bg-bear px-4 py-2 text-sm font-semibold text-canvas hover:bg-crest transition-colors"
          >
            Download Resume ↓
          </button>
        </div>

        {/* Resume header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-forest">Alexander Green</h1>
          <p className="mt-1 text-base text-forest/70">
            Software Developer · Creative Producer · Project Manager
          </p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-moss">
            <span>Tooele, Utah</span>
            <a
              href="https://github.com/GreenHouse007"
              target="_blank"
              rel="noreferrer"
              className="hover:text-forest transition-colors"
            >
              github.com/GreenHouse007
            </a>
            <a
              href="https://www.linkedin.com/in/alexander-green-729b58229"
              target="_blank"
              rel="noreferrer"
              className="hover:text-forest transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://greenbearlabs.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-forest transition-colors"
            >
              Green Bear Labs
            </a>
          </div>
        </div>

        <hr className="border-t border-moss/30 my-6" />

        {/* Summary */}
        <section className="mb-6">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-bear mb-3">
            Summary
          </h2>
          <p className="text-sm leading-relaxed text-forest/80">
            Creative-background developer and project manager with 15+ years spanning animation
            production, event leadership, and software engineering. Comfortable leading technical
            teams and shipping products at the intersection of technology and storytelling. Available
            for freelance and contract engagements in web development, project management, and
            creative production.
          </p>
        </section>

        <hr className="border-t border-moss/30 my-6" />

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-bear mb-4">
            Technical Skills
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.label}>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-forest/60 mb-2">
                  {cat.label}
                </h3>
                <p className="text-sm text-forest/80">{cat.skills.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-t border-moss/30 my-6" />

        {/* Experience */}
        <section>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-bear mb-6">
            Experience
          </h2>
          <div className="space-y-7">
            {EXPERIENCE.map((job) => (
              <div key={job.title + job.company}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 mb-2">
                  <h3 className="font-semibold text-forest text-sm">{job.title}</h3>
                  <span className="text-moss text-sm shrink-0">{job.range}</span>
                </div>
                <p className="text-xs text-moss mb-2">{job.company}</p>
                <ul className="space-y-1">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="text-sm text-forest/80 pl-3 relative before:absolute before:left-0 before:content-['–']">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Print footer note — hidden on screen */}
        <div className="hidden print:block mt-10 text-center text-xs text-forest/40">
          Generated from greenbearlabs.com/resume
        </div>

      </div>
    </div>
  );
}
