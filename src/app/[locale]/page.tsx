import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "prismicio";
import { components } from "slices";
import Layout from "components/Layout";
import { getLocales } from "lib/get-locales";
interface LocalePageProps {
  params: RootParams;
}

export default async function Page({ params }: LocalePageProps) {
  const client = createClient();
  const page = await client.getSingle("homepage", { lang: params.lang });
  const settings = await client.getSingle("settings", { lang: params.lang });
  const locales = await getLocales(page, client);
  return (
    <Layout locales={locales} settings={settings}>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
}

/**
 * @returns {Promise<import("next").Metadata>}
 */
export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage", { lang: params.lang });

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
