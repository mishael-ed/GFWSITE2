import ProgrammeDetailPage from './ProgrammeDetailPage'

const common = {
  color: '#F69524',
  backTo: '/education',
  backLabel: 'Explore Education',
}

export function WildlifeWarriorsPage() {
  return (
    <ProgrammeDetailPage
      {...common}
      title="Wildlife Warriors"
      intro="Building a generation of confident conservation leaders."
      image="/blog-images/conservation-education.jpg"
      overview={[
        'The Wildlife Warriors Programme empowers children and young people to become ambassadors for nature through practical conservation learning, wildlife experiences, leadership, and community action.',
        'Participants build the knowledge, skills, and confidence to recognise environmental challenges and take positive action at school, at home, and in their communities.',
      ]}
      audiences={['Primary and secondary school students', 'Youth clubs and community groups', 'Teachers and youth educators']}
      experiences={['Interactive wildlife and ecosystem lessons', 'Environmental leadership activities', 'Team conservation challenges', 'Planning practical action for school or community']}
      availability="School and group sessions are available on mutually agreed dates. Contact Greenfingers with your group size, age range, and preferred date."
      cta="Book Wildlife Warriors"
    />
  )
}

export function NatureSchoolPage() {
  return (
    <ProgrammeDetailPage
      {...common}
      title="Nature School"
      intro="Learning becomes an outdoor adventure."
      image="/blog-images/community-conservation.jpg"
      overview={[
        'Nature School brings learners closer to wildlife and the natural world through interactive lessons, sanctuary visits, outdoor observation, and curriculum-connected activities.',
        'The programme encourages curiosity and critical thinking while helping students understand biodiversity, ecosystems, animal welfare, and their own role in conservation.',
      ]}
      audiences={['Schools and homeschool groups', 'Children, teenagers, and families', 'Teachers seeking practical environmental learning']}
      experiences={['Guided sanctuary and nature learning', 'Observation-based wildlife activities', 'Biodiversity and ecosystem lessons', 'Hands-on conservation exercises']}
      availability="Nature School visits are offered by advance booking during sanctuary opening hours: Monday to Saturday, 9:00 AM to 6:00 PM, and Sunday, 12:00 noon to 6:00 PM."
      cta="Book Nature School"
    />
  )
}

export function EducationWildTalesPage() {
  return (
    <ProgrammeDetailPage
      {...common}
      title="Wild Tales and Comics"
      intro="Imagination opens the door to wildlife conservation."
      image="/blog-images/species-spotlight.jpg"
      overview={[
        'Wild Tales and Comics combines reading, storytelling, creative writing, and illustration to help learners explore wildlife and environmental responsibility.',
        'Through characters and stories inspired by nature, participants strengthen communication and creative skills while building empathy for animals and ecosystems.',
      ]}
      audiences={['Children and school groups', 'Families, libraries, and reading clubs', 'Young writers and artists']}
      experiences={['Guided wildlife stories', 'Create-your-own conservation characters', 'Comic and illustration workshops', 'Reading, writing, and group storytelling']}
      availability="Sessions are available for schools, libraries, events, and organised groups by arrangement."
      cta="Book a Wild Tales session"
    />
  )
}

export function FarmToursPage() {
  return (
    <ProgrammeDetailPage
      {...common}
      title="Farm Tours"
      intro="Discover the connections between food, land, wildlife, and people."
      image="/blog-images/wildlife-rescue.jpg"
      overview={[
        'Farm Tours are guided learning experiences that introduce participants to responsible land use, food production, sustainability, and the relationship between farms and surrounding ecosystems.',
        'The experience encourages learners to consider how everyday choices can support healthier communities and reduce pressure on wildlife and natural habitats.',
      ]}
      audiences={['Schools and educational groups', 'Families and community organisations', 'Learners interested in food, nature, and sustainability']}
      experiences={['Guided exploration of farm activities', 'Learning about plants, soil, and food systems', 'Discussion of wildlife-friendly practices', 'Practical sustainability activities']}
      availability="Farm Tours are available by advance arrangement. Contact the team to confirm group capacity, suitable dates, and visitor requirements."
      cta="Book a farm tour"
    />
  )
}
