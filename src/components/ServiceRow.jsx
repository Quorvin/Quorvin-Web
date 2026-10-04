import { Link } from 'react-router-dom'

export default function ServiceRow({ service }) {
  const scope = service.capabilities.slice(0, 3).map((c) => c.title).join(', ')

  return (
    <Link to={`/services/${service.slug}`} className="solution-row">
      <h3 className="solution-row__name">{service.name}</h3>
      <div>
        <p className="solution-row__tagline">{service.tagline}</p>
        <p className="solution-row__scope">{scope}</p>
      </div>
    </Link>
  )
}
