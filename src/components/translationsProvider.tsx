'use client';

import { I18nextProvider } from 'react-i18next';
import initTranslations from '@/app/i18n';
import { createInstance } from 'i18next';

interface initProps {
    children: React.ReactNode,
    locale: string,
    namespaces: string[],
    resources: Record<any, any>,    
}

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources
} : initProps) {
  const i18n = createInstance();

  initTranslations({locale, namespaces, i18nInstance: i18n, resources});

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}