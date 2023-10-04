import { SliceZone } from "@prismicio/react";
import { createClient } from "prismicio";
import { components } from "slices";

// import { getLocales } from "@/lib/getLocales";


/**
 * @returns {Promise<import("next").Metadata>}
 */
export async function generateMetadata({ params: { lang } } : any) {
  const client = createClient();
  const page = await client.getSingle("homepage", { lang });

  return {
    title: page.data.title,
  };
}

export default async function Page({ params: { lang } } : any) {
  const client = createClient();

  const page = await client.getSingle("homepage", { lang });


  return (
      <SliceZone slices={page.data.slices} components={components} />
  );
}