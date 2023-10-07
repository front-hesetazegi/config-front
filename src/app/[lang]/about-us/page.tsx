import { SliceZone } from "@prismicio/react";
import { Metadata } from "next";

import { createClient } from "prismicio";
import { components } from "slices";
import { getDictionary } from "../../../../getDictionary";
import { prismicLang } from "../../../../i18n.config";

type Props = {
  params: { lang: string };
};

export default async function Page({ params: { lang } }: Props) {
  const language = await getDictionary(lang as "fa" | "en");
  const client = createClient();
  const page = await client.getSingle("about_us", { lang: prismicLang(lang) });

  return (
    <>
      <h1 className="font-extrabold">{language.form.name}</h1>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}

export async function generateMetadata({
  params: { lang },
}: Props): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("about_us", {
    lang: prismicLang(lang),
  });

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
