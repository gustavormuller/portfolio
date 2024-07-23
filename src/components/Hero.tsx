import React from "react";
import { Locale } from "../lib/PropsWithLocale";
import { initTranslations } from "../i18n";
import WebDevSVG from "./SVGicons/WebDevSVG";
import Hyperplexed from "./WritingWords";

async function Hero({ locale }: Locale) {
  const { t } = await initTranslations(locale, "default");

  return (
    <section className="text-white px-60 py-72 font-monospace flex items-center justify-between">
      <div>
        <h1 className="text-5xl mb-1">{t("hero-title")}</h1>
        <Hyperplexed />
      </div>
      <div className="w-48">
        <WebDevSVG />
      </div>
    </section>
  );
}

export default Hero;
