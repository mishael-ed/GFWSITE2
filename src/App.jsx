import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import SanctuaryPage from './SanctuaryPage'
import InitiativesPage from './InitiativesPage'
import EducationPage from './EducationPage'
import AboutPage from './AboutPage'
import AboutLandingPage from './AboutLandingPage'
import DirectorPage from './DirectorPage'
import PortfolioPage from './PortfolioPage'
import CustomCursor from './CustomCursor'

function App() {
  return (
    <>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sanctuary" element={<SanctuaryPage />} />
        <Route path="/initiatives" element={<InitiativesPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/about" element={<AboutLandingPage />} />
        <Route path="/about/organization" element={<AboutPage />} />
        <Route path="/about/director" element={<DirectorPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </>
  )
}

export default App
