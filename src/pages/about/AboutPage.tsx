import { useTranslation } from 'react-i18next'
import './AboutPage.css'

function AboutPage() {
  const { t } = useTranslation()

  return (
    <div className="about-page">
      <header className="about-page__hero" aria-labelledby="about-title">
        <p className="about-page__eyebrow">{t('about.eyebrow')}</p>
        <h1 id="about-title" className="about-page__title">
          {t('about.title')}
        </h1>
        <p className="about-page__lead">{t('about.lead')}</p>
      </header>

      <main className="about-page__content" aria-label={t('about.mainAriaLabel')}>
        <section className="about-card">
          <h2 className="about-card__title">{t('about.goalTitle')}</h2>
          <p className="about-card__text">{t('about.goalText')}</p>
        </section>

        <section className="about-card">
          <h2 className="about-card__title">{t('about.processTitle')}</h2>
          <ul className="about-list">
            <li className="about-list__item">{t('about.processItem1')}</li>
            <li className="about-list__item">{t('about.processItem2')}</li>
            <li className="about-list__item">{t('about.processItem3')}</li>
          </ul>
        </section>

        <section className="about-card">
          <h2 className="about-card__title">{t('about.trainTitle')}</h2>
          <p className="about-card__text">{t('about.trainText')}</p>
        </section>
      </main>
    </div>
  )
}

export default AboutPage
