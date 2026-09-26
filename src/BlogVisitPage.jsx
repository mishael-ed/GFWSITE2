import { Link } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import FreeformButton from './FreeformButton'

const paragraphStyle = {
  fontFamily: 'Modern Sans',
  color: '#000000',
  fontWeight: 'bold',
  fontSize: '17px',
  lineHeight: 1.7,
  margin: '18px 0',
}

const headingStyle = {
  fontFamily: 'Skreeble, "Rainbow Theory", sans-serif',
  color: '#009a2e',
  fontWeight: 'normal',
  fontSize: 'clamp(34px, 5vw, 46px)',
  lineHeight: 1,
  margin: '52px 0 20px',
}

function BlogVisitPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', backgroundColor: '#FDF8DF', overflow: 'hidden' }}>
      <div style={{ flex: 1 }}>
        <div style={{ paddingBottom: '20px' }}><Nav /></div>

        <main className="content-page" style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 80px 150px' }}>
          <Link to="/blogs" style={{ display: 'inline-block', fontFamily: 'Modern Sans', color: '#000000', fontWeight: 'bold', fontSize: '15px', textDecoration: 'none', marginBottom: '30px' }}>
            ← Back to Blogs
          </Link>

          <h1 className="content-page-title" style={{ fontFamily: 'Skreeble, "Rainbow Theory", sans-serif', color: '#009a2e', fontSize: 'clamp(65px, 9vw, 92px)', fontWeight: 'normal', lineHeight: .92, margin: 0 }}>
            A VISIT TO GREENFINGERS
          </h1>

          <p style={{ ...paragraphStyle, color: '#F69524', fontSize: '20px', margin: '28px 0 34px' }}>
            A special visit celebrating wildlife, conservation and the growing importance of protecting Nigeria's natural heritage.
          </p>

          <p style={paragraphStyle}>
            The Greenfingers Wildlife Sanctuary recently welcomed Mr. John Baxter, Deputy High Commissioner of the United Kingdom to Nigeria, for a visit to our wildlife sanctuary.
          </p>
          <p style={paragraphStyle}>
            The visit provided an opportunity to share the work of Greenfingers Wildlife Initiative and to showcase the role that wildlife rescue, rehabilitation, conservation education and community engagement play in protecting Nigeria's wildlife.
          </p>

          <h2 style={headingStyle}>Connecting People With Wildlife</h2>
          <p style={paragraphStyle}>At Greenfingers, we believe that conservation begins with connection.</p>
          <p style={paragraphStyle}>
            Our sanctuary provides a safe environment for rescued and rehabilitated wildlife while also serving as a place where people can learn about animals, understand the challenges they face and discover how they can contribute to their protection.
          </p>
          <p style={paragraphStyle}>
            During the visit, the Deputy High Commissioner had the opportunity to experience the sanctuary and learn more about the animals in our care and the work involved in providing them with appropriate care and rehabilitation.
          </p>

          <h2 style={headingStyle}>Beyond Rescue and Rehabilitation</h2>
          <p style={paragraphStyle}>
            While caring for rescued animals is an important part of our work, Greenfingers' conservation efforts extend beyond the sanctuary.
          </p>
          <p style={paragraphStyle}>
            Our programmes engage schools, young people, communities and the wider public through wildlife education, conservation campaigns, environmental activities and hands-on experiences.
          </p>
          <p style={paragraphStyle}>
            From wildlife awareness and educational programmes to community clean-ups, sea turtle conservation, tree planting and wildlife releases, our work is focused on creating a stronger connection between people and the natural world.
          </p>

          <h2 style={headingStyle}>Inspiring the Next Generation</h2>
          <p style={paragraphStyle}>
            A key part of our work is helping young people understand that they can play an active role in conservation.
          </p>
          <p style={paragraphStyle}>
            Through school programmes, the Wildlife Warriors Club, storytelling, art, conservation games and outdoor experiences, we create opportunities for children and young people to learn about wildlife in ways that are engaging and meaningful.
          </p>
          <p style={paragraphStyle}>
            We believe that today's young learners can become tomorrow's conservation leaders, scientists, educators, advocates and wildlife champions.
          </p>

          <h2 style={headingStyle}>A Shared Responsibility</h2>
          <p style={paragraphStyle}>
            The visit also reflects the importance of creating connections between organisations and individuals working to build a more sustainable future.
          </p>
          <p style={paragraphStyle}>
            Protecting wildlife requires collaboration. Conservation organisations, communities, schools, businesses, government institutions, diplomatic missions, researchers and members of the public all have roles to play.
          </p>
          <p style={paragraphStyle}>
            For Greenfingers, partnerships and meaningful conversations help create new opportunities to strengthen conservation education, support wildlife protection and bring more people into the conservation movement.
          </p>

          <h2 style={headingStyle}>Looking Ahead</h2>
          <p style={paragraphStyle}>
            We are grateful to have welcomed the Deputy High Commissioner to the Greenfingers Wildlife Sanctuary and to have had the opportunity to share our work and vision.
          </p>
          <p style={paragraphStyle}>
            As Greenfingers continues to grow, we remain committed to building a future where wildlife is valued, communities are empowered and people have meaningful opportunities to connect with and protect nature.
          </p>
          <p style={paragraphStyle}>
            Every visit creates an opportunity to learn. Every connection can inspire action. And every action can contribute to a better future for wildlife.
          </p>

          <h2 style={headingStyle}>Watch the Visit</h2>
          <p style={paragraphStyle}>
            Watch highlights from the visit of Mr. John Baxter, Deputy High Commissioner of the United Kingdom to Nigeria, to the Greenfingers Wildlife Sanctuary.
          </p>

          <FreeformButton color="#B2D235" href="https://youtu.be/crzhWm1aB-w?si=V1ForuSLju0QPF67">
            Watch the video
          </FreeformButton>
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default BlogVisitPage
