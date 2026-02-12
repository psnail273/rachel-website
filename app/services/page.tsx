import type { Metadata } from "next";
import { LeafMotif } from "@/components/decorative/leaf-motif";
import { InstrumentMotif } from "@/components/decorative/instrument-motif";

export const metadata: Metadata = {
  title: "Services | Rachel Siegel, MSW",
  description:
    "Therapy and coaching services for high achievers, performing artists, and individuals navigating perfectionism, anxiety, depression, and burnout.",
};

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-b from-brand-purple/5 to-transparent">
        <div className="mx-auto max-w-4xl px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8">
          <h1 className="page-title">Services</h1>
          <p className="mt-4 text-lg text-neutral-600 sm:text-xl">
            Therapy &amp; Coaching
          </p>
        </div>
      </section>

      {/* Therapy Section */}
      <section className="section-container-4xl">
        <h2 className="section-heading-3xl">Therapy</h2>
        <p className="body-text-dark mt-6">
          I specialize in working with high achievers, performing artists, and
          individuals navigating anxiety, depression, burnout, and body image
          concerns.
        </p>

        {/* Two-column layout for the "help with" and "may help you" lists */}
        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-12">
          {/* You might want help with... */}
          <div>
            <h3 className="text-xl font-medium text-brand-purple-light sm:text-2xl">
              You might want help with...
            </h3>
            <ul className="mt-4 space-y-2.5 text-neutral-700">
              {[
                "Identity development",
                "Anxiety and stress management",
                "Maladaptive perfectionism",
                "Self-doubt and imposter syndrome",
                "Depression or burnout",
                "Disordered eating and body image concerns",
                "Work-life balance",
                "Relationship issues/setting boundaries",
              ].map((item) => (
                <li key={item} className="list-item-hover">
                  <span aria-hidden="true" className="bullet-dot" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Therapy may help you... */}
          <div>
            <h3 className="text-xl font-medium text-brand-purple-light sm:text-2xl">
              Therapy may help you...
            </h3>
            <ul className="mt-4 space-y-2.5 text-neutral-700">
              {[
                "Manage stress and anxiety",
                "Reframe unhelpful beliefs",
                "Develop greater self worth and self-confidence",
                "Cope with uncomfortable emotions and situations",
                "Increase compassion for yourself and others",
                "Develop self-care strategies",
                "Learn and set healthier boundaries in relationships and with work",
                "Move through creative or career blocks with clarity",
                "Explore identity outside of work/art/achievement",
                "Create work/performances that have meaning and purpose",
              ].map((item) => (
                <li key={item} className="list-item-hover">
                  <span aria-hidden="true" className="bullet-dot" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Coaching Section */}
      <section className="relative overflow-hidden bg-neutral-50">
        {/* Piano motif — performing artist coaching */}
        <InstrumentMotif
          variant="piano"
          className="absolute -left-16 bottom-8 hidden lg:block"
          size={300}
          opacity={0.04}
        />

        <div className="section-container-4xl relative">
          <h2 className="section-heading-3xl">Coaching</h2>
          <p className="body-text-dark mt-6">
            In addition to traditional talk therapy, I offer coaching sessions
            to performing artists to address performance anxiety, perfectionism,
            and developing a mission-driven career.
          </p>
          <p className="body-text-dark mt-4">
            In these sessions, I draw from ACT (Acceptance and Commitment
            Therapy) and CFT (Compassion Focused Therapy) to help performers
            learn about stage fright, and create performances that have meaning
            and purpose, through mindful acceptance and flexibility.
          </p>
        </div>
      </section>

      {/* Perfectionism Feature Section */}
      <section className="relative overflow-hidden">
        {/* Nature decorative element */}
        <LeafMotif
          variant="branch"
          className="absolute -right-20 top-16"
          size={360}
          opacity={0.05}
        />

        <div className="section-container-4xl relative">
          <h2 className="section-heading-3xl">About Perfectionism</h2>
          <p className="body-text-dark mt-6">
            Contrary to common belief, perfectionism doesn&rsquo;t help us
            achieve our goals. It keeps us small, distracted by the fear of
            making a mistake or seeming messy.
          </p>

          <div className="mt-8">
            <h3 className="text-xl font-medium text-brand-purple-light sm:text-2xl">
              Perfectionism causes:
            </h3>
            <ul className="mt-4 space-y-2.5 text-neutral-700">
              {[
                "Procrastination",
                "Shame",
                "Shutting down when emotional",
                "Imposter syndrome",
                "Obsession with achievement",
                "Chronic stress and burnout",
                "Frequent and intense anxiety of being perceived negatively",
              ].map((item) => (
                <li key={item} className="list-item-hover">
                  <span aria-hidden="true" className="bullet-dot" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-10 text-center text-lg font-medium italic text-brand-blue sm:text-xl">
            What if you can let that all go, and still be successful, loved and
            accepted as you are?
          </p>

          {/* Brene Brown Quote */}
          <blockquote className="mt-10 rounded-lg border-l-4 border-brand-teal bg-brand-teal/5 px-6 py-6 transition-colors duration-200 hover:border-brand-purple sm:px-8 sm:py-8">
            <p className="body-text-dark italic">
              &ldquo;Perfectionism is a self-destructive and addictive belief
              system that fuels this primary thought: If I look perfect and do
              everything perfectly, I can avoid or minimize the painful feelings
              of shame, judgement, or blame.&rdquo;
            </p>
            <footer className="mt-4">
              <cite className="text-sm font-medium text-brand-teal-dark not-italic sm:text-base">
                &mdash; Bren&eacute; Brown,{" "}
                <span className="italic">The Gifts of Imperfection</span>
              </cite>
            </footer>
          </blockquote>
        </div>
      </section>
    </>
  );
}
