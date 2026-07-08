import Link from "next/link";

/**
 * Small reusable link with an optional leading icon.
 * Handles internal (Next Link) vs external (<a>) automatically.
 * Renders nothing for empty/"#" hrefs unless `showDisabled` is set.
 */
export function LinkButton({ href, icon: Icon, children, className = "", showDisabled = false }) {
  const missing = !href || href === "#";

  if (missing && !showDisabled) return null;

  const content = (
    <>
      {Icon ? <Icon size={15} aria-hidden /> : null}
      {children}
    </>
  );

  if (missing) {
    return <span className={`inline-flex items-center gap-2 ${className}`}>{content}</span>;
  }

  const isInternal = href.startsWith("/") || href.startsWith("#");

  if (isInternal) {
    return (
      <Link href={href} className={`inline-flex items-center gap-2 ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 ${className}`}>
      {content}
    </a>
  );
}
