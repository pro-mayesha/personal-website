export function SectionHeader({ id, title, action }) {
  const isExternal = action?.href?.startsWith("http");

  return (
    <div id={id} className="mb-3 flex scroll-mt-24 items-end justify-between gap-3">
      <h2 className="font-garamond text-[26px] font-semibold leading-tight text-ink md:text-[30px]">{title}</h2>
      {action ? (
        <a
          href={action.href}
          className="card-link shrink-0 text-[13px] font-medium"
          {...(isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {action.label} →
        </a>
      ) : null}
    </div>
  );
}
