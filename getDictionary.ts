const dictionaries: {
  enUs: () => Promise<{
    form: {
      name: string;
      email: string;
      city: string;
    };
  }>;
  faIr: () => Promise<{
    form: {
      name: string;
      email: string;
      city: string;
    };
  }>;
} = {
  enUs: () => import("./dictionaries/en-us.json").then((r) => r.default),
  faIr: () => import("./dictionaries/fa-ir.json").then((r) => r.default),
};

export const getDictionary = async (locale: "enUs" | "faIr") =>
  dictionaries[locale]();
