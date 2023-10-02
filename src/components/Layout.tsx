import { Header } from "./Header";
import { Footer } from "./Footer";

import React from "react";
import { SettingsDocument } from "../../prismicio-types";

type Props = {
  locales: any[];
  settings: SettingsDocument<string>;
};

const Layout: React.FC<Props> = ({ locales, settings, children }) => {
  return (
    <div className="text-slate-800">
      <Header locales={locales} settings={settings} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
