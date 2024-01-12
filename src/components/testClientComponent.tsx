'use client'

import { useTranslation } from "react-i18next"

export default function TestClientComponent() {
    const { t } = useTranslation();
    return <p>{ t('message') }</p>
}