import SEO from '../components/SEO'
import Button from '../components/Button'
import ServiceRow from '../components/ServiceRow'
import UseCaseCard from '../components/UseCaseCard'
import CTABanner from '../components/CTABanner'
import LogDemo from '../components/LogDemo'
import { services } from '../data/services'
import { useCases } from '../data/useCases'
import { SITE, whatsappLink } from '../config/site'
import '../styles/home.css'

const STEPS = [
  {
    title: 'Understand the problem',
    text: 'We start with a short, focused look at your real data and workflow. No generic discovery deck.',
  },
  {
    title: 'Build a small first version',
    text: 'A working system on your real data, so you can judge the results before you commit to more.',
  },
  {
    title: 'Deliver and hand over',
    text: 'A production system with documentation. If you want, we keep improving it with you.',
  },
]

const ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE.city,
    addressCountry: 'ID',
  },
}

export default function Home() {
  const featured = useCases[0]

  return (
    <>
      <SEO path="/" jsonLd={ORGANIZATION} />

      <section className="hero">
        <div className="container hero__grid">
          <div>
            <h1 className="hero__title">From raw data to a clear answer.</h1>
            <p className="hero__lede">
              Quorvin builds AI and data solutions that read your logs, tickets and other
              operations data, then tell your team what is wrong and why.
            </p>
            <div className="btn-group">
              <Button href={whatsappLink()}>Chat on WhatsApp</Button>
              <Button to="/use-cases" variant="ghost">
                See how it works
              </Button>
            </div>
          </div>
          <div className="hero__demo">
            <LogDemo />
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <h2 className="section-title">What we build</h2>
          <div className="solution-list">
            {services.map((service) => (
              <ServiceRow key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">How a project runs</h2>
          <ol className="steps">
            {STEPS.map((step, i) => (
              <li className="steps__item" key={step.title}>
                <span className="steps__number">{i + 1}</span>
                <h3 className="steps__title">{step.title}</h3>
                <p className="steps__text">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <h2 className="section-title">A recent project</h2>
          <div className="entry-list">
            <UseCaseCard useCase={featured} />
          </div>
          <div className="home-more">
            <Button to="/use-cases" variant="ghost">
              See all use cases
            </Button>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
