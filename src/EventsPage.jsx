import SectionHubPage from './SectionHubPage'

const cards = [
  {
    title: 'View Our Calendar',
    description: 'See what\'s coming up and save the dates for our next wildlife and conservation events.',
    image: '/blog-images/conservation-education.jpg',
  },
  {
    title: 'More Details',
    description: 'Get the full picture on what to expect at a Greenfingers event and how to take part.',
    image: '/blog-images/wildlife-rescue.jpg',
    to: '/events/more-details',
  },
]

function EventsPage() {
  return (
    <SectionHubPage
      title="GREENFINGERS EVENTS"
      description="Throughout the year we host educational, conservation-focused and community-centred events that connect people, wildlife and nature — from wildlife exhibitions and festivals to beach clean-ups and conservation forums. Explore what's coming up and join the movement to protect wildlife and wild spaces."
      color="#B2D235"
      cards={cards}
    />
  )
}

export default EventsPage
