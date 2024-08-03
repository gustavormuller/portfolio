import React from "react";
import { Locale } from "../lib/PropsWithLocale";
import { initTranslations } from "../i18n";
import WebDevSVG from "./SVGicons/WebDevSVG";
import Hyperplexed from "./WritingWords";

async function Hero({ locale }: Locale) {
  const { t } = await initTranslations(locale, "default");

  return (
    <section className="text-gray-200 px-72 py-64 font-monospace">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-5xl mb-1">{t("hero-title")}</h1>
          <Hyperplexed />
        </div>
        <div className="w-48">
          <WebDevSVG />
        </div>
      </div>
      <div>
        <p className="text-xl">{t("hero-p")}</p>
      </div>
    </section>
  );
}

export default Hero;
