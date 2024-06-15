import { type Resource, createInstance } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import resourcesToBackend from "i18next-resources-to-backend";
import i18nConfig from "../../i18n.config";
import { stringLiteralArray } from "../lib/utils";

export const i18nNamespaces = stringLiteralArray([
  "default",
  ...i18nConfig.namespaces,
]);

export type i18nNamespaceName = (typeof i18nNamespaces)[number];

export async function initTranslations(
  locale: string,
  namespaces: i18nNamespaceName[] | i18nNamespaceName,
  i18nInstance = createInstance(),
  resources?: Resource
) {
  const defaultNS = Array.isArray(namespaces) ? namespaces[0] : namespaces;

  i18nInstance.use(initReactI18next);

  if (!resources) {
    i18nInstance.use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`@/src/i18n/locales/${language}/${namespace}.json`)
      )
    );
  }

  await i18nInstance.init({
    lng: locale,
    resources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: defaultNS,
    fallbackNS: defaultNS,
    ns: Array.isArray(namespaces) ? namespaces : [namespaces],
    preload: resources ? [] : i18nConfig.locales,
  });

  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
    t: i18nInstance.t,
  };
}
