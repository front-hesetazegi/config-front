type RootParams = { lang: "en-us" | "fa"; id: string };
type Messages = typeof import("../i18n/messages/en.json");
declare interface IntlMessages extends Messages {}
