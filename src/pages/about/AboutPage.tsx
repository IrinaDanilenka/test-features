import './AboutPage.css'

function AboutPage() {
  return (
    <div className="about-page">
      <header className="about-page__hero" aria-labelledby="about-title">
        <p className="about-page__eyebrow">About project</p>
        <h1 id="about-title" className="about-page__title">
          Feature Tests Laboratory
        </h1>
        <p className="about-page__lead">
          Этот проект создан как личная песочница для изучения новых подходов, библиотек и
          архитектурных техник в React. Каждая фича реализуется изолированно на отдельной странице,
          чтобы удобно сравнивать решения и накапливать практику.
        </p>
      </header>

      <main className="about-page__content" aria-label="Информация о проекте">
        <section className="about-card">
          <h2 className="about-card__title">Цель проекта</h2>
          <p className="about-card__text">
            Развивать насмотренность и инженерные навыки через маленькие, понятные эксперименты:
            от вёрстки и анимаций до оптимизации производительности и работы с данными.
          </p>
        </section>

        <section className="about-card">
          <h2 className="about-card__title">Как устроена работа</h2>
          <ul className="about-list">
            <li className="about-list__item">Одна страница — одна техника или библиотека.</li>
            <li className="about-list__item">Эксперименты делаются независимо друг от друга.</li>
            <li className="about-list__item">
              После теста можно зафиксировать выводы и оставить рабочий пример.
            </li>
          </ul>
        </section>

        <section className="about-card">
          <h2 className="about-card__title">Что можно тренировать</h2>
          <p className="about-card__text">
            Virtualization (`react-window`), infinite loading, состояние и кеширование, формы,
            доступность, анимации, паттерны компонентного дизайна и любые другие идеи, которые
            хочется проверить на практике.
          </p>
        </section>
      </main>
    </div>
  )
}

export default AboutPage
