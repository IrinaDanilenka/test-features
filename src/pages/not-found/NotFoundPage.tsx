import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './NotFoundPage.css'

function NotFoundPage() {
  const { t } = useTranslation()

  return (
    <main className="not-found-page" aria-labelledby="not-found-title">
      <div className="not-found-page__card">
        <p className="not-found-page__code">404</p>
        <h1 id="not-found-title" className="not-found-page__title">
          {t('notFound.title')}
        </h1>
        <p className="not-found-page__text">{t('notFound.text')}</p>
        <Link className="not-found-page__link" to="/">
          {t('notFound.backHome')}
        </Link>
      </div>
    </main>
  )
}

export default NotFoundPage
