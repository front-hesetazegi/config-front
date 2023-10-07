import 'server-only'
import type { Locale } from './i18n.config'

const dictionaries = {
  "en-us": () => import('./dictionaries/en-us.json').then(module => module.default),
  "fa-ir": () => import('./dictionaries/fa-ir.json').then(module => module.default)
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()