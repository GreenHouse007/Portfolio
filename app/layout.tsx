import "./globals.css";
import type { Metadata } from "next";
import { site } from "@/config/site";
//import { Navbar } from "@/components/layout/Navbar";
//import { Footer } from "@/components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  metadataBase: new URL(site.baseUrl),
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.baseUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-neutral-50 text-neutral-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
