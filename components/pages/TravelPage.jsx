import { travelIllustration, travelInstagram, travelIntro, travelPlaces } from "@/lib/content/travel";

export function TravelPage() {
  return (
    <article className="page-wrap pb-10 pt-8">
      <p className="meta-kicker">Travel</p>
      <h1 className="mt-2 font-display text-[36px] font-medium tracking-tight text-ink md:text-[44px]">
        Field notes from elsewhere
      </h1>
      <div className="mt-3 max-w-2xl space-y-3">
        {travelIntro.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="font-article text-[20px] leading-[1.65] text-ink/75">
            {paragraph}
          </p>
        ))}
      </div>
      <p className="mt-4">
        <a
          href={travelInstagram.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-[14px] font-semibold text-terracottaLight hover:underline"
        >
          @{travelInstagram.handle} ↗
        </a>
      </p>

      <figure className="mt-8 max-w-md">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={travelIllustration.src} alt={travelIllustration.alt} className="w-full border border-line bg-paperSoft" />
      </figure>

      <div className="mt-8 space-y-7">
        {travelPlaces.map((place) => (
          <section key={place.id} id={place.id} className="border-t border-line pt-5">
            <p className="section-date">{place.period}</p>
            <h2 className="mt-1 font-display text-[26px] text-ink">{place.country}</h2>
            <div className="mt-3 max-w-2xl space-y-3">
              {place.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="font-article text-[20px] leading-[1.65] text-ink/80">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
