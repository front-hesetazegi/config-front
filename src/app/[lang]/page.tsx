import { SliceZone } from "@prismicio/react";
import { Metadata } from "next";
import Link from "next/link";
import { createClient } from "prismicio";
import { components } from "slices";

// import { getLocales } from "@/lib/getLocales";

/**
 * @returns {Promise<import("next").Metadata>}
 */
export async function generateMetadata({
  params: { lang },
}: Props): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage", { lang });

  return {
    title: page.data.title,
  };
}

type Props = {
  params: { lang: string };
};

export default async function Page({ params: { lang } }: Props) {
  const client = createClient();

  const page = await client.getSingle("homepage", { lang });

  return (
    <>
      <Link href={"/about-us"} lang="en-us" locale="en-us">
        <div className="bg-redAlert-400">go for the english website</div>
      </Link>
      <br />
      <Link
        href={`${lang}/about-us`}
        lang="fa-ir"
        locale="fa-ir"
        className="bg-green-300 w-full"
      >
        <div className="bg-green-300">به سوی سایت فارسی حرکت کنیم</div>
      </Link>
      <br />
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}
