import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FreelanceFlow — Freelancing marketplace for modern teams",
  description:
    "FreelanceFlow connects high-growth companies with vetted freelancers across product, engineering, marketing, and operations.",
  metadataBase: new URL("https://agentic-5d2e6a42.vercel.app"),
  openGraph: {
    title: "FreelanceFlow — Freelancing marketplace for modern teams",
    description:
      "Launch products faster with curated freelance talent, transparent pricing, and operator-grade compliance.",
    url: "https://agentic-5d2e6a42.vercel.app",
    siteName: "FreelanceFlow",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FreelanceFlow — Freelancing marketplace for modern teams",
    description:
      "Spin up product-ready freelance teams in under 48 hours. Product, design, engineering, and growth specialists on demand.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-white`}>
        {children}
      </body>
    </html>
  );
}
