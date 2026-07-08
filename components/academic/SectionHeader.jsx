export function SectionHeader({ id, title, action }) {
  return (
    <div id={id} className="mb-6 flex scroll-mt-24 items-end justify-between gap-4">
      <h2 className="font-garamond text-[26px] font-semibold leading-tight text-ink md:text-[30px]">{title}</h2>
      {action ? (
        <a
          href={action.href}
          className="shrink-0 text-[13px] font-medium text-terracotta transition-colors hover:text-terracottaDark"
        >
          {action.label} →
        </a>
      ) : null}
    </div>
  );
}
