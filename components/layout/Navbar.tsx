import Link from "next/link";
import { site } from "@/config/site";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold">
          🐝 {site.ownerName}
        </Link>
        <div className="flex gap-6 text-sm">
          {site.nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:underline">
              {n.label}
            </a>
          ))}
          <a href={site.github} className="hover:underline">
            GitHub
          </a>
          <a href={site.linkedin} className="hover:underline">
            LinkedIn
          </a>
        </div>
      </nav>
    </header>
  );
}
