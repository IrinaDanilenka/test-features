import { Link } from 'react-router-dom'
import './NotFoundPage.css'

function NotFoundPage() {
  return (
    <main className="not-found-page" aria-labelledby="not-found-title">
      <div className="not-found-page__card">
        <p className="not-found-page__code">404</p>
        <h1 id="not-found-title" className="not-found-page__title">
          Страница не найдена
        </h1>
        <p className="not-found-page__text">
          Возможно, ссылка устарела или была введена с ошибкой. Вернитесь на главную и попробуйте
          снова.
        </p>
        <Link className="not-found-page__link" to="/">
          На главную
        </Link>
      </div>
    </main>
  )
}

export default NotFoundPage
