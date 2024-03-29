import { createInstance, i18n as i18nType } from "i18next";
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import i18nConfig from "../../i18nConfig";

interface initProps {
    locale: string,
    namespaces: string[],
    i18nInstance?: i18nType,
    resources?: Record<any, any>,    
}

export default async function initTranslations(
    {locale,
    namespaces,
    i18nInstance,
    resources} : initProps
  ) {
    i18nInstance = i18nInstance || createInstance();
  
    i18nInstance.use(initReactI18next);
  
    if (!resources) {
      i18nInstance.use(
        resourcesToBackend(
          (language: string, namespace: string) =>
            import(`../../locales/${language}/${namespace}.json`)
        )
      );
    }

    await i18nInstance.init({
      lng: locale,
      resources,
      fallbackLng: i18nConfig.defaultLocale,
      supportedLngs: i18nConfig.locales,
      defaultNS: i18nConfig.defaultNameSpace,
      fallbackNS: i18nConfig.defaultNameSpace,
      ns: namespaces,
      preload: resources ? [] : i18nConfig.locales
    });

    return {
      i18n: i18nInstance,
      resources: i18nInstance.services.resourceStore.data,
      t: i18nInstance.t
    };
  }