import { useContext } from 'react'
import './ThemeToggleButton.css'
import { ThemeContext } from '../contexts/theme-context'

/** Тема в DOM задаётся через `ThemeProvider` (`html[data-theme]`); стили — в `index.css`. */
export function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label="Переключить тему оформления"
      title="Светлая или тёмная тема"
      aria-pressed={theme === 'dark'}
      onClick={() => toggleTheme()}
    >
      <span className="theme-toggle__icons" aria-hidden="true">
        <span className="theme-toggle__icon-slot theme-toggle__icon-slot--sun">
          <svg className="theme-toggle__sun" viewBox="0 0 24 24" width="18" height="18" fill="none">
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
            <path
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
            />
          </svg>
        </span>
        <span className="theme-toggle__icon-slot theme-toggle__icon-slot--moon">
          <svg className="theme-toggle__moon" viewBox="0 0 24 24" width="18" height="18" fill="none">
            <path
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
            />
          </svg>
        </span>
      </span>

      <span className="theme-toggle__label" aria-hidden="true">
        <span className="theme-toggle__mode theme-toggle__mode--light">Светлая</span>
        <span className="theme-toggle__mode theme-toggle__mode--dark">Тёмная</span>
      </span>
    </button>
  )
}
