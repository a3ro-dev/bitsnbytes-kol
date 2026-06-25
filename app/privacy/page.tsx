"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function PrivacyPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative bg-charcoal overflow-hidden pt-36 pb-28">
        <span
          className="absolute right-[-0.05em] bottom-[-0.12em] font-display text-white/[0.03] leading-none select-none pointer-events-none"
          style={{ fontSize: "clamp(10rem, 30vw, 26rem)" }}
          aria-hidden
        >
          🔒
        </span>

        <div className="shell relative">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            <p className="text-[0.56rem] font-mono font-bold tracking-[0.44em] uppercase text-white/28 mb-7">
              Data & Security
            </p>
            <h1
              className="font-display text-white leading-[0.88] tracking-[-0.02em]"
              style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}
            >
              PRIVACY<br />
              <span className="text-terracotta">POLICY.</span>
            </h1>
            <div className="mt-10 inline-flex items-center gap-3 bg-white/7 border border-white/12 text-white/60 font-mono text-xs font-bold px-5 py-3 rounded-full tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta shrink-0" />
              DPDPA 2023 & POCSO compliant
            </div>
          </motion.div>
        </div>
      </section>

      <div className="flex flex-col gap-[5px]">
        <div className="h-[2.5px] bg-terracotta/60 w-full" />
        <div className="h-px bg-terracotta/20 w-full" />
      </div>

      {/* ── Content ────────────────────────────────────────────────────── */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="shell max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="prose prose-sm max-w-none space-y-8 text-charcoal">
              <div>
                <h2 className="font-display text-2xl mb-4">Our Commitment</h2>
                <p className="text-stone text-sm leading-relaxed">
                  Bits&Bytes Kolkata respects your privacy and is committed to protecting your personal data. We comply with the 
                  Digital Personal Data Protection Act, 2023 (DPDPA) and the Protection of Children from Sexual Offences Act, 2012 (POCSO).
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl mb-4">Data We Collect</h2>
                <p className="text-stone text-sm leading-relaxed">
                  We collect personal information when you:
                </p>
                <ul className="space-y-2 mt-3 text-stone text-sm leading-relaxed">
                  <li>• Apply to join our community</li>
                  <li>• Register for events</li>
                  <li>• Contact us via email or form</li>
                  <li>• Participate in programs or initiatives</li>
                </ul>
                <p className="text-stone text-sm leading-relaxed mt-3">
                  This typically includes name, email, age (for age verification), and other information you voluntarily provide.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl mb-4">How We Use Your Data</h2>
                <p className="text-stone text-sm leading-relaxed">
                  Your data is used to:
                </p>
                <ul className="space-y-2 mt-3 text-stone text-sm leading-relaxed">
                  <li>• Process your application and event registrations</li>
                  <li>• Communicate about events and opportunities</li>
                  <li>• Improve our programs and services</li>
                  <li>• Comply with legal and safeguarding obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl mb-4">Data Protection & Minor Protections</h2>
                <p className="text-stone text-sm leading-relaxed">
                  For participants under 18 years old, we implement additional safeguards including parental consent requirements, 
                  restricted data sharing, and compliance with POCSO standards. Your data is never sold or shared with third parties 
                  without explicit consent.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl mb-4">Your Rights</h2>
                <p className="text-stone text-sm leading-relaxed">
                  Under the DPDPA, you have the right to:
                </p>
                <ul className="space-y-2 mt-3 text-stone text-sm leading-relaxed">
                  <li>• Access your personal data</li>
                  <li>• Request correction of inaccurate data</li>
                  <li>• Request deletion of your data</li>
                  <li>• Withdraw consent for data processing</li>
                </ul>
                <p className="text-stone text-sm leading-relaxed mt-3">
                  To exercise these rights, contact us at kolkata@gobitsnbytes.org.
                </p>
              </div>

              <div className="rounded-2xl border border-charcoal/8 bg-white p-6">
                <p className="text-stone text-xs leading-relaxed">
                  <strong className="text-charcoal">Full Privacy Policy:</strong> For comprehensive privacy information, data governance, 
                  and Network-wide policies, visit{" "}
                  <a href="https://gobitsnbytes.org/privacy" target="_blank" rel="noopener noreferrer" className="text-terracotta font-semibold hover:underline">
                    gobitsnbytes.org/privacy
                  </a>
                </p>
              </div>

              <div className="pt-6 border-t border-charcoal/8">
                <p className="text-stone text-xs">
                  <strong className="text-charcoal">Last updated:</strong> June 2026
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <section className="bg-charcoal">
        <div className="flex flex-col gap-[5px]">
          <div className="h-[2.5px] bg-terracotta/60 w-full" />
          <div className="h-px bg-terracotta/20 w-full" />
        </div>
        <div className="shell py-20 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <p
              className="font-display text-white leading-[0.9] max-w-2xl"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              Questions about your data?{" "}
              <span className="text-terracotta">We&apos;re here to help.</span>
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-terracotta text-white font-bold text-sm px-8 py-4 rounded-full hover:bg-[#A02320] transition-colors"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://gobitsnbytes.org/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/10 text-white font-semibold text-sm px-8 py-4 rounded-full hover:border-terracotta/30 hover:bg-white/5 transition-all"
              >
                Full Policy <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col gap-[5px]">
          <div className="h-[2.5px] bg-terracotta/60 w-full" />
          <div className="h-px bg-terracotta/20 w-full" />
        </div>
      </section>
    </>
  );
}
