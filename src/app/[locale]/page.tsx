import TranslationsProvider from "@/src/components/TranslationsProvider";
import PropsWithLocale from "@/src/lib/PropsWithLocale";
import { i18nNamespaces, initTranslations } from "@/src/i18n";

export default async function Home({ params: { locale } }: PropsWithLocale) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <main>
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}
      >
        <h1>{t("hello")}</h1>
      </TranslationsProvider>
    </main>
  );
}
