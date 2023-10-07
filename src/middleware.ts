import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { i18n } from "../i18n.config";

import { match as matchLocale } from "@formatjs/intl-localematcher";

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales: string[] = ["fa", "en"];

  // const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  // const preferredLanguages = [...languages, "fa-ir"]; // Add 'fa' for Persian (Farsi) language

  const locale = matchLocale(locales, locales, i18n.defaultLocale);

  return locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(
        `/${locale === "fa" ? "fa" : "en"}${
          pathname.startsWith("/") ? "" : "/"
        }${pathname}`,
        request.url
      )
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
