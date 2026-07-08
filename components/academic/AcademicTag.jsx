export function AcademicTag({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-terracotta/35 bg-cream px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-terracotta ${className}`}
    >
      {children}
    </span>
  );
}
