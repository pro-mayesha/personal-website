"use client";

import { motion } from "framer-motion";

/**
 * Same notebook / ruled layout as “The chaos I couldn’t ignore” on the home page.
 * @param {Object} props
 * @param {import("./blogTypes").BlogParagraph[]} props.paragraphs
 * @param {string} props.pullQuote
 * @param {string} props.signature
 * @param {string} props.signatureMeta
 * @param {boolean} [props.animate]
 */
export function NotebookStoryCard({
  paragraphs,
  pullQuote,
  signature,
  signatureMeta,
  animate = true,
}) {
  const inner = (
    <>
      <div className="absolute inset-0 bg-lines pointer-events-none opacity-95" />
      <div className="absolute bottom-0 top-0 left-[110px] hidden w-[2px] bg-terracotta/25 pointer-events-none md:block" />

      <div className="relative z-[1] flex">
        <div className="hidden w-[110px] flex-shrink-0 space-y-[72px] px-3 py-10 md:block">
          {paragraphs.map((p, i) => (
            <div key={i} className="rotate-[-0.5deg] font-hand text-[12px] leading-tight text-terracotta/60">
              {p.marginNote || "—"}
            </div>
          ))}
        </div>

        <div className="flex-1 space-y-6 px-6 py-10 md:px-10">
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className={`font-garamond text-[19px] leading-[1.75] text-ink md:text-[20px] ${p.highlighted ? "-mx-2 rounded-sm bg-[rgba(255,220,80,0.30)] px-2 py-1" : ""}`}
            >
              {p.text}
            </p>
          ))}

          {pullQuote ? (
            <p className="mt-8 border-l-4 border-[rgba(204,66,44,0.40)] pl-5 font-garamond text-[20px] italic leading-relaxed text-terracotta md:text-[21px]">
              {pullQuote}
            </p>
          ) : null}

          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-dashed border-[rgba(204,66,44,0.20)] pt-6">
            <div className="rotate-[-1deg] font-hand text-[22px] text-ink/70">{signature}</div>
            {signatureMeta ? (
              <span className="font-mono text-[10px] tracking-wider text-ink/40">{signatureMeta}</span>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );

  if (!animate) {
    return (
      <div
        className="relative overflow-hidden rounded-sm border-2 border-[rgba(204,66,44,0.40)] bg-paperSoft"
        style={{ boxShadow: "4px 5px 0 rgba(192,68,42,0.18)" }}
      >
        {inner}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-sm border-2 border-[rgba(204,66,44,0.40)] bg-paperSoft"
      style={{ boxShadow: "4px 5px 0 rgba(192,68,42,0.18)" }}
    >
      {inner}
    </motion.div>
  );
}
