export const i18n = {
  defaultLocale: "fa",
  locales: ["en", "fa"],
} as const;

export const prismicLang = (lang: string) => {
  return lang === "fa" ? "fa-ir" : "en-us";
};

export type Locale = (typeof i18n)["locales"][number];
