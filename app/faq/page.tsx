"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function FAQPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative bg-charcoal overflow-hidden pt-36 pb-28">
        <span
          className="absolute right-[-0.05em] bottom-[-0.12em] font-display text-white/[0.03] leading-none select-none pointer-events-none"
          style={{ fontSize: "clamp(10rem, 30vw, 26rem)" }}
          aria-hidden
        >
          ?
        </span>

        <div className="shell relative">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            <p className="text-[0.56rem] font-mono font-bold tracking-[0.44em] uppercase text-white/28 mb-7">
              Common Questions
            </p>
            <h1
              className="font-display text-white leading-[0.88] tracking-[-0.02em]"
              style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}
            >
              FREQUENTLY<br />
              <span className="text-terracotta">ASKED.</span>
            </h1>
            <div className="mt-10 inline-flex items-center gap-3 bg-white/7 border border-white/12 text-white/60 font-mono text-xs font-bold px-5 py-3 rounded-full tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta shrink-0" />
              Answers to your questions about Bits&Bytes Kolkata
            </div>
          </motion.div>
        </div>
      </section>

      <div className="flex flex-col gap-[5px]">
        <div className="h-[2.5px] bg-terracotta/60 w-full" />
        <div className="h-px bg-terracotta/20 w-full" />
      </div>

      {/* ── Note about full FAQ ─────────────────────────────────────────── */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="shell">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="rounded-2xl border border-charcoal/8 bg-white p-8"
          >
            <p className="text-stone text-sm leading-relaxed mb-4">
              <strong className="text-charcoal">Looking for more?</strong> Bits&Bytes Kolkata is part of the bits&bytes™ Network. For comprehensive FAQs about the Network, Forks, governance, and more, visit the official bits&bytes™ FAQ:
            </p>
            <a
              href="https://gobitsnbytes.org/faq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-terracotta font-semibold hover:underline"
            >
              gobitsnbytes.org/faq <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ Items ──────────────────────────────────────────────────── */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="shell">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mb-12"
            >
              <p className="text-[0.56rem] font-mono font-bold tracking-[0.44em] uppercase text-stone/45 mb-4">
                Kolkata
              </p>
              <h2
                className="font-display text-charcoal leading-[0.9]"
                style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
              >
                QUICK ANSWERS.
              </h2>
            </motion.div>

            <div className="space-y-4">
              <FAQItem
                q="How do I join Bits&Bytes Kolkata?"
                a="Head to our Join page to fill out the application form. It's free to join! We're always looking for builders who are excited to ship."
                delay={0}
              />
              <FAQItem
                q="What events do you run?"
                a="We run hackathons, build nights, workshops, and community meetups. Check our Events page to see what's coming up and register."
                delay={0.1}
              />
              <FAQItem
                q="Do I need to have coding experience?"
                a="Nope! Our community is for teens of all skill levels — from complete beginners to experienced developers. We believe in learning by building."
                delay={0.2}
              />
              <FAQItem
                q="Can I participate remotely?"
                a="Some events are hybrid or online, but our flagship events are in-person in Kolkata. Check the specific event details to see the format."
                delay={0.3}
              />
              <FAQItem
                q="Is there a membership fee?"
                a="No, it's completely free. We believe tech education should be accessible to everyone."
                delay={0.4}
              />
              <FAQItem
                q="What's the age requirement?"
                a="Bits&Bytes is for teens aged 13–19. We're building a space for young builders."
                delay={0.5}
              />
              <FAQItem
                q="I have more questions. Who do I contact?"
                a="Email us at kolkata@gobitsnbytes.org or visit our Contact page. We're always happy to help!"
                delay={0.6}
              />
            </div>
          </div>
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
              className="font-display text-white leading-[0.9] max-w-3xl"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              Still have questions?{" "}
              <span className="text-terracotta">Let's talk.</span>
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-terracotta text-white font-bold text-sm px-8 py-4 rounded-full hover:bg-[#A02320] transition-colors"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://gobitsnbytes.org/faq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/10 text-white font-semibold text-sm px-8 py-4 rounded-full hover:border-terracotta/30 hover:bg-white/5 transition-all"
              >
                Full FAQ <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-16 pt-10 border-t border-white/8">
              <p className="text-white/60 text-xs leading-relaxed">
                For governance, Network-wide policies, and comprehensive FAQs, visit{" "}
                <a href="https://gobitsnbytes.org/faq" target="_blank" rel="noopener noreferrer" className="text-terracotta font-semibold hover:underline">
                  gobitsnbytes.org/faq
                </a>
              </p>
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

function FAQItem({ q, a, delay }: { q: string; a: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [isOpen, setIsOpen] = require("react").useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay * 0.1, ease: EASE }}
      className="rounded-xl border border-charcoal/8 bg-white overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-7 py-5 flex items-center justify-between hover:bg-cream/50 transition-colors"
      >
        <p className="font-semibold text-charcoal">{q}</p>
        <ChevronDown
          className={`w-5 h-5 text-terracotta shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-7 py-5 border-t border-charcoal/8 bg-cream/30">
          <p className="text-stone text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </motion.div>
  );
}
