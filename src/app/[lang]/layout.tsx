import "styles/globals.css";
import type { Metadata, ResolvingMetadata } from "next";
import localFont from "next/font/local";
import { Footer } from "components/Footer";
import { createClient } from "prismicio";
import { PropsWithChildren } from "react";

type Props = {
  params: { id: string; lang: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const BonyadeKoodakFont = localFont({
  src: "../../assets/fonts/Bonyade-Koodak/woff2/BonyadeKoodakFaNum-VF.woff2",
  display: "swap",
  variable: "--font-BonyadeKoodak",
});

export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
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

export interface LocalePageProps extends PropsWithChildren {
  params: { lang: string };
}

export default function RootLayout({ children, params }: LocalePageProps) {
  const { lang } = params;
  console.log("params is", lang);

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
