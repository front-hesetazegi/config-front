import { Footer } from "components/Footer";
import localFont from "next/font/local";
import { createClient } from "prismicio";
import { PropsWithChildren } from "react";
import "styles/globals.css";
import { i18n } from "../../../i18n.config";

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
  return i18n.locales.map((locale) => ({ lang: locale }));
}

// export async function getStaticProps({ params, locale, previewData }: any) {
//   const client = createClient({ previewData });

//   const page = await client.getByUID("settings", params.uid, {
//     lang: locale === "fa" ? "fa-ir" : "en-us",
//   });

//   const locales = await getLocales(page, client);

//   return {
//     props: {
//       page,
//       locales,
//     },
//   };
// }

export interface LocalePageProps extends PropsWithChildren {
  params: { lang: string };
}

export default function RootLayout({ children, params }: LocalePageProps) {
  const { lang } = params;

  return (
    <html dir={lang === "fa" ? "rtl" : "ltr"} lang={lang}>
      <head></head>
      <body className={BonyadeKoodakFont.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
