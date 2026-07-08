export function SectionHeader({ id, title, subtitle }) {
  return (
    <header id={id} className="scroll-mt-28 border-b border-terracotta/15 pb-4">
      <h2 className="font-hand text-[28px] font-bold leading-tight text-terracotta md:text-[32px]">{title}</h2>
      {subtitle ? (
        <p className="mt-2 max-w-2xl font-garamond text-[16px] leading-relaxed text-ink/65">{subtitle}</p>
      ) : null}
    </header>
  );
}
