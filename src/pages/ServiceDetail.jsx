import { useParams, Navigate, Link } from 'react-router-dom'
import SEO from '../components/SEO'
import CTABanner from '../components/CTABanner'
import { services, getServiceBySlug } from '../data/services'
import '../styles/services.css'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) return <Navigate to="/services" replace />

  return (
    <>
      <SEO title={service.name} description={service.summary} path={`/services/${service.slug}`} />

      <header className="page-head">
        <div className="container">
          <nav className="service-switch" aria-label="Solutions">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                aria-current={s.slug === service.slug ? 'page' : undefined}
              >
                {s.name}
              </Link>
            ))}
          </nav>
          <h1 className="page-head__title">{service.name}</h1>
          <p className="page-head__lede" style={{ maxWidth: '52ch' }}>
            {service.intro}
          </p>
        </div>
      </header>

      <section className="section section--paper">
        <div className="container service-detail">
          <div>
            <h2 className="service-detail__heading">What this covers</h2>
            <p className="service-detail__summary">{service.summary}</p>
          </div>
          <ul>
            {service.capabilities.map((cap) => (
              <li className="capability" key={cap.title}>
                <h3 className="capability__title">{cap.title}</h3>
                <p className="capability__text">{cap.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner title={`Need ${service.name}?`} />
    </>
  )
}
