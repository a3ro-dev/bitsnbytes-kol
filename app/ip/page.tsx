"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function IPPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative bg-charcoal overflow-hidden pt-36 pb-28">
        <span
          className="absolute right-[-0.05em] bottom-[-0.12em] font-display text-white/[0.03] leading-none select-none pointer-events-none"
          style={{ fontSize: "clamp(10rem, 30vw, 26rem)" }}
          aria-hidden
        >
          ©
        </span>

        <div className="shell relative">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            <p className="text-[0.56rem] font-mono font-bold tracking-[0.44em] uppercase text-white/28 mb-7">
              Creative & Legal
            </p>
            <h1
              className="font-display text-white leading-[0.88] tracking-[-0.02em]"
              style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}
            >
              INTELLECTUAL<br />
              <span className="text-terracotta">PROPERTY.</span>
            </h1>
            <div className="mt-10 inline-flex items-center gap-3 bg-white/7 border border-white/12 text-white/60 font-mono text-xs font-bold px-5 py-3 rounded-full tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta shrink-0" />
              Copyright and brand guidelines
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
                <h2 className="font-display text-2xl mb-4">About Our IP</h2>
                <p className="text-stone text-sm leading-relaxed">
                  Bits&Bytes Kolkata is part of the bits&bytes™ Network. All brand marks, logos, names, and network-related assets 
                  are intellectual property of GOBITSNBYTES FOUNDATION and governed by the bits&bytes™ Network IP policy.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl mb-4">bits&bytes™ Brand Usage</h2>
                <p className="text-stone text-sm leading-relaxed">
                  <strong>The bits&bytes™ name and mark:</strong>
                </p>
                <ul className="space-y-2 mt-3 text-stone text-sm leading-relaxed">
                  <li>• Are trademarks of GOBITSNBYTES FOUNDATION</li>
                  <li>• Must always use the exact name "bits&bytes™" (with the ™ symbol)</li>
                  <li>• Cannot be altered, combined, or used in any unauthorized way</li>
                  <li>• Are for use by authorized Forks only, under Network governance</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl mb-4">Your Creations</h2>
                <p className="text-stone text-sm leading-relaxed">
                  If you create work through Bits&Bytes Kolkata (code, design, content, etc.):
                </p>
                <ul className="space-y-2 mt-3 text-stone text-sm leading-relaxed">
                  <li>• You retain ownership of your original creative work</li>
                  <li>• The work may be stewarded and shared by bits&bytes™ for community purposes</li>
                  <li>• You get credit for your contribution</li>
                  <li>• Work cannot be sold, licensed, or used outside the Network without Network approval</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl mb-4">Using Our Assets</h2>
                <p className="text-stone text-sm leading-relaxed">
                  <strong>For team members & authorized use:</strong> If you need to use Bits&Bytes assets (logos, brand kit, designs), 
                  please reach out to kolkata@gobitsnbytes.org for guidance and approvals.
                </p>
                <p className="text-stone text-sm leading-relaxed mt-3">
                  <strong>For external parties:</strong> All requests for using the bits&bytes™ brand, logos, or associated IP must 
                  go through GOBITSNBYTES FOUNDATION. Contact hello@gobitsnbytes.org.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl mb-4">Open Source & Attribution</h2>
                <p className="text-stone text-sm leading-relaxed">
                  Code and projects created by Bits&Bytes Kolkata may be shared under open source licenses. When using our code or 
                  work, always provide proper attribution to Bits&Bytes Kolkata and the bits&bytes™ Network.
                </p>
              </div>

              <div className="rounded-2xl border border-charcoal/8 bg-white p-6">
                <p className="text-stone text-xs leading-relaxed">
                  <strong className="text-charcoal">Full IP Policy:</strong> For comprehensive intellectual property policies, 
                  copyright terms, licensing details, and Network governance, visit{" "}
                  <a href="https://gobitsnbytes.org/ip" target="_blank" rel="noopener noreferrer" className="text-terracotta font-semibold hover:underline">
                    gobitsnbytes.org/ip
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
              Questions about IP?{" "}
              <span className="text-terracotta">Let&apos;s talk.</span>
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-terracotta text-white font-bold text-sm px-8 py-4 rounded-full hover:bg-[#A02320] transition-colors"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://gobitsnbytes.org/ip"
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
