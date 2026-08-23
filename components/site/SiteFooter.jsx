import Link from "next/link";
import { links } from "@/lib/content/links";
import { site } from "@/lib/content/site";

const footerLinks = [
  { label: links.email, href: `mailto:${links.email}` },
  { label: "LinkedIn", href: links.linkedin },
  { label: "GitHub", href: links.github },
  { label: "Google Scholar", href: links.googleScholar },
  { label: "Thoughts", href: "/thoughts" },
  { label: "Travel notes", href: "/travel" },
  { label: "twentiestraverse", href: links.instagram },
  { label: "Academic / CV", href: "/academic" },
];

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-line">
      <div className="page-wrap flex flex-col gap-3 py-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-[18px] text-ink">Mayesha Maliha Proma</p>
          <p className="mt-1 max-w-md font-sans text-[13px] leading-relaxed text-ink/55">{site.footerText}</p>
        </div>
        <nav className="flex flex-wrap gap-x-4 gap-y-2 font-sans text-[13px] text-ink/65" aria-label="Footer">
          {footerLinks.map((item) =>
            item.href.startsWith("/") ? (
              <Link key={item.label} href={item.href} className="hover:text-terracotta">
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-terracotta"
                {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {item.label}
              </a>
            )
          )}
        </nav>
      </div>
    </footer>
  );
}
