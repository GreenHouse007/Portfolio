"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/config/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-moss/30 bg-canvas/90 backdrop-blur-sm print:hidden">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 font-bold text-forest">
          <Image
            src="/images/reference/bear_logo.png"
            alt="Green Bear Labs"
            width={36}
            height={36}
          />
          <span>Green Bear Labs</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 text-sm md:flex">
          {site.nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-forest/70 transition-colors hover:text-forest"
            >
              {n.label}
            </a>
          ))}
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="text-forest/70 transition-colors hover:text-forest"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-forest/70 transition-colors hover:text-forest"
          >
            LinkedIn
          </a>
          <Link
            href="/resume"
            className="rounded-md border border-bear px-3 py-1.5 text-xs font-semibold text-bear transition hover:bg-bear/10"
          >
            Resume
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-forest transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-forest transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-forest transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-moss/30 bg-canvas md:hidden"
          >
            <div className="flex flex-col gap-4 px-4 py-5">
              {site.nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="text-forest/70 hover:text-forest"
                >
                  {n.label}
                </a>
              ))}
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="text-forest/70 hover:text-forest"
              >
                GitHub
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-forest/70 hover:text-forest"
              >
                LinkedIn
              </a>
              <Link href="/resume" onClick={() => setOpen(false)} className="text-forest/70 hover:text-forest">
                Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
