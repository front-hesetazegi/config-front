import "server-only";
import type { Locale } from "./i18n.config";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  fa: () => import("./dictionaries/fa.json").then((module) => module.default),
};

export const prismicLang = (lang: string) => {
  return lang === "fa" ? "fa-ir" : "en-us";
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
