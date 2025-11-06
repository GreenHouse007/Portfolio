"use client";

import * as React from "react";
import { Section } from "@/components/layout/Section";

export function ChowPow() {
  // Update these paths/URLs with your actual assets
  const LOGO =
    "https://images.squarespace-cdn.com/content/v1/618c43e0c558af2fbe0a177b/6fcd3d70-2fdd-478a-93cd-07a721ebee9a/ChowPow_WebAssets-08.png?format=750w";

  const IMG_1 =
    "https://images.squarespace-cdn.com/content/v1/618c43e0c558af2fbe0a177b/1637089051149-F70JJQ1ZRCJ1POPHWM0T/Front+and+Back_Angle.png?format=500w";
  const IMG_2 =
    "https://images.squarespace-cdn.com/content/v1/618c43e0c558af2fbe0a177b/e077c8fc-9baa-4577-8232-185f225c5b52/cp+candy+2+jaw+buster.png?format=750w";
  const IMG_3 =
    "https://images.squarespace-cdn.com/content/v1/618c43e0c558af2fbe0a177b/5d4df12a-e437-4ddf-92e2-e2a9c702b151/cp+taco+2+nacho+smash.png?format=2500w";
  const IMG_4 =
    "https://images.squarespace-cdn.com/content/v1/618c43e0c558af2fbe0a177b/08466b5a-a870-45e6-9bb9-ba3f2e9df3da/PXL_20250423_16424862.png?format=500w";

  // YouTube embed: privacy-enhanced, minimal branding
  const YT_SRC =
    "https://www.youtube-nocookie.com/embed/exPlPx_flBM?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1";

  return (
    <>
      <hr className="my-12 border-neutral-200" />
      <Section id="chow-pow" className="py-10">
        <div className="grid items-start gap-8 md:grid-cols-[1fr_1.1fr]">
          {/* LEFT: logo + description + CTA */}
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <img
                src={LOGO}
                alt="Chow Pow The Game logo"
                className="h-16 w-auto"
                loading="lazy"
              />
            </div>

            <h3 className="text-2xl font-semibold">Chow Pow The Game</h3>

            <p className="max-w-prose text-neutral-700">
              I co-created <strong>Chow Pow</strong>, a fast-paced tabletop card
              game inspired by over-the-top kung fu cinema. As co-designer and
              project lead, I guided the team through concept, illustration,
              testing, and a successful Kickstarter campaign that funded our
              first print run. The project combined art direction, production
              management, and marketing into one dynamic creative challenge.
            </p>

            <div>
              <a
                href="https://www.chowpow.co/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-md border px-4 py-2 text-sm hover:bg-neutral-100"
                aria-label="Open Chow Pow website"
              >
                Check it out
              </a>
            </div>
          </div>

          {/* RIGHT: embedded video */}
          <div className="aspect-video w-full overflow-hidden rounded-xl bg-black shadow-sm">
            <iframe
              className="h-full w-full"
              src={YT_SRC}
              title="Chow Pow The Game trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        {/* Four static images */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <img
            src={IMG_1}
            alt="Chow Pow still 1"
            className="h-40 w-full rounded-lg object-cover sm:h-48"
            loading="lazy"
          />
          <img
            src={IMG_2}
            alt="Chow Pow still 2"
            className="h-40 w-full rounded-lg object-cover sm:h-48"
            loading="lazy"
          />
          <img
            src={IMG_3}
            alt="Chow Pow still 3"
            className="h-40 w-full rounded-lg object-cover sm:h-48"
            loading="lazy"
          />
          <img
            src={IMG_4}
            alt="Chow Pow still 4"
            className="h-40 w-full rounded-lg object-cover sm:h-48"
            loading="lazy"
          />
        </div>
      </Section>
      <hr className="my-12 border-neutral-200" />
    </>
  );
}
