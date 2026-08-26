import ProgrammeDetailPage from './ProgrammeDetailPage'

const common = {
  color: '#F69524',
  backTo: '/sanctuary',
  backLabel: 'Explore Sanctuary',
}

export function RescueRehabilitationPage() {
  return (
    <ProgrammeDetailPage
      {...common}
      title="Rescue and Rehabilitation"
      intro="Every rescued animal deserves a second chance."
      overview={[
        "Rescue and rehabilitation are at the heart of Greenfingers Wildlife Sanctuary. Our team provides emergency care, recovery support, and, whenever possible, a safe return to the wild for Nigeria's native wildlife.",
        'Animals may arrive after habitat loss, illegal wildlife trade, road accidents, poisoning, pollution, injury, or human-wildlife conflict. Each animal receives a health assessment, quarantine where necessary, and an individual rehabilitation plan.',
      ]}
      audiences={['Government agencies and conservation partners', 'Communities and members of the public reporting wildlife in distress', 'Students and visitors learning how ethical wildlife care works']}
      experiences={['Veterinary assessment and medical treatment', 'Nutritional support and specialised diets', 'Behavioural observation and enrichment', 'Species-appropriate housing and preparation for release']}
      availability="Wildlife rescue operates according to need. Sanctuary learning visits are available by advance arrangement during opening hours."
      cta="Report or discuss a rescue"
    />
  )
}

export function ResidentAnimalsPage() {
  return (
    <ProgrammeDetailPage
      {...common}
      title="Resident Animals"
      intro="Meet the wildlife ambassadors receiving expert, lifelong care."
      overview={[
        'Some rescued animals cannot safely return to the wild because of permanent injuries, long-term health needs, or previous dependence on people. The sanctuary provides them with compassionate lifelong care in environments designed around their welfare.',
        'Greenfingers has cared for pangolins, sea turtles, African grey parrots, owls, crocodiles, primates, and other confiscated or rescued wildlife. Their stories help visitors understand the threats facing native species and the importance of responsible conservation.',
      ]}
      audiences={['Families and individual visitors', 'Schools and educational groups', 'Researchers, conservationists, and wildlife enthusiasts']}
      experiences={['Guided introductions to resident wildlife', 'Stories explaining each animal’s rescue and care', 'Learning about natural behaviour and conservation status', 'Responsible viewing that protects animal welfare']}
      availability="Resident-animal visits are offered by advance booking. Contact the team to confirm available dates and any visitor requirements."
      cta="Book a sanctuary visit"
    />
  )
}

export function WildlifeReleasesPage() {
  return (
    <ProgrammeDetailPage
      {...common}
      title="Wildlife Releases"
      intro="Recovery becomes freedom when an animal is ready to return home."
      overview={[
        'Whenever a rescued animal has recovered and can survive independently, Greenfingers works with relevant authorities and conservation partners to identify a safe and suitable release habitat.',
        'Every release is carefully planned around the species, the animal’s health and behaviour, habitat conditions, and any monitoring that may be needed. These moments are also powerful opportunities to share conservation lessons with communities.',
      ]}
      audiences={['Conservation partners and relevant authorities', 'Communities near suitable release habitats', 'Supporters following rescue and recovery stories']}
      experiences={['Pre-release health and behaviour assessments', 'Habitat selection and release planning', 'Community awareness around the release area', 'Release stories and conservation updates']}
      availability="Releases depend on animal readiness, habitat suitability, and regulatory approval; they do not follow a fixed public schedule."
      cta="Ask about release stories"
    />
  )
}

export function SanctuaryVolunteerPage() {
  return (
    <ProgrammeDetailPage
      {...common}
      title="Volunteer at the Sanctuary"
      intro="Experience wildlife conservation through meaningful, hands-on support."
      overview={[
        'The Animal Care Volunteer Experience gives individuals, families, students, and wildlife enthusiasts an opportunity to support daily sanctuary work alongside the Greenfingers team.',
        'Activities vary according to animal welfare needs and the day’s work. Volunteers receive guidance and must follow all sanctuary safety and animal-care instructions.',
      ]}
      audiences={['Individuals and families', 'Students and organised groups', 'Wildlife enthusiasts and conservation volunteers']}
      experiences={['Preparing diets and supporting feeding routines', 'Cleaning and maintaining animal enclosures', 'Creating enrichment that encourages natural behaviour', 'Supporting habitat maintenance and education activities']}
      availability="Single-day and longer volunteer experiences are available by prior arrangement. Contact the team with your preferred dates and group details."
      cta="Apply to volunteer"
    />
  )
}
