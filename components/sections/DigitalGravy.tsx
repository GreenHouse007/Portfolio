"use client";

import * as React from "react";
import { Section } from "@/components/layout/Section";
import { AnimatePresence, motion } from "framer-motion";

const IMAGES = [
  "https://images.squarespace-cdn.com/content/v1/613a769bca3ee440c1b3f510/6636035b-1c9e-434a-a1b8-28d41a2b13eb/Screen_Shot_2022-10-10_at_3.10.24_PM.png?format=500w",
  "https://images.squarespace-cdn.com/content/v1/613a769bca3ee440c1b3f510/79fa6f78-cc50-475a-be35-8e7dd7981c64/unknown+%281%29.png?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/613a769bca3ee440c1b3f510/6cb03204-9ad7-45ce-9070-7cdb6fdffe78/Screen_Shot_2022-10-06_at_3.19.39_PM.png?format=500w",
  "https://images.squarespace-cdn.com/content/v1/613a769bca3ee440c1b3f510/15cd4b88-9410-4a48-a0be-09fc5085b83d/Web_gif_24hl_fixed.jpeg?format=750w",
  "https://images.squarespace-cdn.com/content/v1/613a769bca3ee440c1b3f510/c98f02db-c2c3-4b24-bfcb-8c9554607dc4/Oakley%26Oregano+-+Pub.png?format=2500w",
  "https://images.squarespace-cdn.com/content/v1/613a769bca3ee440c1b3f510/3e27562b-7a4c-4627-b0a7-9680f0c343c4/Screen_Shot_2022-06-14_at_12.13.31_PM.png?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/613a769bca3ee440c1b3f510/e7965130-5051-49e2-a75c-bfb687ce8a0d/IMG_2665+%281%29.png?format=2500w",
];

const wrap = (n: number, L: number) => ((n % L) + L) % L;

