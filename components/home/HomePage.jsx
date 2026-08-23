import Link from "next/link";
import { defaultBlogPosts } from "@/lib/blog/defaultBlogPosts";
import {
  BLOG_CATEGORIES,
  formatThoughtDate,
  getFeaturedThought,
  getPostExcerpt,
  getRecentThoughts,
  normalizePostCategory,
} from "@/lib/blog/blogCategories";
import { mergeThoughtArchive } from "@/lib/content/thoughts";
import { researchNotes } from "@/lib/content/notes";
import {
  currentChapter,
  hero,
  journeyPreview,
  peopleAndSystems,
  selectedWorkPreview,
  travelPreviewIntro,
} from "@/lib/content/homepage";
import { links } from "@/lib/content/links";
import { travelPlaces } from "@/lib/content/travel";
import { profile } from "@/lib/content/profile";

function SectionTags({ tags }) {
  if (!tags?.length) return null;
  return (
    <div className="mb-2 flex flex-wrap gap-x-3 gap-y-1">
      {tags.map((tag) => (
        <p key={tag} className="meta-kicker">
          {tag}
        </p>
      ))}
    </div>
  );
}

function SectionHead({ tags, title, href, linkLabel }) {
  return (
    <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
      <div>
        <SectionTags tags={tags} />
        <h2 className="font-display text-[28px] font-medium tracking-tight text-ink md:text-[34px]">{title}</h2>
      </div>
      {href ? (
        <Link href={href} className="font-sans text-[13px] text-terracotta hover:underline">
          {linkLabel || "Continue"}
        </Link>
      ) : null}
    </div>
  );
}

function Hero() {
  return (
    <section className="page-wrap grid grid-cols-[1fr_auto] items-center gap-4 pb-4 pt-8 md:items-end md:gap-6 md:pt-10">
      <div>
        <h1 className="font-display text-[32px] font-medium leading-[1.05] tracking-tight text-ink md:text-[56px]">
          {hero.name}
        </h1>
        <p className="mt-3 max-w-xl font-article text-[17px] leading-[1.55] text-ink/75 md:mt-4 md:text-[20px] md:leading-[1.6]">
          {hero.supporting}
        </p>
        <p className="mt-2 font-sans text-[13px] tracking-[0.04em] text-muted md:mt-3">{hero.location}</p>
      </div>
      <figure className="self-center justify-self-end md:self-end">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={hero.image}
          alt={hero.imageAlt}
          className="h-auto w-[120px] border border-line bg-paperSoft object-cover sm:w-[180px] md:w-[280px]"
        />
        <figcaption className="mt-1 font-sans text-[11px] text-muted md:mt-2 md:text-[12px]">
          {profile.portraitCaption}
        </figcaption>
      </figure>
    </section>
  );
}

