import { PrismicNextLink } from "@prismicio/next";

const Header = ({ locales, settings }) => {
  return (
    <>
      {/* <header>header: {settings.lang}</header> */}
      {/* <nav>
        <ul>
          {settings.data.navigation.map(({ label, link }) => (
            <li key={label}>
              Link: <PrismicNextLink field={link}>{label}</PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav> */}
    </>
  );
};

export { Header };
