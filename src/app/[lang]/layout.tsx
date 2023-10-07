import "styles/globals.css";
import localFont from "next/font/local";
import { Footer } from "components/Footer";
import { createClient } from "prismicio";
import { PropsWithChildren } from "react";
import { Locale, i18n } from '../../../i18n.config'

const BonyadeKoodakFont = localFont({
  src: "../../assets/fonts/Bonyade-Koodak/woff2/BonyadeKoodakFaNum-VF.woff2",
  display: "swap",
  variable: "--font-BonyadeKoodak",
});

export async function generateMetadata() {
  const client = createClient();
  const page = await client.getSingle("settings");
  return {
    title: page.data.site_title || "Hesetazegi",
    description: page.data.meta_description || "Hesetazegi description",
    openGraph: {
      images: [page.data.og_image.url || ""],
    },
  };
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export interface LocalePageProps extends PropsWithChildren {
  params: { lang: string };
}

export default function RootLayout({ children, params }: LocalePageProps) {
  const { lang } = params;

  return (
    <html
      dir={lang === "fa-ir" ? "rtl" : "ltr"}
      lang={lang === "fa-ir" ? "fa" : "en"}
    >
      <head></head>
      <body className={BonyadeKoodakFont.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
