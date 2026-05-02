import { Route, Routes } from 'react-router-dom'
import { ThemeToggleButton } from './components/ThemeToggleButton'
import MainPage from './pages/main/MainPage'
import LongListPage from './pages/long-list/LongListPage'
import NotFoundPage from './pages/not-found/NotFoundPage'
import AboutPage from './pages/about/AboutPage'
import FormsPage from './pages/forms/FormsPage'
import FormsRhfPage from './pages/forms/FormsRhfPage'
import FormsFormikPage from './pages/forms/FormsFormikPage'
import FormsNativePage from './pages/forms/FormsNativePage'
import { ThemeProvider } from './contexts/ThemeProvider'

function App() {
  return (
    <>
      <ThemeProvider>
        <ThemeToggleButton />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/project/react-window" element={<LongListPage />} />
          <Route path="/project/forms" element={<FormsPage />} />
          <Route path="/project/forms/rhf" element={<FormsRhfPage />} />
          <Route path="/project/forms/formik" element={<FormsFormikPage />} />
          <Route path="/project/forms/native" element={<FormsNativePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
