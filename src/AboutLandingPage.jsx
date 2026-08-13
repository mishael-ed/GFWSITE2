import safari from './assets/abstracts/safari.png'
import Nav from './Nav'
import Footer from './Footer'
import AboutChoiceCard from './AboutChoiceCard'

function AboutLandingPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', backgroundColor: '#FDF8DF', overflow: 'hidden' }}>
      <div style={{ flex: 1 }}>
        <div style={{ paddingBottom: '20px' }}>
          <Nav />
        </div>

        <header className="landing-header" style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 30px 0', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'Skreeble', color: '#009a2e', fontSize: 'clamp(70px, 10vw, 110px)', lineHeight: .9, margin: 0 }}>ABOUT</h1>
          <p style={{ fontFamily: 'Modern Sans', color: '#000000', fontWeight: 'bold', fontSize: '17px', lineHeight: 1.5, margin: '24px auto 0', maxWidth: '600px' }}>
            Discover the story behind Greenfingers Wildlife Initiative and meet the conservationist who founded it.
          </p>
        </header>

        <main className="card-list" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '38px', padding: '55px 30px 120px' }}>
          <AboutChoiceCard
            title="About Us"
            description="Learn about our beginnings, our purpose, and the work we do to protect Nigeria's wildlife."
            image="https://upload.wikimedia.org/wikipedia/commons/0/08/School_children_release_a_ringed_yellow-fronted_tinkerbird_Pogoniulus_chrysoconus_in_Wondo_Genet_Ethiopia_as_part_of_a_project_that_combines_citizen_science_with_long-term_wildlife_monitoring.jpg"
            to="/about/organization"
          />
          <AboutChoiceCard
            title="About the Director"
            description="Meet Chinedu Mogbo, founder and director of Greenfingers Wildlife Initiative."
            image="https://upload.wikimedia.org/wikipedia/commons/1/1b/Table_Rocks_Environmental_Education_%2822874305734%29.jpg"
            to="/about/director"
          />
        </main>

        <div
          style={{
            width: '100%',
            height: '500px',
            backgroundColor: '#242424',
            WebkitMaskImage: `url(${safari})`,
            maskImage: `url(${safari})`,
            WebkitMaskSize: 'cover',
            maskSize: 'cover',
            WebkitMaskPosition: '70% 0%',
            maskPosition: '70% 0%',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            marginTop: '20px',
            marginBottom: '-70px',
          }}
        />
      </div>

      <Footer />
    </div>
  )
}

export default AboutLandingPage
