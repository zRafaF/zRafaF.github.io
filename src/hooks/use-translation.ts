"use client"

import { useLanguage } from "../contexts/language-context"
import { translations, type TranslationKey } from "../translations"

export function useTranslation() {
  const { language } = useLanguage()

  const t = (key: TranslationKey) => {
    return translations[language][key] || translations.en[key]
  }

  return { t, language }
}

