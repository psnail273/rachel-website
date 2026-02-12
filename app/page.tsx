import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LeafMotif } from "@/components/decorative/leaf-motif";

export const metadata: Metadata = {
  title: "Rachel Siegel, MSW | Therapist & Coach for High Achievers",
  description:
    "Rachel Siegel, MSW offers therapy and coaching for performing artists and high achievers in the St. Louis area. Specializing in perfectionism, anxiety, and burnout.",
  openGraph: {
    title: "Rachel Siegel, MSW | Therapist & Coach for High Achievers",
    description:
      "Rachel Siegel, MSW offers therapy and coaching for performing artists and high achievers in the St. Louis area. Specializing in perfectionism, anxiety, and burnout.",
    type: "website",
    locale: "en_US",
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Nature-inspired gradient background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-brand-purple/5 to-brand-teal/10"
        />

        {/* Subtle decorative botanical SVG element */}
        <LeafMotif
          variant="leaf"
          className="absolute -right-16 -top-16 sm:-right-8 sm:-top-8"
          size={480}
          opacity={0.04}
        />

        {/* Bottom decorative wave */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-1 left-0 w-full"
        >
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="block h-10 w-full sm:h-14 md:h-20"
          >
            <path
              d="M0 40 C360 80, 720 0, 1080 40 C1260 60, 1380 50, 1440 40 L1440 80 L0 80Z"
              fill="var(--neutral-50)"
            />
          </svg>
        </div>

        {/* Hero content */}
        <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-16 sm:px-6 sm:pb-28 sm:pt-20 md:pb-32 md:pt-24 lg:px-8 lg:pb-36 lg:pt-28">
          <div className="max-w-2xl">
            {/* Credentials */}
            <p className="text-sm font-medium uppercase tracking-widest text-brand-teal sm:text-base">
              Licensed Clinical Social Worker
            </p>

            {/* Name */}
            <h1 className="page-title mt-3 md:text-6xl">Rachel Siegel, MSW</h1>

            {/* Tagline */}
            <p className="mt-5 text-lg leading-relaxed text-neutral-700 sm:mt-6 sm:text-xl md:text-2xl md:leading-relaxed">
              Fulfill your musical mission both on and off stage, through
              mindfulness, compassion and flexibility
            </p>

            {/* Introduction */}
            <p className="body-text mt-6 max-w-xl sm:mt-8">
              As a former clarinetist for &ldquo;The President&rsquo;s
              Own&rdquo; United States Marine Band, I understand the unique
              pressures of performing at the highest level. That lived
              experience led me to become a therapist, so I could help
              performing artists and high achievers navigate perfectionism,
              anxiety, and burnout with the same dedication they bring to their
              craft.
            </p>

            {/* CTA */}
            <div className="mt-8 sm:mt-10">
              <Button asChild size="lg" className="h-12 px-8 text-base">
                <Link href="/contact">Book a Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder for future hero image */}
      <section
        aria-label="Featured image placeholder"
        className="relative mx-auto -mt-8 max-w-6xl px-4 sm:-mt-12 sm:px-6 md:-mt-16 lg:px-8"
      >
        <div className="aspect-[21/9] w-full overflow-hidden rounded-xl border border-border bg-gradient-to-br from-brand-purple/10 via-brand-blue/10 to-brand-teal/10 shadow-sm">
          <div className="flex h-full w-full items-center justify-center">
            <p className="text-sm text-muted-foreground">
              Nature-themed hero image coming soon
            </p>
          </div>
        </div>
      </section>

      {/* Brief value proposition / bridge section */}
      <section className="section-container-6xl py-16 sm:py-20 lg:py-24">
        <div className="section-container-3xl-center">
          <h2 className="section-heading-2xl">
            Therapy Grounded in Understanding
          </h2>
          <p className="body-text mt-6">
            I know what it is like to pour everything into your art and wonder
            if there is room left for the rest of your life. Whether you are a
            performing artist, a driven professional, or someone striving for
            balance, I offer a compassionate space where your strengths are
            honored and your challenges are met with genuine understanding.
          </p>
          <div className="mt-8 flex justify-center gap-4 sm:mt-10">
            <Button asChild size="lg" className="h-12 px-8 text-base">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 px-8 text-base"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
