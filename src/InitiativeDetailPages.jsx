import ProgrammeDetailPage from './ProgrammeDetailPage'

const common = {
  color: '#B2D235',
  backTo: '/initiatives',
  backLabel: 'Explore Initiatives',
}

export function Play4PangolinsPage() {
  return (
    <ProgrammeDetailPage
      {...common}
      title="Play4Pangolins"
      intro="Sport becomes a platform for pangolin protection."
      overview={[
        'Play4Pangolins uses football, basketball, and the shared energy of sport to raise awareness about pangolins and the threats created by illegal wildlife trade and habitat loss.',
        'By combining conservation learning with teamwork and healthy activity, the initiative gives young people and communities an engaging way to become environmental stewards.',
      ]}
      audiences={['Children and young people', 'Schools, sports clubs, and community teams', 'Athletes, coaches, volunteers, and conservation partners']}
      experiences={['Football and basketball activities', 'Interactive pangolin conservation learning', 'Team challenges and environmental pledges', 'Community awareness and advocacy']}
      availability="Play4Pangolins activities are organised with schools, clubs, partners, and communities by arrangement."
      cta="Bring Play4Pangolins to your community"
    />
  )
}

export function InitiativeWildTalesPage() {
  return (
    <ProgrammeDetailPage
      {...common}
      title="Wild Tales and Comics"
      intro="Stories and illustration make wildlife conservation memorable."
      overview={[
        'Wild Tales and Comics uses storytelling, creative writing, characters, and illustration to help audiences discover Nigeria’s wildlife and understand the challenges species face.',
        'The initiative turns conservation knowledge into accessible stories that can be shared in classrooms, community spaces, events, and digital campaigns.',
      ]}
      audiences={['Children, students, and families', 'Schools, libraries, and reading clubs', 'Writers, artists, educators, and conservation communicators']}
      experiences={['Wildlife storytelling and read-aloud sessions', 'Creative writing and comic-making activities', 'Species-focused conservation lessons', 'Collaborative stories and public showcases']}
      availability="Workshops, school sessions, and creative collaborations are scheduled by arrangement."
      cta="Arrange a Wild Tales session"
    />
  )
}
