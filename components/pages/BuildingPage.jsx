import Link from "next/link";
import { projects } from "@/lib/content/projects";

export function BuildingPage() {
  return (
    <article className="page-wrap pb-10 pt-8">
      <p className="meta-kicker">Building</p>
      <h1 className="mt-2 font-display text-[36px] font-medium tracking-tight text-ink md:text-[44px]">
        Products for crossing borders
      </h1>
      <p className="mt-3 max-w-2xl font-article text-[20px] leading-[1.65] text-ink/75">
        Mayesha creates tools that help students move through international education.
      </p>

      <div className="mt-8 space-y-8">
        {projects.map((product) => (
          <section key={product.id} id={product.id} className="scroll-mt-24 border-t border-line pt-5">
            <p className="font-sans text-[11px] uppercase tracking-[0.14em] text-muted">{product.type}</p>
            <h2 className="mt-1 font-display text-[28px] text-ink">{product.title}</h2>
            <p className="mt-1 font-article text-[18px] italic text-ink/60">{product.tagline}</p>

            <dl className="mt-4 space-y-3.5">
              {[
                ["Problem", product.problem],
                ["Context", product.context],
                ["What Mayesha built", product.built],
                ["Users", product.users],
                ["Research or feedback", product.research],
                ["Current status", product.status],
                ["What she learned", product.learned],
              ].map(([label, text]) => (
                <div key={label} className="grid gap-2 md:grid-cols-[200px_1fr]">
                  <dt className="font-sans text-[12px] uppercase tracking-[0.12em] text-muted">{label}</dt>
                  <dd className="font-article text-[19px] leading-[1.65] text-ink/80">{text}</dd>
                </div>
              ))}
            </dl>

            {product.links?.website ? (
              <a
                href={product.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-sans text-[13px] text-terracotta hover:underline"
              >
                {product.links.website.replace(/^https:\/\//, "")} ↗
              </a>
            ) : null}
          </section>
        ))}
      </div>

      <p className="mt-8 font-garamond text-[15px] text-ink/50">
        Research papers connected to this work live on the{" "}
        <Link href="/academic#papers" className="text-terracotta hover:underline">
          academic page
        </Link>
        .
      </p>
    </article>
  );
}
