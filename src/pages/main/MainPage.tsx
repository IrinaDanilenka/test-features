import { Link } from 'react-router-dom'
import '../../App.css'

type LabEntry = {
  id: string
  emoji: string
  title: string
  description: string
  href?: string
}

const LAB_ENTRIES: LabEntry[] = [
  {
    id: 'react-window',
    emoji: '≣',
    title: 'react-window + infinite loader',
    description: 'Виртуализация длинного списка: react-window и react-window-infinite-loader.',
    href: 'project',
  },
  {
    id: 'forms',
    emoji: '◇',
    title: 'Формы: RHF, Formik, без библиотеки',
    description:
      'Сравнение подходов: react-hook-form, Formik и контролируемые формы на чистом React.',
    href: '/project/forms',
  },
  {
    id: 'data',
    emoji: '◎',
    title: 'Данные и состояние',
    description: 'Запросы, кэш, optimistic UI — сюда можно вынести работу с API.',
  },
  {
    id: 'a11y',
    emoji: '⌘',
    title: 'Доступность',
    description: 'Фокус, aria, клавиатура — отдельная песочница под a11y.',
  },
  {
    id: 'layout',
    emoji: '▦',
    title: 'Вёрстка и сетки',
    description: 'Flex, grid, container queries — пробуйте раскладки в изоляции.',
  },
  {
    id: 'misc',
    emoji: '⁂',
    title: 'Прочее',
    description: 'Свободная карточка под любую идею или библиотеку.',
  },
]

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
              <p className="app__title">Лаборатория фич</p>
              <p className="app__subtitle-small">Тренировка техник и новых библиотек</p>
            </div>
          </a>
        </div>
      </header>

      <main className="app__main">
        <section className="hero" aria-labelledby="hero-heading">
          <p className="hero__eyebrow">Главная</p>
          <h1 id="hero-heading" className="hero__heading">
            Выберите раздел и реализуйте технику на отдельной странице
          </h1>
          <Link className="hero__about-button" to="/about">
            About проекта
          </Link>
        </section>

        <section className="section" aria-labelledby="lab-heading">
          <div className="section__head">
            <h2 id="lab-heading" className="section__title">
              Разделы
            </h2>
          </div>

          <nav aria-label="Разделы лаборатории">
            <ul className="lab-grid">
              {LAB_ENTRIES.map(entry => {
                return (
                  <li key={entry.id}>
                    <Link className="lab-card" to={`/project/${entry.id}`} data-lab={entry.id}>
                      <span className="lab-card__icon" aria-hidden="true">
                        {entry.emoji}
                      </span>
                      <h3 className="lab-card__name">{entry.title}</h3>
                      <p className="lab-card__desc">{entry.description}</p>
                      <span className="lab-card__arrow">
                        Открыть
                        <ArrowIcon />
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </section>
      </main>

      <footer className="app__footer">
        <p className="app__footer-inner">danilenkairina@gmail.com</p>
      </footer>
    </div>
  )
}

export default MainPage
