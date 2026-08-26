import SectionHubPage from './SectionHubPage'

const cards = [
  {
    title: 'Play4Pangolins',
    description: 'Using sport to inspire action for the world’s most trafficked mammal.',
    image: '/blog-images/species-spotlight.jpg',
    to: '/initiatives/play4pangolins',
  },
  {
    title: 'Artivism for Conservation',
    description: 'Transforming creativity into action for wildlife and the planet.',
    image: '/blog-images/community-conservation.jpg',
    to: '/initiatives/artivism-for-conservation',
  },
  {
    title: 'Wild Tales and Comics',
    description: 'Connecting young people with nature through stories and illustration.',
    image: '/blog-images/conservation-education.jpg',
    to: '/initiatives/wild-tales-and-comics',
  },
  {
    title: 'Nigerian Wildlife Awareness Campaign',
    description: 'Building a nationwide culture of wildlife appreciation and action.',
    image: '/blog-images/wildlife-rescue.jpg',
    to: '/initiatives/nigerian-wildlife-awareness-campaign',
  },
]

function InitiativesPage() {
  return (
    <SectionHubPage
      title="OUR INITIATIVES"
      description="Explore the campaigns bringing conservation into sport, art, storytelling, education, and communities across Nigeria."
      color="#B2D235"
      cards={cards}
    />
  )
}

export default InitiativesPage
