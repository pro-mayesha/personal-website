import Link from "next/link";
import { journeyIntro, journeyStories } from "@/lib/content/journey";

export function JourneyPage() {
  return (
    <article className="page-wrap pb-10 pt-8">
      <p className="meta-kicker">Journey</p>
      <h1 className="mt-2 font-display text-[36px] font-medium tracking-tight text-ink md:text-[44px]">
        How the path was made
      </h1>
      <p className="mt-3 max-w-2xl font-article text-[20px] leading-[1.65] text-ink/75">{journeyIntro}</p>

      <div className="mt-8 space-y-8">
        {journeyStories.map((story) => (
          <section key={story.id} id={story.id} className="scroll-mt-24 border-t border-line pt-5">
            <p className="section-date">{story.period}</p>
            <h2 className="mt-1 font-display text-[26px] text-ink">{story.title}</h2>
            <div className="mt-3 max-w-2xl space-y-3">
              {story.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="font-article text-[20px] leading-[1.65] text-ink/85">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-8 max-w-2xl font-garamond text-[16px] text-ink/55">
        Her own account of applying abroad is in{" "}
        <Link href="/notes/the-chaos-i-couldnt-ignore" className="text-terracotta hover:underline">
          The chaos I couldn&apos;t ignore
        </Link>
        .
      </p>
    </article>
  );
}
