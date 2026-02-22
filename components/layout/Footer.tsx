import Image from "next/image";
import { site } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-canvas/10 bg-charcoal">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm">
        <div className="flex items-center gap-2">
          <Image
            src="/images/reference/bear_logo.png"
            alt="Green Bear Labs"
            width={24}
            height={24}
          />
          <span className="font-semibold text-canvas/50">Green Bear Labs</span>
        </div>

        <span className="text-canvas/50">
          Alexander Green &bull; {site.location}
        </span>

        <a
          href="#hero"
          className="text-canvas/50 transition hover:text-canvas"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
