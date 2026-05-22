import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { workCards } from "../data/ventures.js";

function WorkCard({ venture, index }) {
  const className =
    "group relative block overflow-hidden rounded-sm border-2 border-[rgba(204,66,44,0.30)] transition-transform hover:-translate-x-[2px] hover:-translate-y-[2px]";

  const inner = (
    <>
      <div className="absolute inset-0 bg-lines opacity-40 pointer-events-none" />
      <div className="relative z-[1] flex items-start gap-5 p-5 md:p-6">
        <div className="flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-3">
            <span className="rounded-sm border border-[rgba(204,66,44,0.40)] px-2 py-0.5 font-mono text-[10px] tracking-widest text-terracotta">
              {venture.tag}
            </span>
            <span className="hidden font-mono text-[10px] tracking-wide text-terracotta/55 md:inline">
              {venture.subtitle}
            </span>
          </div>
          <h3 className="mb-1.5 font-garamond text-[22px] font-bold text-ink group-hover:text-terracotta">{venture.title}</h3>
          <p className="font-garamond text-[15px] leading-relaxed text-ink/60">{venture.desc}</p>
        </div>
        <span className="flex-shrink-0 self-center font-hand text-[28px] text-terracotta/50 transition-transform group-hover:translate-x-1">
          →
        </span>
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{ backgroundColor: venture.bg, boxShadow: "3px 4px 0 rgba(192,68,42,0.18)" }}
      className={className}
    >
      {venture.external ? (
        <a href={venture.href} target="_blank" rel="noopener noreferrer" className="block">
          {inner}
        </a>
      ) : (
        <Link to={venture.href} className="block">
          {inner}
        </Link>
      )}
    </motion.div>
  );
}

export function WorkSection() {
  return (
    <section id="work" className="mx-auto w-full max-w-[900px] scroll-mt-28 px-6 lg:px-0">
      <div className="mb-8 flex items-baseline gap-3">
        <h2 className="font-hand text-[32px] font-bold text-terracotta md:text-[36px]">Selected work</h2>
        <div className="h-[2px] flex-1 self-center bg-terracotta/20" />
        <span className="font-hand text-lg text-ink/40">✍︎</span>
      </div>

      <div className="space-y-4">
        {workCards.map((venture, index) => (
          <WorkCard key={venture.title} venture={venture} index={index} />
        ))}
      </div>
    </section>
  );
}
