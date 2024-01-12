import initTranslations from '../i18n';
import styles from './page.module.css'
import TestClientComponent from '@/components/testClientComponent';

export default async function Home({params: { locale }} : Record<any, any>) {

  const { t } = await initTranslations({locale, namespaces: ['translation']});

  return (
    <main className={styles.main}>
      <h1>{ t('title') }</h1>
      <TestClientComponent />
    </main>
  );
}