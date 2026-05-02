import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../../App.css'

const LAB_CARDS = [
  { id: 'react-window', emoji: '≣' },
  { id: 'forms', emoji: '◇' },
  { id: 'data', emoji: '◎' },
  { id: 'a11y', emoji: '⌘' },
  { id: 'layout', emoji: '▦' },
  { id: 'misc', emoji: '⁂' },
] as const

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MainPage() {
  const { t } = useTranslation()

  return (
    <div className="app">
      <div className="app__bg" aria-hidden="true" />

      <header className="app__header">
        <div className="app__header-inner">
          <a className="app__brand" href="/">
            <span className="app__logo" aria-hidden="true">
              L
            </span>
            <div className="app__title-block">
              <p className="app__title">{t('main.title')}</p>
              <p className="app__subtitle-small">{t('main.subtitle')}</p>
            </div>
          </a>
          <span className="app__badge">{t('main.badge')}</span>
        </div>
      </header>

      <main className="app__main">
        <section className="hero" aria-labelledby="hero-heading">
          <p className="hero__eyebrow">{t('main.heroEyebrow')}</p>
          <h1 id="hero-heading" className="hero__heading">
            {t('main.heroHeading')}
          </h1>
          <Link className="hero__about-button" to="/about">
            {t('main.aboutButton')}
          </Link>
        </section>

        <section className="section" aria-labelledby="lab-heading">
          <div className="section__head">
            <h2 id="lab-heading" className="section__title">
              {t('main.sectionsTitle')}
            </h2>
          </div>

          <nav aria-label={t('main.navAriaLabel')}>
            <ul className="lab-grid">
              {LAB_CARDS.map(entry => (
                <li key={entry.id}>
                  <Link className="lab-card" to={`/project/${entry.id}`} data-lab={entry.id}>
                    <span className="lab-card__icon" aria-hidden="true">
                      {entry.emoji}
                    </span>
                    <h3 className="lab-card__name">{t(`main.lab.${entry.id}.title`)}</h3>
                    <p className="lab-card__desc">{t(`main.lab.${entry.id}.description`)}</p>
                    <span className="lab-card__arrow">
                      {t('common.open')}
                      <ArrowIcon />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </main>

      <footer className="app__footer">
        <p className="app__footer-inner">{t('common.footerContact')}</p>
      </footer>
    </div>
  )
}

export default MainPage
