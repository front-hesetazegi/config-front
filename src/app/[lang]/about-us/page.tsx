import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "prismicio";
import { components } from "slices";
import { getDictionary } from "../../../../getDictionary";


type Props = {
  params: { lang: string };
};

export default async function Page({ params: { lang } }: Props) {
  const language = await getDictionary(lang as "fa-ir" | "en-us");
  const client = createClient();
  const page = await client.getSingle("about_us", { lang });


  return <>
  <h1 className="font-extrabold">
    {language.form.name}
  </h1>
  <SliceZone slices={page.data.slices} components={components} />
  </>;
}

export async function generateMetadata({
  params: { lang },
}: Props): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("about_us", { lang });

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
