/**
 * Small pinned Polaroid portrait for the Research & CV hero.
 * Spec: fixed 220px (180px mobile), 3deg tilt, circular pin, dual captions.
 */
export function PortraitCard({
  src,
  alt = "Portrait of Mayesha Maliha Proma",
  caption = "Mayesha, in ink",
}) {
  if (!src) return null;

  return (
    <div className="w-[180px] sm:w-[220px]">
      <div className="relative pt-2">
        {/* Corkboard pin */}
        <span
          className="absolute left-1/2 top-0 z-20 h-4 w-4 -translate-x-1/2 rounded-full shadow-[0_2px_4px_rgba(42,35,28,0.35)]"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, #e07a5a 0%, var(--terracotta) 45%, var(--terracotta-deep) 100%)",
          }}
          aria-hidden
        />

        {/* Polaroid card */}
        <figure
          className="relative rounded-[2px] shadow-[0_22px_40px_-18px_rgba(42,35,28,0.32),0_4px_10px_-4px_rgba(42,35,28,0.16)]"
          style={{
            background: "var(--polaroid)",
            padding: "12px 12px 34px",
            transform: "rotate(3deg)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="aspect-[4/5] w-full object-cover object-top"
            width={196}
            height={245}
          />
          <figcaption
            className="mt-3 text-center font-garamond text-[13px] italic"
            style={{ color: "var(--terracotta-deep)" }}
          >
            {caption}
          </figcaption>
        </figure>
      </div>

      <p className="mt-4 text-center font-sans text-[11px] text-muted">Japan / Bangladesh</p>
    </div>
  );
}
