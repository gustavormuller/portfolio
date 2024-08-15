import TranslationsProvider from "@/src/components/TranslationsProvider";
import PropsWithLocale from "@/src/lib/PropsWithLocale";
import { i18nNamespaces, initTranslations } from "@/src/i18n";
import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";

export default async function Home({ params: { locale } }: PropsWithLocale) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <main className="bg-[#111]">
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}
      >
        <Header />
        <Hero locale={locale} />
        <About locale={locale} />
      </TranslationsProvider>
    </main>
  );
}
