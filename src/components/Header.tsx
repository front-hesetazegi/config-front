import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

const Header = async () => {
  const client = createClient();
  const settingsData = await client.getSingle("settings");

  return (
    <>
      <header>header: {settingsData.data.site_title}</header>
      <nav>
        <ul>
          {settingsData.data.navigation.map(({ label, link }) => (
            <li key={label}>
              Link: {" "}<PrismicNextLink field={link}>{label}</PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export { Header };
