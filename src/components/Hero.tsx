import React from "react";
import { Locale } from "../lib/PropsWithLocale";
import { initTranslations } from "../i18n";
import WebDevSVG from "./SVGicons/WebDevSVG";
import Hyperplexed from "./WritingWords";
import Image from "next/image";
import profilePic from "@/public";

async function Hero({ locale }: Locale) {
  const { t } = await initTranslations(locale, "default");

  return (
    <section className="text-gray-100 px-64 py-36 font-monospace">
      <div className="flex justify-between items-end">
        <div className="pb-3">
          <h1 className="text-5xl">{t("hero-title")}</h1>
          <Hyperplexed />
          <p className="text-[22px] max-w-[710px] pt-5">{t("hero-p")}</p>
        </div>
        <div className="">
          <Image src={profilePic} className="rounded-full border-b-[7px] border-b-[#1a1db3] w-[420px]" alt="Foto" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
