const sponsorModules = import.meta.glob(
  './assets/sponsor logos/*.{png,jpg,jpeg}',
  { eager: true, query: '?url', import: 'default' }
)

const sponsors = Object.entries(sponsorModules)
  .map(([path, src]) => {
    const filename = path.split('/').pop().replace(/\.[^.]+$/, '')
    const name = filename
      .replace(/ converted$/i, '')
      .replace(/[_-]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()

    return { src, name }
  })
  .sort((a, b) => a.name.localeCompare(b.name))

function LogoGroup({ hidden = false }) {
  return (
    <div className="sponsor-logo-group" aria-hidden={hidden || undefined}>
      {sponsors.map((sponsor, index) => (
        <div className="sponsor-logo-item" key={`${sponsor.name}-${index}`}>
          <img src={sponsor.src} alt={hidden ? '' : sponsor.name} loading="lazy" />
        </div>
      ))}
    </div>
  )
}

function SponsorStrip() {
  return (
    <section className="sponsor-strip" aria-label="Our partners and sponsors">
      <p className="sponsor-strip-label">Our partners and sponsors</p>
      <div className="sponsor-marquee">
        <div className="sponsor-track">
          <LogoGroup />
          <LogoGroup hidden />
        </div>
      </div>
    </section>
  )
}

export default SponsorStrip
