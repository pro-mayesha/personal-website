const STYLES = {
  published: "border-terracotta bg-terracotta text-paper",
  "under-review": "border-ink/25 bg-paperSoft text-ink/80",
  "in-progress": "border-terracotta/25 bg-note/60 text-terracottaDark",
  "research-idea": "border-dashed border-muted/50 bg-paper text-muted",
  "working-paper": "border-terracotta/30 bg-[#fff4ef] text-terracottaDark",
  founder: "border-terracotta/40 bg-terracotta/10 text-terracottaDark",
  research: "border-ink/20 bg-paperSoft text-ink/70",
};

const LABELS = {
  published: "Published",
  "under-review": "Under Review",
  "in-progress": "In Progress",
  "research-idea": "Research Idea",
  "working-paper": "Working Paper",
  founder: "Founder",
  research: "Research",
};

export function StatusTag({ status }) {
  const style = STYLES[status] || STYLES.research;
  const label = LABELS[status] || status;

  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-sm border px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.16em] ${style}`}
    >
      {label}
    </span>
  );
}
