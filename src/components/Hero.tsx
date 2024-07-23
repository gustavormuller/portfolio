import React from 'react'
import { Locale } from '../lib/PropsWithLocale';
import { initTranslations } from '../i18n';

async function Hero({ locale }: Locale)  {
    const { t } = await initTranslations(locale, "default");

  return (
    <section className='text-white px-48 py-60 font-monospace'>
        <h1 className='text-5xl mb-1'>{t("hero-title")}</h1>
        <p className='text-[42px]'>{t("hero-subtitle")}</p>
    </section>
  )
}

export default Hero