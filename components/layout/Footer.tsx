import { site } from "@/config/site";
export function Footer() {
  return (
    <footer className="mt-24 border-t">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-600">
        <div>
          Alexander Green • {site.location} • Updated: {site.updated}
        </div>
        <a href="#hero" className="mt-2 inline-block underline">
          Back to top
        </a>
      </div>
    </footer>
  );
}
