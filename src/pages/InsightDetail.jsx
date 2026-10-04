import { useParams, Navigate } from 'react-router-dom'
import SEO from '../components/SEO'
import CTABanner from '../components/CTABanner'
import { formatDate } from '../utils/formatDate'
import { getInsightBySlug } from '../data/insights'
import '../styles/insights.css'

export default function InsightDetail() {
  const { slug } = useParams()
  const insight = getInsightBySlug(slug)

  if (!insight) return <Navigate to="/insights" replace />

  return (
    <>
      <SEO title={insight.title} description={insight.excerpt} path={`/insights/${insight.slug}`} />

      <article>
        <header className="page-head">
          <div className="container">
            <h1 className="page-head__title" style={{ maxWidth: '24ch' }}>
              {insight.title}
            </h1>
            <p className="article-meta">
              <time dateTime={insight.date}>{formatDate(insight.date)}</time>
              <span>{insight.readTime}</span>
            </p>
          </div>
        </header>

        <section className="section section--paper">
          <div className="container article-body">
            {insight.body.map((block, i) =>
              block.type === 'h2' ? <h2 key={i}>{block.text}</h2> : <p key={i}>{block.text}</p>
            )}
          </div>
        </section>
      </article>

      <CTABanner title="Want to talk through a similar problem?" />
    </>
  )
}
