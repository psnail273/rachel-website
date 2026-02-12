import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Lora } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rachelsiegel.com"),
  title: "Rachel Siegel, MSW | Therapist & Coach",
  description:
    "Rachel Siegel, MSW provides therapy and coaching for high achievers, performing artists, and individuals navigating perfectionism, anxiety, depression, and burnout.",
  authors: [{ name: "Rachel Siegel, MSW" }],
  keywords: [
    "therapist",
    "therapy",
    "coaching",
    "high achievers",
    "performing artists",
    "perfectionism",
    "anxiety",
    "depression",
    "burnout",
    "St. Louis",
    "MSW",
    "Rachel Siegel",
    "imposter syndrome",
    "body image",
    "ACT",
    "DBT",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Rachel Siegel, MSW | Therapist & Coach",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${lora.variable} flex min-h-screen flex-col antialiased`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
