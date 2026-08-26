import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import SanctuaryPage from './SanctuaryPage'
import InitiativesPage from './InitiativesPage'
import EducationPage from './EducationPage'
import AboutPage from './AboutPage'
import AboutLandingPage from './AboutLandingPage'
import DirectorPage from './DirectorPage'
import ContactPage from './ContactPage'
import BlogsPage from './BlogsPage'
import PortfolioPage from './PortfolioPage'
import { WildlifeCampaignPage, ArtivismPage } from './PortfolioDetailPages'
import { RescueRehabilitationPage, ResidentAnimalsPage, WildlifeReleasesPage, SanctuaryVolunteerPage } from './SanctuaryDetailPages'
import { Play4PangolinsPage, InitiativeWildTalesPage } from './InitiativeDetailPages'
import { WildlifeWarriorsPage, NatureSchoolPage, EducationWildTalesPage, FarmToursPage } from './EducationDetailPages'
import CustomCursor from './CustomCursor'
import SiteMotion from './SiteMotion'

function App() {
  return (
    <>
      <CustomCursor />
      <SiteMotion />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sanctuary" element={<SanctuaryPage />} />
        <Route path="/sanctuary/rescue-rehabilitation" element={<RescueRehabilitationPage />} />
        <Route path="/sanctuary/resident-animals" element={<ResidentAnimalsPage />} />
        <Route path="/sanctuary/releases" element={<WildlifeReleasesPage />} />
        <Route path="/sanctuary/volunteer" element={<SanctuaryVolunteerPage />} />
        <Route path="/initiatives" element={<InitiativesPage />} />
        <Route path="/initiatives/play4pangolins" element={<Play4PangolinsPage />} />
        <Route path="/initiatives/artivism-for-conservation" element={<ArtivismPage />} />
        <Route path="/initiatives/wild-tales-and-comics" element={<InitiativeWildTalesPage />} />
        <Route path="/initiatives/nigerian-wildlife-awareness-campaign" element={<WildlifeCampaignPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/education/wildlife-warriors" element={<WildlifeWarriorsPage />} />
        <Route path="/education/nature-school" element={<NatureSchoolPage />} />
        <Route path="/education/wild-tales" element={<EducationWildTalesPage />} />
        <Route path="/education/farm-tours" element={<FarmToursPage />} />
        <Route path="/about" element={<AboutLandingPage />} />
        <Route path="/about/organization" element={<AboutPage />} />
        <Route path="/about/director" element={<DirectorPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/nigerian-wildlife-awareness-campaign" element={<WildlifeCampaignPage />} />
        <Route path="/portfolio/artivism-for-conservation" element={<ArtivismPage />} />
      </Routes>
    </>
  )
}

export default App
