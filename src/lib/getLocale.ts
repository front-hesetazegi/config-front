// import { PrismicDocument, Client } from '@prismicio/types';

import { Client, PrismicDocument } from "@prismicio/client";

interface PrismicDocumentWithLangName extends PrismicDocument {
  lang_name: string;
}

export async function getLocales(
  doc: PrismicDocument,
  client: Client
): Promise<PrismicDocumentWithLangName[]> {
  const [repository, altDocs] = await Promise.all([
    client.getRepository(),
    doc.alternate_languages.length > 0
      ? client.getAllByIDs(
          doc.alternate_languages.map((altLang) => altLang.id),
          {
            lang: "*",
            // Exclude all fields to speed up the query.
            fetch: `${doc.type}.__nonexistent-field__`,
          }
        )
      : Promise.resolve([]),
  ]);

  return [doc, ...altDocs].map((doc) => {
    const lang = repository.languages.find((lang) => lang.id === doc.lang);
    return {
      ...doc,
      lang_name: lang ? lang.name : "",
    };
  });
}
