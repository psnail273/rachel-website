import Link from "next/link";
import { navItems } from "@/lib/navigation";
import { LeafMotif } from "@/components/decorative/leaf-motif";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-brand-purple-dark text-neutral-200">
      {/* Stone motif — grounding accent */}
      <LeafMotif
        variant="stone"
        className="absolute -right-8 top-4 hidden lg:block"
        size={180}
        opacity={0.03}
      />

      <div className="section-container-6xl relative py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand / About */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Rachel Siegel, MSW
            </h3>
            <p className="mt-2 text-sm text-neutral-300">
              Therapist &amp; Coach for High Achievers and Performing Artists
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
              Quick Links
            </h4>
            <nav className="mt-3 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-block text-sm text-neutral-300 transition-all duration-200 hover:translate-x-0.5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info Placeholder */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
              Contact
            </h4>
            <address className="mt-3 flex flex-col gap-2 text-sm not-italic text-neutral-300">
              <span>St. Louis, MO</span>
              <span>info@rachelsiegel.com</span>
              <span>(555) 123-4567</span>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-neutral-600 pt-6 text-center text-sm text-neutral-400">
          &copy; 2026 Rachel Siegel, MSW. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
