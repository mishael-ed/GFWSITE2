import SectionHubPage from './SectionHubPage'

const cards = [
  {
    title: 'Wildlife Warriors',
    description: 'Helping young people become confident champions for nature.',
    image: '/blog-images/conservation-education.jpg',
    to: '/education/wildlife-warriors',
  },
  {
    title: 'Nature School',
    description: 'Immersive, hands-on learning in wildlife and natural ecosystems.',
    image: '/blog-images/community-conservation.jpg',
    to: '/education/nature-school',
  },
  {
    title: 'Wild Tales and Comics',
    description: 'Learning about conservation through stories, art, and imagination.',
    image: '/blog-images/species-spotlight.jpg',
    to: '/education/wild-tales',
  },
  {
    title: 'Farm Tours',
    description: 'Guided experiences connecting food, farming, wildlife, and sustainability.',
    image: '/blog-images/wildlife-rescue.jpg',
    to: '/education/farm-tours',
  },
]

function EducationPage() {
  return (
    <SectionHubPage
      title="EDUCATION"
      description="Choose a learning experience designed to spark curiosity, build knowledge, and inspire lifelong care for nature."
      color="#F69524"
      cards={cards}
    />
  )
}

export default EducationPage
