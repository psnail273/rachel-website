import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LeafMotif } from "@/components/decorative/leaf-motif";

export const metadata: Metadata = {
  title: "Rates | Rachel Siegel, MSW",
  description:
    "Session pricing for therapy and coaching with Rachel Siegel, MSW. Free 20-minute consultation, sliding scale options, and insurance information.",
};

export default function Rates() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-neutral-50 via-brand-purple/5 to-brand-teal/10 px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-brand-purple sm:text-5xl">
            Rates
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-neutral-600 sm:text-xl">
            Transparent pricing so you can focus on what matters most&mdash;your
            wellbeing.
          </p>
        </div>
      </section>

      {/* Main Rate */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="rounded-xl border border-border bg-white p-5 text-center shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-8 md:p-10">
          <h2 className="text-2xl font-semibold text-brand-purple sm:text-3xl">
            Individual Session
          </h2>
          <p className="mt-6 text-5xl font-bold tracking-tight text-brand-purple-dark sm:text-6xl">
            $125
          </p>
          <p className="mt-2 text-lg text-neutral-600">per 50-minute session</p>
        </div>

        {/* Free Consultation Callout */}
        <div className="mt-8 rounded-xl border-2 border-brand-teal/30 bg-brand-teal/5 p-5 text-center transition-shadow duration-200 hover:shadow-md sm:p-8 md:p-10">
          <p className="text-sm font-medium uppercase tracking-widest text-brand-teal">
            Complimentary
          </p>
          <h3 className="mt-2 text-2xl font-bold text-brand-teal-dark sm:text-3xl">
            Free 20-Minute Consultation
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            Not sure if we are the right fit? Schedule a free 20-minute phone
            consultation to ask questions and see how I can support you.
          </p>
          <div className="mt-6">
            <Button asChild size="lg" className="h-12 w-full px-6 text-base sm:w-auto sm:px-8">
              <Link href="/contact">Schedule Your Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sliding Scale */}
      <section className="bg-neutral-100 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-brand-purple sm:text-3xl">
            Sliding Scale
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg sm:leading-relaxed">
            I believe that everyone deserves access to quality mental health
            care. Sliding scale rates are available for those who need them. If
            cost is a concern, please do not hesitate to reach out&mdash;I am
            happy to discuss options that work for your situation.
          </p>
          <div className="mt-6">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 px-8 text-base"
            >
              <Link href="/contact">Inquire About Sliding Scale</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <h2 className="text-2xl font-semibold text-brand-purple sm:text-3xl">
          Insurance
        </h2>

        {/* In-Network */}
        <div className="mt-8 rounded-lg border border-border bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-8">
          <h3 className="text-xl font-semibold text-brand-blue">
            In-Network Coverage
          </h3>
          <p className="mt-3 text-base leading-relaxed text-neutral-600 sm:text-lg sm:leading-relaxed">
            I will be in-network with <strong>United</strong> and{" "}
            <strong>Anthem</strong> starting summer 2026. If you are covered by
            one of these plans, your sessions may be partially or fully covered
            depending on your specific benefits.
          </p>
        </div>

        {/* Superbill / Out-of-Network */}
        <div className="mt-6 rounded-lg border border-border bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-8">
          <h3 className="text-xl font-semibold text-brand-blue">
            Out-of-Network Reimbursement
          </h3>
          <p className="mt-3 text-base leading-relaxed text-neutral-600 sm:text-lg sm:leading-relaxed">
            If you are not using insurance, I will provide you with a
            superbill&mdash;an itemized receipt of the services you
            received&mdash;that you can submit to your insurance company for
            possible reimbursement.
          </p>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg sm:leading-relaxed">
            I recommend calling your insurance provider and asking about your
            out-of-network benefits for outpatient mental health services. This
            will help you understand what portion of the session fee may be
            reimbursed.
          </p>
        </div>

        {/* Diagnosis Disclosure Note */}
        <div className="mt-6 rounded-lg border border-brand-purple/20 bg-brand-purple/5 p-6 transition-shadow duration-200 hover:shadow-md sm:p-8">
          <h3 className="text-xl font-semibold text-brand-purple-dark">
            Important Note About Insurance
          </h3>
          <p className="mt-3 text-base leading-relaxed text-neutral-700 sm:text-lg sm:leading-relaxed">
            Please note that in order to use insurance, a diagnosis is required.
            This diagnosis becomes part of your permanent medical record. If you
            have questions or concerns about this, I am happy to discuss it
            during your consultation.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-purple/5 to-brand-teal/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Nature decorative element */}
        <LeafMotif
          variant="leaf"
          className="absolute -left-16 bottom-0"
          size={320}
          opacity={0.04}
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-brand-purple sm:text-3xl">
            Ready to Get Started?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-neutral-600 sm:text-lg">
            Reach out today to schedule your free 20-minute consultation. I look
            forward to hearing from you.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="h-12 px-8 text-base">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
