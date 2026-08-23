"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/content/site";

function isActive(pathname, href, hash = "") {
  if (href === "/") return pathname === "/";
  const [path, itemHash] = href.split("#");
  if (href === "/#contact") {
    return pathname === "/" && hash === "#contact";
  }
  if (!path || path === "/") return false;
  const onPath = pathname === path || pathname.startsWith(`${path}/`);
  if (!onPath) return false;
  if (itemHash) return hash === `#${itemHash}`;
  if (path === "/academic") return hash !== "#research";
  return true;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash || "");
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (pathname?.startsWith("/admin")) return null;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <div className="page-wrap flex h-14 items-center justify-between">
        <Link
          href="/"
          className="shrink-0 font-sans text-[11px] tracking-[0.04em] text-ink/70 hover:text-ink lg:text-[12px]"
          onClick={() => setOpen(false)}
        >
          {site.brand}
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {site.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap font-sans text-[13px] ${
                isActive(pathname, item.href, hash) ? "font-semibold text-terracotta" : "text-ink/70 hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-11 w-11 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="flex w-[18px] flex-col gap-[5px]" aria-hidden>
            <span className={`h-[1.5px] w-full bg-ink transition ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
            <span className={`h-[1.5px] w-full bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-[1.5px] w-full bg-ink transition ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="fixed inset-x-0 top-14 bottom-0 z-40 overflow-y-auto bg-paper px-5 pb-10 pt-2 lg:hidden"
          aria-label="Primary mobile"
        >
          <div className="mx-auto flex max-w-lg flex-col">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={`border-b border-line py-4 font-display text-[24px] ${
                pathname === "/" && hash !== "#contact" ? "text-terracotta" : "text-ink"
              }`}
            >
              Home
            </Link>
            {site.navItems.map((item) => (
              <Link
                key={`m-${item.href}`}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`border-b border-line py-4 font-display text-[24px] ${
                  isActive(pathname, item.href, hash) ? "text-terracotta" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
