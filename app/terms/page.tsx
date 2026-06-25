"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function TermsPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative bg-charcoal overflow-hidden pt-36 pb-28">
        <span
          className="absolute right-[-0.05em] bottom-[-0.12em] font-display text-white/[0.03] leading-none select-none pointer-events-none"
          style={{ fontSize: "clamp(10rem, 30vw, 26rem)" }}
          aria-hidden
        >
          ⚖️
        </span>

        <div className="shell relative">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            <p className="text-[0.56rem] font-mono font-bold tracking-[0.44em] uppercase text-white/28 mb-7">
              Legal
            </p>
            <h1
              className="font-display text-white leading-[0.88] tracking-[-0.02em]"
              style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}
            >
              TERMS OF<br />
              <span className="text-terracotta">SERVICE.</span>
            </h1>
            <div className="mt-10 inline-flex items-center gap-3 bg-white/7 border border-white/12 text-white/60 font-mono text-xs font-bold px-5 py-3 rounded-full tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta shrink-0" />
              Governed by bits&bytes™ Network policies
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
                <h2 className="font-display text-2xl mb-4">About Bits&Bytes Kolkata</h2>
                <p className="text-stone text-sm leading-relaxed">
                  Bits&Bytes Kolkata is a local Fork (chapter) of the bits&bytes™ Network, founded by GOBITSNBYTES FOUNDATION. 
                  When you participate in any Bits&Bytes Kolkata event, initiative, or community space, you agree to the terms 
                  outlined below and all applicable bits&bytes™ Network policies.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl mb-4">Your Participation</h2>
                <p className="text-stone text-sm leading-relaxed">
                  By joining Bits&Bytes Kolkata, you agree to:
                </p>
                <ul className="space-y-2 mt-3 text-stone text-sm leading-relaxed">
                  <li>• Follow our Code of Conduct in all community spaces</li>
                  <li>• Respect the intellectual property rights of others</li>
                  <li>• Use our platform responsibly and lawfully</li>
                  <li>• Provide accurate information in applications and registrations</li>
                  <li>• Not engage in harassment, discrimination, or harmful behavior</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl mb-4">Intellectual Property</h2>
                <p className="text-stone text-sm leading-relaxed">
                  Work created through Bits&Bytes Kolkata events and initiatives is governed by bits&bytes™ Network IP policies. 
                  For complete details on intellectual property, ownership, and usage rights, visit:
                </p>
                <a
                  href="https://gobitsnbytes.org/ip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-terracotta font-semibold hover:underline mt-3"
                >
                  gobitsnbytes.org/ip <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div>
                <h2 className="font-display text-2xl mb-4">Limitation of Liability</h2>
                <p className="text-stone text-sm leading-relaxed">
                  Bits&Bytes Kolkata and GOBITSNBYTES FOUNDATION are provided on an "as-is" basis. We make no guarantees 
                  regarding availability, accuracy, or outcomes of participation. You participate at your own risk.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl mb-4">Governing Law</h2>
                <p className="text-stone text-sm leading-relaxed">
                  These Terms of Service are governed by the laws of India. Any disputes shall be resolved according to 
                  bits&bytes™ Network governance policies and applicable Indian law.
                </p>
              </div>

              <div className="rounded-2xl border border-charcoal/8 bg-white p-6">
                <p className="text-stone text-xs leading-relaxed">
                  <strong className="text-charcoal">Full Terms:</strong> For comprehensive terms of service, governance framework, 
                  and Network-wide policies, visit{" "}
                  <a href="https://gobitsnbytes.org/terms" target="_blank" rel="noopener noreferrer" className="text-terracotta font-semibold hover:underline">
                    gobitsnbytes.org/terms
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
              Have legal questions?{" "}
              <span className="text-terracotta">Get in touch.</span>
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-terracotta text-white font-bold text-sm px-8 py-4 rounded-full hover:bg-[#A02320] transition-colors"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://gobitsnbytes.org/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/10 text-white font-semibold text-sm px-8 py-4 rounded-full hover:border-terracotta/30 hover:bg-white/5 transition-all"
              >
                Full Terms <ArrowRight className="w-4 h-4" />
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
