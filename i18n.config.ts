export const i18n = {
  defaultLocale: 'fa-ir',
  locales: ['en-us', 'fa-ir']
} as const

export type Locale = (typeof i18n)['locales'][number]