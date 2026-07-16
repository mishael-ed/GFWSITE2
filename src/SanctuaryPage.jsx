import Nav from './Nav'
import Footer from './Footer'

const headingStyle = {
  fontFamily: 'Skreeble',
  color: '#F69524',
  margin: '50px 0 10px',
}

const paragraphStyle = {
  fontFamily: 'Modern Sans',
  color: '#000000',
  fontWeight: 'bold',
  fontSize: '17px',
  lineHeight: '1.6',
  margin: '16px 0',
}

const listStyle = {
  fontFamily: 'Modern Sans',
  color: '#000000',
  fontWeight: 'bold',
  fontSize: '17px',
  lineHeight: '1.6',
  margin: '16px 0',
  paddingLeft: '24px',
}

function SanctuaryPage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#FDF8DF', overflow: 'hidden' }}>
      <div style={{ paddingBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Nav />
        </div>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 80px 140px' }}>
        <h1 style={{ fontFamily: 'Skreeble', color: '#F69524', fontSize: '80px', margin: 0 }}>SANCTUARY</h1>

        <p style={paragraphStyle}>
          Welcome to Greenfingers Wildlife Sanctuary—a safe haven where rescued wildlife finds hope, healing, and a second chance.
        </p>
        <p style={paragraphStyle}>
          Our sanctuary is dedicated to the rescue, rehabilitation, and lifelong care of wild animals affected by habitat loss, illegal wildlife trade, injury, and human-wildlife conflict. Every animal in our care has a unique story, and our mission is to provide the highest standard of welfare while working towards their successful return to the wild whenever possible.
        </p>
        <p style={paragraphStyle}>
          More than a refuge for wildlife, the sanctuary is a place where people connect with nature. Through guided visits, educational programmes, volunteering opportunities, and conservation experiences, visitors gain a deeper appreciation for Nigeria's remarkable biodiversity and the importance of protecting it for future generations.
        </p>
        <p style={paragraphStyle}>
          Whether you're here to learn, volunteer, support our work, or simply experience wildlife up close, your visit helps create a brighter future for the animals we care for and the ecosystems they call home.
        </p>
        <p style={paragraphStyle}>
          Discover. Learn. Protect. Together, we can give wildlife a second chance.
        </p>

        <h2 style={headingStyle}>Rescue &amp; Rehabilitation</h2>
        <p style={paragraphStyle}>
          Every rescued animal deserves a second chance.
        </p>
        <p style={paragraphStyle}>
          At Greenfingers Wildlife Sanctuary, rescue and rehabilitation are at the heart of everything we do. Our team works tirelessly to provide emergency care, rehabilitation, and, whenever possible, a safe return to the wild for Nigeria's native wildlife.
        </p>
        <p style={paragraphStyle}>
          Many of the animals that arrive at our sanctuary have suffered from habitat loss, illegal wildlife trade, road accidents, poisoning, human-wildlife conflict, or injuries caused by pollution and other human activities. Some are orphaned after their parents have been killed, while others have been kept illegally as pets or rescued from traffickers and require specialised care before they can recover.
        </p>

        <h2 style={headingStyle}>Wildlife Rescue</h2>
        <p style={paragraphStyle}>
          Our rescue team responds to reports from government agencies, conservation partners, local communities, and members of the public. Every rescue is carefully assessed to ensure the safest outcome for both the animal and the people involved.
        </p>
        <p style={paragraphStyle}>
          Upon arrival at the sanctuary, each rescued animal receives a comprehensive health assessment before entering quarantine where necessary. During this period, our team evaluates injuries, screens for disease, and develops an individual rehabilitation plan tailored to the animal's needs.
        </p>

        <h2 style={headingStyle}>Rehabilitation</h2>
        <p style={paragraphStyle}>
          Rehabilitation is a carefully managed process designed to restore an animal's health, confidence, and natural behaviours while minimising dependence on humans.
        </p>
        <p style={paragraphStyle}>
          Depending on the species and condition of the animal, rehabilitation may include:
        </p>
        <ul style={listStyle}>
          <li>Veterinary examinations and medical treatment</li>
          <li>Nutritional support and specialised diets</li>
          <li>Behavioural observation and enrichment</li>
          <li>Recovery from injuries and physical rehabilitation</li>
          <li>Species-appropriate housing that encourages natural behaviours</li>
          <li>Preparation for successful release into the wild</li>
        </ul>
        <p style={paragraphStyle}>
          Our mission is not simply to save lives—it is to restore them.
        </p>

        <h2 style={headingStyle}>Volunteer with Our Animal Care Team</h2>
        <p style={paragraphStyle}>
          Experience wildlife conservation firsthand by becoming part of our daily rescue and rehabilitation efforts.
        </p>
        <p style={paragraphStyle}>
          Our Animal Care Volunteer Experience offers individuals, families, students, and wildlife enthusiasts the opportunity to spend time at the sanctuary working alongside our dedicated animal care team. Volunteers gain a behind-the-scenes understanding of wildlife rehabilitation while making a meaningful contribution to the wellbeing of rescued animals.
        </p>
        <p style={paragraphStyle}>
          Depending on the day's activities, volunteers may assist with:
        </p>
        <ul style={listStyle}>
          <li>Preparing diets and feeding rescued animals</li>
          <li>Cleaning and maintaining animal enclosures</li>
          <li>Creating enrichment activities that encourage natural behaviours</li>
          <li>Assisting with habitat maintenance and sanctuary upkeep</li>
          <li>Supporting wildlife education activities and visitor engagement</li>
          <li>Observing rehabilitation procedures and learning about native Nigerian wildlife</li>
        </ul>
        <p style={paragraphStyle}>
          Whether you join us for a single day or as part of a longer volunteer programme, your time helps improve the quality of life for the animals in our care while supporting wildlife conservation in Nigeria.
        </p>
        <p style={paragraphStyle}>
          No two days at the sanctuary are ever the same, making every volunteer experience unique, educational, and rewarding.
        </p>

        <h2 style={headingStyle}>Returning Wildlife to the Wild</h2>
        <p style={paragraphStyle}>
          Whenever an animal has fully recovered and demonstrates the skills needed to survive independently, we work closely with the relevant authorities and conservation partners to return it to suitable natural habitats.
        </p>
        <p style={paragraphStyle}>
          Each release is carefully planned to maximise the animal's chances of survival. For animals that cannot be released due to permanent injuries or other welfare concerns, we provide lifelong, compassionate care while they continue to serve as ambassadors for wildlife conservation and education.
        </p>

        <h2 style={headingStyle}>Every Rescue Inspires Conservation</h2>
        <p style={paragraphStyle}>
          Each rescue provides valuable insights into the challenges facing Nigeria's wildlife, from habitat destruction and pollution to the illegal wildlife trade. These experiences strengthen our conservation efforts, inform research, and inspire thousands of students, visitors, and community members to become champions for nature.
        </p>
        <p style={paragraphStyle}>
          Every rescued animal represents hope—not only for its own future, but for the future of wildlife conservation.
        </p>

        <h2 style={headingStyle}>Help Give Wildlife a Second Chance</h2>
        <p style={paragraphStyle}>
          Wildlife rescue is only possible because of the support of people who care.
        </p>
        <p style={paragraphStyle}>
          You can make a difference by reporting wildlife in distress, volunteering at the sanctuary, sponsoring the care of a rescued animal, or making a donation. Every contribution helps us provide life-saving care and gives rescued wildlife the opportunity to recover, thrive, and, whenever possible, return to the wild.
        </p>
        <p style={paragraphStyle}>
          Together, we can rescue, rehabilitate, and protect Nigeria's wildlife—one animal at a time.
        </p>
      </div>

      <Footer />
    </div>
  )
}

export default SanctuaryPage
