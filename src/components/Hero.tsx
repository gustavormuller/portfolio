import React from "react";
import { Locale } from "../lib/PropsWithLocale";
import { initTranslations } from "../i18n";
import Image from "next/image";
import profilePic from "@/public";
import WritingWords from "./WritingWords";

async function Hero({ locale }: Locale) {
  const { t } = await initTranslations(locale, "default");

  return (
    <section className="text-gray-100 lg:px-12 2xl:px-64 2xl:py-36 lg:py-28 font-monospace">
      <div className="flex justify-between items-end">
        <div className="pb-3">
          <h1 className="2xl:text-5xl lg:text-4xl">{t("hero-title")}</h1>
          <WritingWords />
          <p className="2xl:text-[22px] lg:text-xl max-w-[710px] pt-5">{t("hero-p")}</p>
        </div>
        <div className="">
          <Image src={profilePic} className="rounded-full border-b-[7px] border-b-[#1a1db3] 2xl:w-[420px] lg:w-[360px]" alt="Foto" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
