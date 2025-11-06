"use client";

import * as React from "react";
import { Section } from "@/components/layout/Section";

export function SLAExpo() {
  // Replace these paths/URLs with your actual assets
  const OLD_LOGO =
    "https://yt3.googleusercontent.com/wTCYdKvYdZLdxh4MeR0P2daZRzplWbTQQCPlZhvnBJnPwFuxk9hH-UV7UTGm_gbT83PnPZG_vA=s160-c-k-c0x00ffffff-no-rj";
  const NEW_LOGO =
    "https://lirp.cdn-website.com/425a0e86/dms3rep/multi/opt/S2S-Logo-black-1200x750-1920w.png";

  const IMG_1 = "/images/SLAExpo/slax-speaker.png";
  const IMG_2 = "/images/SLAExpo/slax-cosplay.png";
  const IMG_3 = "/images/SLAExpo/slax-stage.png";
  const IMG_4 = "/images/SLAExpo/slax-pannle.png";

  const YT_SRC =
    "https://www.youtube-nocookie.com/embed/Ao7_IhFaLMw?rel=0&modestbranding=1&iv_load_policy=3&playsinline=1";

  return (
    <>
      <Section id="sla-expo" className="py-10">
        <div className="grid items-start gap-8 md:grid-cols-[1.1fr_1fr]">
          {/* LEFT: embedded video */}
          <div className="aspect-video w-full overflow-hidden rounded-xl bg-black shadow-sm">
            <iframe
              className="h-full w-full"
              src={YT_SRC}
              title="Salt Lake Animation Expo / Sketch 2 Screen"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* RIGHT: logos + blurb + CTA (right-aligned) */}
          <div className="space-y-5">
            {/* Two logos above text (old + new) */}
            <div className="flex items-center gap-4">
              <img
                src={OLD_LOGO}
                alt="Salt Lake Animation Expo old logo"
                className="h-14 w-auto"
                loading="lazy"
              />
              <img
                src={NEW_LOGO}
                alt="Sketch 2 Screen (new) logo"
                className="h-14 w-auto"
                loading="lazy"
              />
            </div>

            <h3 className="text-2xl font-semibold">
              Salt Lake Animation Expo (Sketch 2 Screen)
            </h3>

            <p className="max-w-prose text-neutral-700">
              I co-founded and organized the original Salt Lake Animation Expo
              (now Sketch 2 Screen), bringing artists, studios, and students
              together with talks, portfolio reviews, and networking. I planned
              programming, coordinated with speakers and partners, managed
              logistics, and nurtured the community that grew from our regular
              meetups—helping strengthen the local creative ecosystem.
            </p>

            {/* Right-aligned CTA */}
            <div className="flex justify-end">
              <a
                href="https://www.sketch2screen.net/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-md border px-4 py-2 text-sm hover:bg-neutral-100"
                aria-label="Open Sketch 2 Screen website"
              >
                Check it out
              </a>
            </div>
          </div>
        </div>

        {/* Four static images under the section */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <img
            src={IMG_1}
            alt="SLA Expo still 1"
            className="h-40 w-full rounded-lg object-cover sm:h-48"
            loading="lazy"
          />
          <img
            src={IMG_2}
            alt="SLA Expo still 2"
            className="h-40 w-full rounded-lg object-cover sm:h-48"
            loading="lazy"
          />
          <img
            src={IMG_3}
            alt="SLA Expo still 3"
            className="h-40 w-full rounded-lg object-cover sm:h-48"
            loading="lazy"
          />
          <img
            src={IMG_4}
            alt="SLA Expo still 4"
            className="h-40 w-full rounded-lg object-cover sm:h-48"
            loading="lazy"
          />
        </div>
      </Section>
    </>
  );
}
