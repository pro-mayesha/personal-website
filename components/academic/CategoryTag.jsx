export function CategoryTag({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-terracotta/60 bg-white px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-terracotta ${className}`}
    >
      {children}
    </span>
  );
}
