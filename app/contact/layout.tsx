import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Rachel Siegel, MSW",
  description:
    "Schedule a free 20-minute consultation with Rachel Siegel, MSW. Therapy and coaching for high achievers in the St. Louis area.",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
