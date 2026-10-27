import SectionHubPage from './SectionHubPage'

const cards = [
  {
    title: 'Rescue and Rehabilitation',
    description: 'Emergency care, recovery, and second chances for wildlife.',
    image: '/blog-images/wildlife-rescue.webp',
    to: '/sanctuary/rescue-rehabilitation',
  },
  {
    title: 'Resident Animals',
    description: 'Meet the animals receiving lifelong care at our sanctuary.',
    image: '/blog-images/species-spotlight.webp',
    to: '/sanctuary/resident-animals',
  },
  {
    title: 'Wildlife Releases',
    description: 'Follow recovered animals on their journey back to the wild.',
    image: '/blog-images/community-conservation.webp',
    to: '/sanctuary/releases',
  },
  {
    title: 'Volunteering',
    description: 'Work alongside our team and support daily animal care.',
    image: '/blog-images/conservation-education.webp',
    to: '/sanctuary/volunteer',
  },
]

function SanctuaryPage() {
  return (
    <SectionHubPage
      title="SANCTUARY"
      description="Discover how Greenfingers rescues, rehabilitates, cares for, and returns wildlife to the wild—and how you can take part."
      color="#F69524"
      cards={cards}
    />
  )
}

export default SanctuaryPage
