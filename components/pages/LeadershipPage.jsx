import { leadershipEntries, leadershipIntro } from "@/lib/content/leadership";

export function LeadershipPage() {
  return (
    <article className="page-wrap pb-10 pt-8">
      <p className="meta-kicker">Leadership</p>
      <h1 className="mt-2 font-display text-[36px] font-medium tracking-tight text-ink md:text-[44px]">
        People and community
      </h1>
      <p className="mt-3 max-w-2xl font-article text-[20px] leading-[1.65] text-ink/75">{leadershipIntro}</p>

      <div className="mt-8 space-y-8">
        {leadershipEntries.map((entry) => (
          <section
            key={entry.id}
            id={entry.id}
            className="scroll-mt-24 border-t border-line pt-5"
          >
            {entry.periods?.length ? (
              <div className="space-y-1">
                {entry.periods.map((item) => (
                  <p key={item.label} className="section-date">
                    {item.label}: {item.value}
                  </p>
                ))}
              </div>
            ) : entry.period && entry.period !== "Date not listed" ? (
              <p className="section-date">{entry.period}</p>
            ) : null}
            {entry.status ? (
              <p className="mt-1 font-sans text-[13px] font-semibold text-terracottaLight">{entry.status}</p>
            ) : null}
            <p className="mt-2 font-sans text-[13px] font-semibold text-ink/55">{entry.role}</p>
            <h2 className="mt-1 font-display text-[26px] text-ink">{entry.title}</h2>
            <p className="mt-1 font-garamond text-[15px] text-ink/50">{entry.organization}</p>

            <dl className="mt-4 space-y-3">
              {[
                ["Why she became involved", entry.why],
                ["What she did", entry.did],
                ["Who was affected", entry.affected],
                ["What was difficult", entry.difficulty],
                ["What she learned", entry.learned],
              ].map(([label, text]) => (
                <div key={label}>
                  <dt className="font-sans text-[11px] uppercase tracking-[0.12em] text-muted">{label}</dt>
                  <dd className="mt-1 max-w-3xl font-article text-[19px] leading-[1.65] text-ink/80">{text}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </article>
  );
}
