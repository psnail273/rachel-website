import type { Metadata } from "next";
import { GraduationCap, BookOpen, Heart, User } from "lucide-react";
import { LeafMotif } from "@/components/decorative/leaf-motif";
import { InstrumentMotif } from "@/components/decorative/instrument-motif";

export const metadata: Metadata = {
  title: "About | Rachel Siegel, MSW",
  description:
    "Learn about Rachel Siegel, MSW — a therapist and coach for high achievers and performing artists. Former clarinetist for The President's Own U.S. Marine Band.",
};

export default function About() {
  return (
    <div className="py-16 sm:py-20 lg:py-24">
      {/* Hero / Introduction */}
      <section className="section-container-6xl">
        <div className="grid items-start gap-10 lg:grid-cols-3 lg:gap-14">
          {/* Headshot Placeholder */}
          <div className="flex justify-center lg:col-span-1">
            <div className="flex aspect-[4/5] w-full max-w-xs flex-col items-center justify-center rounded-lg border-2 border-dashed border-neutral-300 bg-neutral-100">
              <User className="mb-3 size-16 text-neutral-400" strokeWidth={1} />
              <span className="text-sm font-medium text-neutral-500">
                Professional Headshot
              </span>
              <span className="mt-1 text-xs text-neutral-400">Placeholder</span>
            </div>
          </div>

          {/* Biography */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold tracking-tight text-brand-purple sm:text-4xl">
              About Rachel Siegel, MSW
            </h1>

            <blockquote className="mt-6 border-l-4 border-brand-teal pl-4 text-lg leading-relaxed text-neutral-700 italic transition-colors duration-200 hover:border-brand-purple sm:text-xl">
              &ldquo;I believe that every person holds the power to transform
              their own lives. It is my privilege to walk with my clients on
              that journey, combining empathetic connection with evidence-based
              strategies.&rdquo;
            </blockquote>

            <p className="body-text mt-6">
              I specialize in working with individuals navigating anxiety,
              depression, perfectionism, imposter syndrome, identity
              development, work-life balance, and eating and body image
              concerns.
            </p>
          </div>
        </div>
      </section>

      {/* Marine Band Narrative */}
      <section className="section-spacing relative overflow-hidden">
        {/* Clarinet motif — Rachel's Marine Band career */}
        <InstrumentMotif
          variant="clarinet"
          className="absolute -right-12 top-8 hidden lg:block"
          size={320}
          opacity={0.04}
        />

        <div className="section-container-6xl relative">
          <h2 className="text-2xl font-bold text-brand-purple sm:text-3xl">
            From the Stage to the Therapy Room
          </h2>

          <div className="body-text mt-6 space-y-5">
            <p>
              Before becoming a therapist, I served as a clarinetist for
              &ldquo;The President&rsquo;s Own&rdquo; United States Marine Band.
              During my time with the ensemble, I performed at White House
              holiday dinners, live televised events, and national concert tours
              across the country.
            </p>

            <p>
              This unique background allows me to draw from both the
              psychological sciences and the common experiences of professional
              musicians. I help my clients build a flexible relationship with
              career stresses, pursue an authentic, values-driven life, and
              address struggles with confidence, motivation, and balance.
            </p>

            <p className="font-medium text-brand-purple-dark">
              I have a specialty focus on high achievers and performing artists
              who are ready to move beyond the patterns holding them back and
              build lives that feel as fulfilling off-stage as on.
            </p>
          </div>
        </div>
      </section>

      {/* Therapy Approach */}
      <section className="section-spacing relative overflow-hidden bg-neutral-50 py-16 sm:py-20 lg:py-24">
        {/* Nature decorative element */}
        <LeafMotif
          variant="leaf"
          className="absolute -left-24 top-8"
          size={400}
          opacity={0.04}
        />

        <div className="section-container-6xl relative">
          <div className="flex items-center gap-3">
            <Heart className="size-7 text-brand-teal" strokeWidth={1.5} />
            <h2 className="text-2xl font-bold text-brand-purple sm:text-3xl">
              My Approach
            </h2>
          </div>

          <div className="body-text mt-6 space-y-5">
            <p>
              In my therapy room, I am committed to creating a safe,
              nonjudgmental environment where you can explore your experiences
              openly and honestly. I use a relational, strengths-based approach
              that honors who you are while helping you develop new tools and
              perspectives.
            </p>

            <p>
              My goal is to provide an emotionally &ldquo;safe space&rdquo; for
              personal growth and discovery -- a place where you can be fully
              yourself, examine what is and isn&rsquo;t working, and build the
              life you truly want.
            </p>
          </div>
        </div>
      </section>

      {/* Education & Credentials */}
      <section className="section-spacing relative overflow-hidden">
        {/* Fern motif — growth and learning */}
        <LeafMotif
          variant="fern"
          className="absolute -right-16 top-8 hidden lg:block"
          size={340}
          opacity={0.04}
        />

        <div className="section-container-6xl relative">
          <div className="flex items-center gap-3">
            <GraduationCap
              className="size-7 text-brand-blue"
              strokeWidth={1.5}
            />
            <h2 className="text-2xl font-bold text-brand-purple sm:text-3xl">
              Education &amp; Credentials
            </h2>
          </div>

          <ul className="mt-6 space-y-4">
            <li className="flex items-center gap-3">
              <span className="mt-1.5 block size-2 shrink-0 rounded-full bg-brand-purple" />
              <div>
                <span className="font-semibold text-neutral-800">
                  MSW, Master of Social Work
                </span>
                <span className="block text-sm text-neutral-500 sm:inline sm:ml-1">
                  &mdash; Saint Louis University
                </span>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="mt-1.5 block size-2 shrink-0 rounded-full bg-brand-blue" />
              <div>
                <span className="font-semibold text-neutral-800">
                  MM, Music Performance
                </span>
                <span className="block text-sm text-neutral-500 sm:inline sm:ml-1">
                  &mdash; University of Southern California
                </span>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="mt-1.5 block size-2 shrink-0 rounded-full bg-brand-teal" />
              <div>
                <span className="font-semibold text-neutral-800">
                  BM, Music Performance
                </span>
                <span className="block text-sm text-neutral-500 sm:inline sm:ml-1">
                  &mdash; University of Minnesota &ndash; Twin Cities
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Specialized Training */}
      <section className="section-spacing pb-16 sm:pb-20 lg:pb-24">
        <div className="section-container-6xl">
          <div className="flex items-center gap-3">
            <BookOpen className="size-7 text-brand-teal" strokeWidth={1.5} />
            <h2 className="text-2xl font-bold text-brand-purple sm:text-3xl">
              Specialized Training
            </h2>
          </div>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "RO-DBT (Radically Open Dialectical Behavioral Therapy) Level 1",
              "Compassion Focused Therapy (Drs. Dennis Church and Paul Gilbert, Psychwire)",
              "Treating Adult ADHD (Margaret Dawson)",
              "Body Perfectionism: Innovative Tools from DBT, CBT, ACT ERP and More to Improve Self-Worth (Deanna Smith, PESI)",
              "Certification Training in DBT (Alexa Mulee, C-DBT)",
              "Understanding Adolescent Eating Disorders: Foundations in Family-Based Treatment (Washington University, St. Louis)",
              "Shamelessly Imperfect: A guide to Help Your Clients Break Free from Perfectionism (Milly Feliz, PESI)",
              "ACT 2-Day Intensive (Dr. DJ Moran)",
              "Mindfulness Certification Course, 2-Day Intensive (Dr. Debra Premashakti Alvis)",
              "Food and Mood: A Therapist's Guide to the Role of Nutrition in Mental Health (Kathleen Zamperini)",
            ].map((training) => (
              <li
                key={training}
                className="flex items-center gap-2 rounded-md border border-neutral-200 bg-white p-3 text-sm text-neutral-700 transition-shadow duration-200 hover:shadow-md"
              >
                <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-brand-teal" />
                {training}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
