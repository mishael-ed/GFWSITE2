import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
const Home = lazy(() => import('./Home'))
const SanctuaryPage = lazy(() => import('./SanctuaryPage'))
const InitiativesPage = lazy(() => import('./InitiativesPage'))
const EducationPage = lazy(() => import('./EducationPage'))
const EventsPage = lazy(() => import('./EventsPage'))
const EventsDetailPage = lazy(() => import('./EventsDetailPage'))
const EventsCalendarPage = lazy(() => import('./EventsCalendarPage'))
const AboutPage = lazy(() => import('./AboutPage'))
const AboutLandingPage = lazy(() => import('./AboutLandingPage'))
const DirectorPage = lazy(() => import('./DirectorPage'))
const ContactPage = lazy(() => import('./ContactPage'))
const BlogsPage = lazy(() => import('./BlogsPage'))
const BlogVisitPage = lazy(() => import('./BlogVisitPage'))
const SeaTurtleStoriesPage = lazy(() => import('./SeaTurtleStoriesPage'))
const PortfolioPage = lazy(() => import('./PortfolioPage'))
const SupportUsPage = lazy(() => import('./SupportUsPage'))
const DonatePage = lazy(() => import('./SupportDetailPages').then((m) => ({ default: m.DonatePage })))
const MembershipPage = lazy(() => import('./SupportDetailPages').then((m) => ({ default: m.MembershipPage })))
const InternationalDonationPage = lazy(() => import('./SupportDetailPages').then((m) => ({ default: m.InternationalDonationPage })))
const PatronPage = lazy(() => import('./SupportDetailPages').then((m) => ({ default: m.PatronPage })))
const BusinessPartnershipPage = lazy(() => import('./SupportDetailPages').then((m) => ({ default: m.BusinessPartnershipPage })))
const WildlifeCampaignPage = lazy(() => import('./PortfolioDetailPages').then((m) => ({ default: m.WildlifeCampaignPage })))
const ArtivismPage = lazy(() => import('./PortfolioDetailPages').then((m) => ({ default: m.ArtivismPage })))
const RescueRehabilitationPage = lazy(() => import('./SanctuaryDetailPages').then((m) => ({ default: m.RescueRehabilitationPage })))
const ResidentAnimalsPage = lazy(() => import('./SanctuaryDetailPages').then((m) => ({ default: m.ResidentAnimalsPage })))
const WildlifeReleasesPage = lazy(() => import('./SanctuaryDetailPages').then((m) => ({ default: m.WildlifeReleasesPage })))
const SanctuaryVolunteerPage = lazy(() => import('./SanctuaryDetailPages').then((m) => ({ default: m.SanctuaryVolunteerPage })))
const TurtleBaePage = lazy(() => import('./SanctuaryDetailPages').then((m) => ({ default: m.TurtleBaePage })))
const Play4PangolinsPage = lazy(() => import('./InitiativeDetailPages').then((m) => ({ default: m.Play4PangolinsPage })))
const InitiativeWildTalesPage = lazy(() => import('./InitiativeDetailPages').then((m) => ({ default: m.InitiativeWildTalesPage })))
const WildlifeWarriorsPage = lazy(() => import('./EducationDetailPages').then((m) => ({ default: m.WildlifeWarriorsPage })))
const NatureSchoolPage = lazy(() => import('./EducationDetailPages').then((m) => ({ default: m.NatureSchoolPage })))
const EducationWildTalesPage = lazy(() => import('./EducationDetailPages').then((m) => ({ default: m.EducationWildTalesPage })))
const FarmToursPage = lazy(() => import('./EducationDetailPages').then((m) => ({ default: m.FarmToursPage })))
import CustomCursor from './CustomCursor'
import SiteMotion from './SiteMotion'
import ImageLightbox from './ImageLightbox'

function App() {
  return (
    <>
      <CustomCursor />
      <SiteMotion />
      <ImageLightbox />
      <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sanctuary" element={<SanctuaryPage />} />
        <Route path="/sanctuary/rescue-rehabilitation" element={<RescueRehabilitationPage />} />
        <Route path="/sanctuary/resident-animals" element={<ResidentAnimalsPage />} />
        <Route path="/sanctuary/releases" element={<WildlifeReleasesPage />} />
        <Route path="/sanctuary/volunteer" element={<SanctuaryVolunteerPage />} />
        <Route path="/sanctuary/turtle-bae" element={<TurtleBaePage />} />
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
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/calendar" element={<EventsCalendarPage />} />
        <Route path="/events/more-details" element={<EventsDetailPage />} />
        <Route path="/about" element={<AboutLandingPage />} />
        <Route path="/about/organization" element={<AboutPage />} />
        <Route path="/about/director" element={<DirectorPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/uk-deputy-high-commissioner-visit" element={<BlogVisitPage />} />
        <Route path="/blogs/sea-turtle-stories" element={<SeaTurtleStoriesPage />} />
        <Route path="/support-us" element={<SupportUsPage />} />
        <Route path="/support-us/donate" element={<DonatePage />} />
        <Route path="/support-us/member" element={<MembershipPage />} />
        <Route path="/support-us/international-donation" element={<InternationalDonationPage />} />
        <Route path="/support-us/patron" element={<PatronPage />} />
        <Route path="/support-us/business-partnership" element={<BusinessPartnershipPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/nigerian-wildlife-awareness-campaign" element={<WildlifeCampaignPage />} />
        <Route path="/portfolio/artivism-for-conservation" element={<ArtivismPage />} />
      </Routes>
      </Suspense>
    </>
  )
}

export default App
