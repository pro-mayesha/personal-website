import { Caveat, EB_Garamond } from "next/font/google";
import { SiteLayout } from "@/components/SiteLayout";
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

export const metadata = {
  title: "Mayesha Maliha Proma",
  description:
    "Proma — Founder, AI researcher, and builder of student-first study abroad tools.",
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
