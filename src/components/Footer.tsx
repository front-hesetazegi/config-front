import { createClient } from "prismicio";

const Footer = async () => {
  const settings = createClient();
  const settingsData = await settings.getSingle("settings");

  return (
    <>
      <footer>footer: {settingsData.data.meta_description}</footer>
    </>
  );
};

export { Footer };
