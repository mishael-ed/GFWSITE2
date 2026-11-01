import { Link } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

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

const captionStyle = {
  fontFamily: 'Modern Sans',
  fontWeight: 'bold',
  fontSize: '14px',
  color: '#444444',
  margin: '10px 0 0',
}

const talents = [
  ['The 90-second speech:', 'Students spoke on how to protect sea turtles.'],
  ['Painting and mosaic:', 'They turned trash into art, proving that waste can become something beautiful.'],
  ['Conservation posters:', 'They designed posters carrying messages about protecting sea turtles.'],
  ['Storytelling:', 'They wrote their own stories about sea turtles.'],
]

function FestivalPhoto({ src, alt, caption, color = '#F69524', ratio, maxWidth = '100%', position = 'center' }) {
  return (
    <figure style={{ margin: '36px auto', width: '100%', maxWidth }}>
      <div style={{ border: `13px solid ${color}`, borderRadius: '7px 3px 8px 4px', boxSizing: 'border-box', overflow: 'hidden', aspectRatio: ratio }}>
        <img
          loading="lazy"
          decoding="async"
          src={src}
          alt={alt}
          style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: position }}
        />
      </div>
      <figcaption style={captionStyle}>{caption}</figcaption>
    </figure>
  )
}

function SeaTurtleFestivalPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', backgroundColor: '#FDF8DF', overflow: 'hidden' }}>
      <div style={{ flex: 1 }}>
        <div style={{ paddingBottom: '20px' }}><Nav /></div>

        <main className="content-page" style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 80px 150px' }}>
          <Link to="/blogs" style={{ display: 'inline-block', fontFamily: 'Modern Sans', color: '#000000', fontWeight: 'bold', fontSize: '15px', textDecoration: 'none', marginBottom: '30px' }}>
            ← Back to Blogs
          </Link>

          <h1 className="content-page-title" style={{ fontFamily: 'Skreeble, "Rainbow Theory", sans-serif', color: '#009a2e', fontSize: 'clamp(55px, 8vw, 84px)', fontWeight: 'normal', lineHeight: .92, margin: 0 }}>
            A Day for the Sea Turtles at Turtle Bae
          </h1>

          <p style={{ ...paragraphStyle, color: '#F69524', fontSize: '20px', margin: '28px 0 34px' }}>
            Sea Turtle Festival, 17th October, Elegushi, Lagos
          </p>

          <p style={paragraphStyle}>
            On the 17th of October, the sand at Turtle Bae in Elegushi, Lagos, filled with school uniforms in every color. Greenfingers had invited students from all over the city to a Sea Turtle Festival. The mission was to celebrate these gentle sea creatures and to teach the next generation how to protect them.
          </p>

          <FestivalPhoto
            src="/original%20images/blog%20images/festival-students-arriving.webp"
            alt="Students arriving at the Sea Turtle Festival, walking down the steps in a line"
            caption="Students arriving, walking down the steps in a line"
            color="#009a2e"
            ratio="16 / 10"
            position="center 30%"
          />

          <h2 style={headingStyle}>Warm-Up Fun</h2>
          <p style={paragraphStyle}>
            As soon as they registered, the students were pulled into the day. Boards of word puzzles waited for them, and everyone hunted for hidden words about sea turtles. Then came the hands-on part. Each student designed their own sea turtle, and no two looked alike.
          </p>

          <h2 style={headingStyle}>Meeting the Wild Ones</h2>
          <p style={paragraphStyle}>
            Next, the children toured the Turtle Bae Sanctuary. They met lions, wild cats, patas monkeys, baboons and an African wolf, and their eyes widened at every turn. Then came the animal the whole festival was about: the sea turtle itself. The students crowded around its pool, shoulder to shoulder, watching it glide through the water.
          </p>

          <FestivalPhoto
            src="/original%20images/blog%20images/festival-turtle-pool.webp"
            alt="Students gathered around the sea turtle pool at Turtle Bae"
            caption="Students gathered around the sea turtle pool"
            ratio="1 / 1"
            maxWidth="520px"
          />

          <h2 style={headingStyle}>Lessons from Mr. Chinedu</h2>
          <p style={paragraphStyle}>
            After the tour, the students settled in for the educational session. Mr. Chinedu, Director of Greenfingers and Turtle Bae, walked them through the life of a sea turtle. He explained how mother turtles leave the ocean at night to lay their eggs, where they nest, and how many years a turtle must live before it can have young of its own.
          </p>
          <p style={paragraphStyle}>
            He introduced the different kinds of sea turtles found around the world, and the ones that visit Nigeria's own coastline. The students learned why sea turtles matter to us and to the health of the ocean. He also spoke about protecting them in the wild and why they must never be hunted or eaten. The students left with a clear message: sea turtles need our protection, and everyone can help.
          </p>

          <FestivalPhoto
            src="/original%20images/blog%20images/festival-mr-chinedu-lesson.webp"
            alt="Mr. Chinedu teaching in front of the Sea Turtles of Nigeria banner"
            caption={'Mr. Chinedu teaching in front of the "Sea Turtles of Nigeria" banner'}
            color="#009a2e"
            ratio="1 / 1"
            maxWidth="520px"
          />

          <h2 style={headingStyle}>Time to Shine</h2>
          <p style={paragraphStyle}>With the lesson over, it was the students' turn to show their talents.</p>

          <ul style={{ ...paragraphStyle, paddingLeft: '24px' }}>
            {talents.map(([title, text]) => (
              <li key={title} style={{ margin: '6px 0' }}>
                <strong>{title}</strong> {text}
              </li>
            ))}
          </ul>

          <p style={paragraphStyle}>
            The standard was high. There were impressive paintings, well-written stories and creative posters, and the judges had a hard time choosing.
          </p>

          <FestivalPhoto
            src="/original%20images/blog%20images/festival-mosaic-turtles.webp"
            alt="Students building mosaic turtles from trash on the sand"
            caption="Students building mosaic turtles from trash on the sand"
            ratio="4 / 3"
          />

          <h2 style={headingStyle}>Survival Mode</h2>
          <p style={paragraphStyle}>
            The day ended with games. There was ball tossing, and then a special game that put the children in the flippers of baby turtles. As hatchlings, they had to race to the sea in survival mode, dodging trash along the way. It was a fun way to show how hard the journey is for real hatchlings when our waste gets in their path.
          </p>

          <h2 style={headingStyle}>Heading Home</h2>
          <p style={paragraphStyle}>
            After a round of group photos, the children headed home tired, happy and much wiser about sea turtles.
          </p>
          <p style={paragraphStyle}>
            A big thank you to Mr. Chinedu, Greenfingers, the organizers, and every student who took part. If this day taught us one thing, it's that protecting sea turtles starts with small choices, like keeping our beaches clean and our trash where it belongs.
          </p>
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default SeaTurtleFestivalPage
