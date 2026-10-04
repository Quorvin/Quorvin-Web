import SEO from '../components/SEO'
import ServiceRow from '../components/ServiceRow'
import CTABanner from '../components/CTABanner'
import { services } from '../data/services'

export default function ServicesOverview() {
  return (
    <>
      <SEO
        title="Solutions"
        description="AI Solutions, Data Solutions and Web Development from Quorvin."
        path="/services"
      />

      <header className="page-head">
        <div className="container">
          <h1 className="page-head__title">Three ways we help you build with AI and data.</h1>
          <p className="page-head__lede">
            Each one works on its own. Together they make one system: clean data, AI on top of it,
            and an interface your team can use.
          </p>
        </div>
      </header>

      <section className="section section--paper">
        <div className="container">
          <div className="solution-list">
            {services.map((service) => (
              <ServiceRow key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Not sure which one fits?"
        text="Describe the problem in a few lines. We will tell you which solution fits, or if none does."
      />
    </>
  )
}
