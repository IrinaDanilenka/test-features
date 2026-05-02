import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import translations from './translations.json'

export const I18N_STORAGE_KEY = 'i18nLng'

function readStoredLanguage(): string | undefined {
  try {
    return localStorage.getItem(I18N_STORAGE_KEY) ?? undefined
  } catch {
    return undefined
  }
}

void i18next.use(initReactI18next).init({
  lng: readStoredLanguage() ?? 'ru',
  fallbackLng: 'ru',
  resources: translations,
  interpolation: { escapeValue: false },
})

export default i18next