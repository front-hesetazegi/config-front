import "styles/globals.css";
import type { Metadata, ResolvingMetadata } from "next";
import localFont from "next/font/local";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { createClient } from "prismicio";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};


// const BonyadeKoodakFont = localFont({
//   src: [
//     {
//       path: "../assets/fonts/Bonyade-Koodak/woff2/BonyadeKoodakFaNum-VF.woff2",
//       weight: "400",
//       style: "normal",
//     },
//   ],
//   display: "swap",
//   variable: "--font-BonyadeKoodak",
// });

const BonyadeKoodakFont = localFont({
  src: '../assets/fonts/Bonyade-Koodak/woff2/BonyadeKoodakFaNum-VF.woff2',
  display: "swap",
  variable: '--font-BonyadeKoodak',
})

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body className={BonyadeKoodakFont.variable}>
        <Header locales={undefined} settings={undefined} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
