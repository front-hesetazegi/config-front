import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { i18n } from "../i18n.config";

import { match as matchLocale } from "@formatjs/intl-localematcher";

async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales: string[] = ["fa", "en"];

  // const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  // const preferredLanguages = [...languages, "fa-ir"]; // Add 'fa' for Persian (Farsi) language

  const locale = matchLocale(locales, locales, i18n.defaultLocale);

  return locale;
}

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  console.log("cookie token is", token);

  // for handling authentication
  //   0. user wants to visit a private route
  // 1. we check user cookies for token key
  // 2. if the user didn't have the key we redirect it to login page
  // 3. if the user had the key we send a request and we check the response
  // 4. if true we redirect to private url
  // 5. if false we redirect to login page

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
