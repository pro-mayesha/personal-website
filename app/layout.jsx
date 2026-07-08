import { Caveat, EB_Garamond } from "next/font/google";
import { SiteLayout } from "@/components/SiteLayout";
import { site } from "@/lib/content/site";
import "./globals.css";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-caveat",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-garamond",
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
    <html lang="en" className={`${caveat.variable} ${garamond.variable}`}>
      <body className="font-garamond antialiased">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
