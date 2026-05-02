import { Link } from 'react-router-dom'
import { formExperimentPath } from './formRoutes'
import './FormsPage.css'

function FormsPage() {
  return (
    <div className="forms-page">
      <header className="forms-page__bar">
        <Link className="forms-page__back" to="/">
          ← На главную
        </Link>
      </header>

      <header className="forms-page__hero" aria-labelledby="forms-title">
        <p className="forms-page__eyebrow">Forms playground</p>
        <h1 id="forms-title" className="forms-page__title">
          Формы
        </h1>
        <p className="forms-page__lead">
          Здесь можно сравнить react-hook-form, Formik и подход без библиотеки. Ниже — три зоны под
          ваши эксперименты.
        </p>
      </header>

      <main className="forms-page__grid" aria-label="Зоны для форм">
        <Link className="forms-slot forms-slot--link" to={formExperimentPath('rhf')} aria-labelledby="slot-rhf">
          <div className="forms-slot__head">
            <span className="forms-slot__badge">1</span>
            <h2 id="slot-rhf" className="forms-slot__title">
              React Hook Form
            </h2>
          </div>
          <p className="forms-slot__hint">Место под вашу форму.</p>
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
              Formik
            </h2>
          </div>
          <p className="forms-slot__hint">Место под вашу форму.</p>
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
              Без библиотеки
            </h2>
          </div>
          <p className="forms-slot__hint">Место под контролируемую форму на React.</p>
          <div className="forms-slot__canvas forms-slot__canvas--wide" aria-hidden="true" />
        </Link>
      </main>
    </div>
  )
}

export default FormsPage
