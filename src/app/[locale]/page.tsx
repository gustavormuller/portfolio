import TranslationsProvider from "@/src/components/TranslationsProvider";
import PropsWithLocale from "@/src/lib/PropsWithLocale";
import { i18nNamespaces, initTranslations } from "@/src/i18n";
import Header from "@/src/components/Header";

export default async function Home({ params: { locale } }: PropsWithLocale) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <main>
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}
      >
        <Header />
        <h1 className="font-mono">AAAAAAAAAAAAAAAA</h1>
      </TranslationsProvider>
    </main>
  );
}
