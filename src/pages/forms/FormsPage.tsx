import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { formExperimentPath } from './formRoutes'
import './FormsPage.css'

function FormsPage() {
  const { t } = useTranslation()

  return (
    <div className="forms-page">
      <header className="forms-page__bar">
        <Link className="forms-page__back" to="/">
          {t('formsHub.backHome')}
        </Link>
      </header>

      <header className="forms-page__hero" aria-labelledby="forms-title">
        <p className="forms-page__eyebrow">{t('formsHub.eyebrow')}</p>
        <h1 id="forms-title" className="forms-page__title">
          {t('formsHub.title')}
        </h1>
        <p className="forms-page__lead">{t('formsHub.lead')}</p>
      </header>

      <main className="forms-page__grid" aria-label={t('formsHub.gridAriaLabel')}>
        <Link className="forms-slot forms-slot--link" to={formExperimentPath('rhf')} aria-labelledby="slot-rhf">
          <div className="forms-slot__head">
            <span className="forms-slot__badge">1</span>
            <h2 id="slot-rhf" className="forms-slot__title">
              {t('formsHub.slotRhfTitle')}
            </h2>
          </div>
          <p className="forms-slot__hint">{t('formsHub.slotRhfHint')}</p>
          <div className="forms-slot__canvas" aria-hidden="true" />
        </Link>

        <Link
          className="forms-slot forms-slot--link"
          to={formExperimentPath('formik')}
          aria-labelledby="slot-formik"
        >
          <div className="forms-slot__head">
            <span className="forms-slot__badge">2</span>
            <h2 id="slot-formik" className="forms-slot__title">
              {t('formsHub.slotFormikTitle')}
            </h2>
          </div>
          <p className="forms-slot__hint">{t('formsHub.slotFormikHint')}</p>
          <div className="forms-slot__canvas" aria-hidden="true" />
        </Link>

        <Link
          className="forms-slot forms-slot--link forms-slot--wide"
          to={formExperimentPath('native')}
          aria-labelledby="slot-native"
        >
          <div className="forms-slot__head">
            <span className="forms-slot__badge">3</span>
            <h2 id="slot-native" className="forms-slot__title">
              {t('formsHub.slotNativeTitle')}
            </h2>
          </div>
          <p className="forms-slot__hint">{t('formsHub.slotNativeHint')}</p>
          <div className="forms-slot__canvas forms-slot__canvas--wide" aria-hidden="true" />
        </Link>
      </main>
    </div>
  )
}

export default FormsPage
