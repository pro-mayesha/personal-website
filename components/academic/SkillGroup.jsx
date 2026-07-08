export function SkillGroup({ title, description, skills = [], highlight = 2 }) {
  return (
    <div>
      <span className="inline-block rounded-md bg-terracotta px-3 py-1 text-[12px] font-semibold lowercase tracking-wide text-white shadow-[3px_3px_0_rgba(155,46,32,0.22)]">
        {title}
      </span>
      {description ? <p className="mt-2 text-[12px] text-muted">{description}</p> : null}
      <p className="mt-4 border-t border-dashed border-terracotta/30 pt-4 text-[15px] leading-[2] text-ink/70">
        {skills.map((skill, i) => (
          <span key={skill}>
            <span className={i < highlight ? "font-semibold text-terracotta" : "text-ink/70"}>{skill}</span>
            {i < skills.length - 1 ? <span className="text-terracotta/40"> · </span> : null}
          </span>
        ))}
      </p>
    </div>
  );
}
