/**
 * Parse a Medium RSS XML string into article card fields.
 * Does not return full article bodies — only metadata + short excerpt.
 */

function stripTags(html = "") {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeEntities(text = "") {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function firstMatch(source, pattern) {
  const match = source.match(pattern);
  return match ? match[1] : "";
}

function allMatches(source, pattern) {
  return [...source.matchAll(pattern)].map((m) => m[1]);
}

function cdataOrText(value) {
  const cdata = value.match(/<!\[CDATA\[([\s\S]*?)\]\]>/);
  return decodeEntities((cdata ? cdata[1] : value).trim());
}

function extractSubtitle(bodyHtml) {
  const em = bodyHtml.match(/<p>\s*<em>([\s\S]*?)<\/em>\s*<\/p>/i);
  if (!em) return "";
  return stripTags(em[1]);
}

function toIsoDate(pubDate) {
  const d = new Date(pubDate);
  if (Number.isNaN(d.getTime())) return "";
  return d.toISOString().slice(0, 10);
}

function readingMinutes(text) {
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, roundWords(words));
}

function roundWords(words) {
  return Math.round(words / 220) || 1;
}

function excerptFrom(text, subtitle) {
  let body = text;
  if (subtitle && body.startsWith(subtitle)) {
    body = body.slice(subtitle.length).trim();
  }
  if (body.length <= 220) return body;
  const cut = body.slice(0, 220);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 140 ? cut.slice(0, lastSpace) : cut).trim()}…`;
}

export function parseMediumFeed(xml) {
  if (!xml || typeof xml !== "string") return [];

  const items = allMatches(xml, /<item>([\s\S]*?)<\/item>/g);
  return items
    .map((item) => {
      const titleRaw = firstMatch(item, /<title>([\s\S]*?)<\/title>/);
      const linkRaw = firstMatch(item, /<link>([\s\S]*?)<\/link>/);
      const pubDate = firstMatch(item, /<pubDate>([\s\S]*?)<\/pubDate>/);
      const contentRaw =
        firstMatch(item, /<content:encoded>([\s\S]*?)<\/content:encoded>/) ||
        firstMatch(item, /<description>([\s\S]*?)<\/description>/);
      const categories = allMatches(item, /<category>([\s\S]*?)<\/category>/g).map(cdataOrText);

      const title = cdataOrText(titleRaw);
      const url = cdataOrText(linkRaw).split("?")[0];
      const bodyHtml = cdataOrText(contentRaw);
      const subtitle = extractSubtitle(bodyHtml);
      const plain = stripTags(bodyHtml);
      const excerpt = excerptFrom(plain, subtitle);
      const tags = categories.slice(0, 4).map((tag) => tag.replace(/-/g, " "));

      if (!title || !url) return null;

      return {
        title,
        subtitle,
        url,
        date: toIsoDate(pubDate),
        readingMinutes: readingMinutes(plain),
        excerpt,
        tags,
      };
    })
    .filter(Boolean);
}
