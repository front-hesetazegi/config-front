import {
  KeyValuePair,
  RecursiveKeyValuePair,
  ResolvableTo,
} from "tailwindcss/types/config";

export type ValuesType = ResolvableTo<RecursiveKeyValuePair<string, string>> | undefined;
export type BorderRadiusType =  ResolvableTo<KeyValuePair<string, string>> | undefined

export type TypographyType = ResolvableTo<
  KeyValuePair<
    string,
    | string
    | [fontSize: string, lineHeight: string]
    | [
        fontSize: string,
        configuration: Partial<{
          lineHeight: string;
          letterSpacing: string;
          fontWeight: string | number;
        }>
      ]
  >
>;
