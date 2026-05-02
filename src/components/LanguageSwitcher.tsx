import { useTranslation } from 'react-i18next'
import { I18N_STORAGE_KEY } from '../i18n'
import './LanguageSwitcher.css'

const LANGUAGES = [
  { code: 'ru' as const, labelKey: 'language.ru' as const },
  { code: 'en' as const, labelKey: 'language.en' as const },
]

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation()
  const value = i18n.resolvedLanguage?.startsWith('en') ? 'en' : 'ru'

  return (
    <div className="language-switcher">
      <label className="language-switcher__label" htmlFor="app-language">
        {t('language.label')}
      </label>
      <select
        id="app-language"
        className="language-switcher__select"
        value={value}
        onChange={event => {
          const lng = event.target.value as 'ru' | 'en'
          void i18n.changeLanguage(lng)
          try {
            localStorage.setItem(I18N_STORAGE_KEY, lng)
          } catch {
            console.error('Failed to save language to localStorage')
          }
        }}
        aria-label={t('language.label')}
      >
        {LANGUAGES.map(({ code, labelKey }) => (
          <option key={code} value={code}>
            {t(labelKey)}
          </option>
        ))}
      </select>
    </div>
  )
}
