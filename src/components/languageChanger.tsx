'use client';

import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "../../i18nConfig";

export default function LanguageChanger() {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();

    const handleChange = (e : React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value;

        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = '; expires=' + date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        console.log('test 11', currentLocale)
        console.log('test 22', newLocale)

        if (
            currentLocale === i18nConfig.defaultLocale
          ) {
            router.push('/' + newLocale + currentPathname);
          } else {
            router.push(
              currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
            );
          }
      
          router.refresh();
    };

    return (
        <select onChange={handleChange} value={currentLocale}>
          <option value="en">English</option>
          <option value="ko">Korean</option>
        </select>
      );
}