function CurrentChapter() {
  return (
    <section className="page-wrap border-t border-line py-8">
      <SectionHead tags={["Now"]} title={currentChapter.title} />
      <p className="max-w-3xl font-garamond text-[18px] leading-relaxed text-ink/75">{currentChapter.body}</p>
      <ol className="mt-5 grid gap-3 sm:grid-cols-2">
        {currentChapter.activities.map((item, index) => (
          <li key={item.title} className="border-t border-line pt-4">
            <p className="font-sans text-[11px] tracking-[0.14em] text-muted">0{index + 1}</p>
            <Link href={item.href} className="mt-1 block font-display text-[20px] text-ink hover:text-terracotta">
              {item.title}
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}

function SelectedWork() {
  return (
    <section className="page-wrap border-t border-line py-8">
      <SectionHead tags={["Practice"]} title="Selected work" href="/building" linkLabel="All building →" />
      <div className="divide-y divide-line border-y border-line">
        {selectedWorkPreview.map((item) => (
          <Link key={item.title} href={item.href} className="group grid gap-1 py-3.5 md:grid-cols-[180px_1fr_auto] md:items-baseline">
            <p className="font-sans text-[11px] uppercase tracking-[0.14em] text-muted">{item.kind}</p>
            <div>
              <h3 className="font-display text-[22px] text-ink group-hover:text-terracotta">{item.title}</h3>
              <p className="mt-1 font-garamond text-[16px] text-ink/65">{item.body}</p>
            </div>
            <span className="font-sans text-[12px] text-terracotta">Read</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function PeopleAndSystems() {
  return (
    <section className="page-wrap border-t border-line py-8">
      <SectionHead tags={["Relations"]} title={peopleAndSystems.title} />
      <p className="max-w-3xl font-article text-[21px] leading-[1.62] text-ink/80">{peopleAndSystems.body}</p>
      <p className="mt-3 max-w-3xl font-article text-[18px] leading-[1.62] text-ink/60">{peopleAndSystems.note}</p>
    </section>
  );
}

function JourneyPreview() {
  return (
    <section className="page-wrap border-t border-line py-8">
      <SectionHead tags={["Path"]} title="Journey" href="/journey" linkLabel="Full stories →" />
      <ol className="relative space-y-0 border-l border-line pl-6 md:pl-8">
        {journeyPreview.map((item) => (
          <li key={item.title} className="relative pb-5 last:pb-0">
            <span className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full bg-terracotta md:-left-[37px]" />
            {item.year ? (
              <p className="section-date">{item.year}</p>
            ) : (
              <p className="section-date opacity-50">—</p>
            )}
            <h3 className="mt-1 font-display text-[20px] text-ink">{item.title}</h3>
            <p className="mt-1 max-w-2xl font-garamond text-[16px] leading-relaxed text-ink/65">{item.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function RecentThoughts() {
  const posts = mergeThoughtArchive(defaultBlogPosts, researchNotes);
  const recent = getRecentThoughts(posts, 3);
  const featured = getFeaturedThought(posts);

  return (
    <section className="page-wrap border-t border-line py-8">
      <SectionHead tags={["Notes"]} title="Recent thoughts" href="/thoughts" linkLabel="Thoughts archive →" />
      {recent.length === 0 ? (
        <p className="font-garamond text-[17px] italic text-ink/55">New reflections are being written.</p>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {featured ? (
            <article className="border border-line bg-paperSoft p-4 md:p-5">
              <p className="font-sans text-[11px] uppercase tracking-[0.14em] text-muted">Featured</p>
              <h3 className="mt-3 font-display text-[26px] leading-snug text-ink">
                <Link href={`/notes/${featured.slug}`} className="hover:text-terracotta">
                  {featured.title}
                </Link>
              </h3>
              <p className="mt-2 font-sans text-[12px] text-muted">{formatThoughtDate(featured.date)}</p>
              <p className="mt-4 font-garamond text-[17px] leading-relaxed text-ink/70">
                {getPostExcerpt(featured, 220)}
              </p>
            </article>
          ) : null}
          <ul className="space-y-3">
            {recent.map((post) => {
              const category = BLOG_CATEGORIES[normalizePostCategory(post)];
              return (
                <li key={post.id} className="border-t border-line pt-4">
                  <p className="font-sans text-[11px] uppercase tracking-[0.14em] text-muted">
                    {category?.label} · {formatThoughtDate(post.date)}
                  </p>
                  <Link href={`/notes/${post.slug}`} className="mt-1 block font-display text-[20px] text-ink hover:text-terracotta">
                    {post.title}
                  </Link>
                  <p className="mt-1 font-garamond text-[15px] text-ink/60">{getPostExcerpt(post, 120)}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
}

function TravelPreview() {
  return (
    <section className="page-wrap border-t border-line py-8">
      <SectionHead tags={["Elsewhere"]} title="Travel" href="/travel" linkLabel="Travel notes →" />
      <p className="max-w-3xl font-article text-[18px] leading-[1.62] text-ink/70">{travelPreviewIntro}</p>
      <p className="mt-2">
        <a
          href="https://www.instagram.com/twentiestraverse/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-[14px] font-semibold text-terracottaLight hover:underline"
        >
          @twentiestraverse ↗
        </a>
      </p>
      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {travelPlaces.map((place) => (
          <li key={place.id} className="border-t border-line pt-3">
            <p className="section-date">{place.period}</p>
            <p className="mt-1 font-display text-[20px] text-ink">{place.country}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Contact() {
  const items = [
    { label: "Professional email", href: `mailto:${links.email}`, value: links.email },
    { label: "LinkedIn", href: links.linkedin, value: "mayeshamalihaproma" },
    { label: "GitHub", href: links.github, value: "pro-mayesha" },
    { label: "Google Scholar", href: links.googleScholar, value: "Academic profile" },
    { label: "AbroadMates", href: links.abroadMates, value: "abroadmates.com" },
    { label: "ApplicationMate", href: links.applicationMate, value: "applicationmate.com" },
    { label: "The Abroad Company", href: links.abroadCompany, value: "abroad.company" },
    { label: "CV / academic profile", href: "/academic", value: "View academic page" },
  ];

  return (
    <section id="contact" className="page-wrap scroll-mt-24 border-t border-line py-8 pb-2">
      <SectionHead tags={["Reach"]} title="Contact" />
      <p className="max-w-2xl font-garamond text-[17px] text-ink/70">
        How to reach Mayesha.
      </p>
      <ul className="mt-5 divide-y divide-line border-y border-line">
        {items.map((item) => (
          <li key={item.label} className="grid gap-1 py-2 sm:grid-cols-[200px_1fr]">
            <span className="font-sans text-[12px] uppercase tracking-[0.12em] text-muted">{item.label}</span>
            {item.href.startsWith("/") ? (
              <Link href={item.href} className="text-[16px] text-ink hover:text-terracotta">
                {item.value}
              </Link>
            ) : (
              <a
                href={item.href}
                className="text-[16px] text-ink hover:text-terracotta"
                {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {item.value}
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <CurrentChapter />
      <SelectedWork />
      <PeopleAndSystems />
      <JourneyPreview />
      <RecentThoughts />
      <TravelPreview />
      <Contact />
    </>
  );
}
