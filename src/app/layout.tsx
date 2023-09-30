import clsx from "clsx";
import "./globals.css";
import { Nunito, Nunito_Sans } from "next/font/google";
import type { Metadata, ResolvingMetadata } from 'next'
import { createClient } from "@/prismicio";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
});
 
export async function generateMetadata(): Promise<Metadata> {
 const client = createClient();

 const page = await client.getSingle("settings");
 
  return {
    title: page.data.site_title || "Hesetazegi",
    description : page.data.meta_description || "Hesetazegi description" ,
    openGraph: {
      images: [page.data.og_image.url || ""],
    },
  }
}
 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(nunito.variable, nunitoSans.variable)}>
        <header>this is header</header>
        {children}
        <footer>this is footer</footer>
      </body>
    </html>
  );
}
