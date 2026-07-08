const STYLES = {
  published: "border-transparent bg-terracotta text-white",
  "under-review": "border-ink/25 bg-white text-ink/70",
  "in-progress": "border-terracotta bg-white text-terracotta",
  "research-idea": "border-dashed border-terracotta/50 bg-white text-terracotta/80",
  "working-paper": "border-terracotta bg-white text-terracotta",
};

const LABELS = {
  published: "Published",
  "under-review": "Under Review",
  "in-progress": "In Progress",
  "research-idea": "Research Idea",
  "working-paper": "Working Paper",
};

export function StatusTag({ status }) {
  const style = STYLES[status] || STYLES["under-review"];
  const label = LABELS[status] || status;
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-md border px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] ${style}`}
    >
      {label}
    </span>
  );
}
