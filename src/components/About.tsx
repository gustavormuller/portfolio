import { initTranslations } from "../i18n";
import { Locale } from "../lib/PropsWithLocale";

async function About({ locale }: Locale) {
  const { t } = await initTranslations(locale, "default");

  return (
    <section className="text-gray-100 px-72 py-40 font-monospace flex flex-col">
      <h2 className="text-4xl border-b-[#1a1db3] border-b-[2px] pb-1.5">
        {t("about-title")}
      </h2>
      <p></p>
    </section>
  );
}

export default About;
