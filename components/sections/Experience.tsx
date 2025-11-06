"use client";
import { Section } from "@/components/layout/Section";
import { MotionDiv } from "@/lib/motion";

export function Showcase() {
  return (
    <Section id="showcase">
      <h2 className="text-3xl font-semibold">Showcase</h2>

      {/* Smart Home Designer / Installer */}
      <MotionDiv className="mt-12 grid items-start gap-6 md:grid-cols-[1.2fr_1fr]">
        <div>
          <h3 className="text-2xl font-semibold">
            Smart Home Designer / Installer
          </h3>
          <p className="mt-2 text-neutral-600">
            Designed & installed Control4 and Crestron systems (Peak Audio Video
            / Integration Inc.).
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
            <a
              className="underline"
              href="https://peakalarm.com/"
              target="_blank"
            >
              Peak Alarm
            </a>
            <a
              className="underline"
              href="https://www.control4.com/"
              target="_blank"
            >
              Control4
            </a>
            <a
              className="underline"
              href="https://www.crestron.com/Products/Market-Solutions/Crestron-Home"
              target="_blank"
            >
              Crestron
            </a>
          </div>
          <div className="mt-4 flex gap-4">
            <img
              src="/images/logos/control4.png"
              alt="Control4 logo"
              className="h-10 w-auto"
            />
            <img
              src="/images/logos/crestron.png"
              alt="Crestron logo"
              className="h-10 w-auto"
            />
          </div>
        </div>
        <div className="grid gap-3">
          <img
            src="/images/showcase/smarthome-1.jpg"
            alt="Rack install"
            className="rounded-lg border"
          />
          <img
            src="/images/showcase/smarthome-2.jpg"
            alt="Touch panel"
            className="rounded-lg border"
          />
        </div>
      </MotionDiv>
    </Section>
  );
}
