import { Link } from 'react-router-dom'
import { formatDate } from '../utils/formatDate'

export default function InsightCard({ insight }) {
  return (
    <Link to={`/insights/${insight.slug}`} className="entry">
      <div className="entry__meta">
        <time dateTime={insight.date}>{formatDate(insight.date)}</time>
        <span>{insight.readTime}</span>
      </div>
      <div>
        <h3 className="entry__title">{insight.title}</h3>
        <p className="entry__excerpt">{insight.excerpt}</p>
      </div>
    </Link>
  )
}
