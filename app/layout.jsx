import { EB_Garamond, Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { SiteLayout } from "@/components/SiteLayout";
import { site } from "@/lib/content/site";
import "./globals.css";

const display = EB_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-garamond",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const article = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-article",
});

const siteName = site.siteName || "Personal website";
const defaultTitle = site.defaultTitle || siteName;
const defaultDescription = site.defaultDescription || "";
const ogImages = site.ogImage ? [{ url: site.ogImage }] : undefined;

export const metadata = {
  ...(site.siteUrl ? { metadataBase: new URL(site.siteUrl) } : {}),
  title: {
    default: defaultTitle,
    template: `%s · ${siteName}`,
  },
  description: defaultDescription,
  openGraph: {
    type: "website",
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    ...(site.siteUrl ? { url: site.siteUrl } : {}),
    ...(ogImages ? { images: ogImages } : {}),
  },
  twitter: {
    card: ogImages ? "summary_large_image" : "summary",
    title: defaultTitle,
    description: defaultDescription,
    ...(ogImages ? { images: ogImages } : {}),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${garamond.variable} ${sans.variable} ${article.variable}`}>
      <body className="bg-paper font-garamond text-ink antialiased">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