export function DigitalGravy() {
  const [index, setIndex] = React.useState(0);
  const [hover, setHover] = React.useState(false);
  const [lightbox, setLightbox] = React.useState<number | null>(null);
  const L = IMAGES.length;

  // auto-advance
  React.useEffect(() => {
    if (hover || L <= 1) return;
    const id = setInterval(() => setIndex((n) => wrap(n + 1, L)), 4000);
    return () => clearInterval(id);
  }, [hover, L]);

  // keys
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox !== null) {
        if (e.key === "Escape") return setLightbox(null);
        if (e.key === "ArrowLeft") return setLightbox((i) => (i! + L - 1) % L);
        if (e.key === "ArrowRight") return setLightbox((i) => (i! + 1) % L);
        return;
      }
      if (e.key === "ArrowLeft") setIndex((n) => wrap(n - 1, L));
      if (e.key === "ArrowRight") setIndex((n) => wrap(n + 1, L));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, L]);

  const prev = wrap(index - 1, L);
  const next = wrap(index + 1, L);
  const prev2 = wrap(index - 2, L);
  const next2 = wrap(index + 2, L);

  return (
    <>
      <hr className="my-12 border-neutral-200" />
      <Section id="digital-gravy" className="py-10">
        <div className="grid items-start gap-8 md:grid-cols-[1.1fr_1fr]">
          {/* LEFT: logo + blurb + CTA */}
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <img
                src="https://images.squarespace-cdn.com/content/v1/613a769bca3ee440c1b3f510/f6d254f1-ed59-4c54-b1c9-fd1059250c0d/Asset+4.png?format=1500w"
                alt="Digital Gravy Animation logo"
                className="h-16 w-auto"
                loading="lazy"
              />
            </div>

            <h3 className="text-2xl font-semibold">Digital Gravy Animation</h3>

            <p className="max-w-prose text-neutral-700">
              I co-founded Digital Gravy Animation and helped grow it from an
              idea into a full studio. We built a team of 20+ creatives,
              established production pipelines, and delivered character-driven
              work for clients while developing original IP. My role blended
              leadership with hands-on execution: scoping projects, shaping
              processes and quality bars, hiring and mentoring artists, and
              keeping delivery on time and on budget. The studio is known for
              playful storytelling, strong design, and top-notch character
              animation grounded in teamwork.
            </p>

            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href="https://www.smellthegravy.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-md border px-4 py-2 hover:bg-neutral-100"
              >
                Check it out
              </a>
            </div>
          </div>

          {/* RIGHT: embedded video */}
          <div className="aspect-video w-full overflow-hidden rounded-xl bg-black shadow-sm">
            <iframe
              className="h-full w-full"
              src="https://www.youtube-nocookie.com/embed/umA6aA1iY_I?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1"
              title="Digital Gravy Showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        {/* CARD-STACK SLIDER */}
        <div
          className="relative mt-8"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          aria-label="Digital Gravy gallery"
        >
          <div className="relative mx-auto h-56 max-w-5xl md:h-64 lg:h-72">
            {/* Layered cards — neighbors peek; center is big */}
            <div className="absolute inset-0">
              {/* far neighbors (soft, smaller) */}
              <Card
                src={IMAGES[prev2]}
                x="-42%"
                scale={0.78}
                z={5}
                blur
                opacity={0.65}
                onClick={() => setIndex(prev2)}
              />
              <Card
                src={IMAGES[next2]}
                x="42%"
                scale={0.78}
                z={5}
                blur
                opacity={0.65}
                onClick={() => setIndex(next2)}
              />

              {/* near neighbors */}
              <Card
                src={IMAGES[prev]}
                x="-25%"
                scale={0.9}
                z={10}
                opacity={0.85}
                onClick={() => setIndex(prev)}
              />
              <Card
                src={IMAGES[next]}
                x="25%"
                scale={0.9}
                z={10}
                opacity={0.85}
                onClick={() => setIndex(next)}
              />

              {/* center */}
              <Card
                src={IMAGES[index]}
                x="0%"
                scale={1}
                z={20}
                focus
                onClick={() => setLightbox(index)}
                drag
                onDragEnd={(dir) => setIndex((n) => wrap(n + dir, L))}
              />
            </div>

            {/* invisible hit areas for arrow-style nav (keeps UI clean) */}
            <button
              aria-label="Previous"
              className="absolute left-0 top-0 h-full w-1/3"
              onClick={() => setIndex((n) => wrap(n - 1, L))}
            />
            <button
              aria-label="Next"
              className="absolute right-0 top-0 h-full w-1/3"
              onClick={() => setIndex((n) => wrap(n + 1, L))}
            />
          </div>
        </div>
      </Section>
      <hr className="my-12 border-neutral-200" />

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[100] grid place-items-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              key={IMAGES[lightbox]}
              src={IMAGES[lightbox]}
              alt="Digital Gravy artwork"
              className="max-h-[90vh] max-w-[95vw] rounded-lg shadow-2xl"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm shadow hover:bg-white"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(null);
              }}
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/** Single image card with motion + optional drag */
function Card({
  src,
  x,
  scale,
  z,
  opacity = 1,
  blur = false,
  focus = false,
  onClick,
  drag = false,
  onDragEnd,
}: {
  src: string;
  x: string;
  scale: number;
  z: number;
  opacity?: number;
  blur?: boolean;
  focus?: boolean;
  onClick?: () => void;
  drag?: boolean;
  onDragEnd?: (dir: 1 | -1) => void;
}) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{ zIndex: z }}
      initial={false}
      animate={{
        x,
        scale,
        opacity,
        filter: blur ? "blur(1px) saturate(0.92)" : "none",
      }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <motion.img
        src={src}
        alt=""
        className={[
          "h-56 w-[36rem] rounded-xl object-contain md:h-64 lg:h-72",
          focus ? "shadow-xl" : "shadow-md",
          "bg-white", // subtle card surface so light-on-transparent art still reads
        ].join(" ")}
        drag={drag ? "x" : false}
        dragElastic={0.08}
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(_, info) => {
          if (!onDragEnd) return;
          const threshold = 80;
          if (info.offset.x > threshold)
            onDragEnd(-1); // swipe right -> previous
          else if (info.offset.x < -threshold) onDragEnd(1); // swipe left -> next
        }}
        onClick={onClick}
      />
    </motion.div>
  );
}
