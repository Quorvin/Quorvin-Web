import { Link } from 'react-router-dom'

export default function UseCaseCard({ useCase }) {
  return (
    <Link to={`/use-cases/${useCase.slug}`} className="entry">
      <div className="entry__meta">
        <span>{useCase.industry}</span>
      </div>
      <div>
        <h3 className="entry__title">{useCase.title}</h3>
        <p className="entry__excerpt">{useCase.excerpt}</p>
      </div>
    </Link>
  )
}
