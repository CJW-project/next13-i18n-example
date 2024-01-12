import initTranslations from '../i18n';
import styles from './page.module.css'
import TestClientComponent from '@/components/testClientComponent';
import TranslationsProvider from '@/components/translationsProvider';
import LanguageChanger from '@/components/languageChanger';

export default async function Home({params: { locale }} : Record<any, any>) {

  const i18nNamespaces = ['translation']

  const { t, resources } = await initTranslations({locale, namespaces: i18nNamespaces});

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main className={styles.main}>
        <h1>{t('title')}</h1>
        <TestClientComponent />
        <LanguageChanger/>
      </main>
    </TranslationsProvider>
  );
}