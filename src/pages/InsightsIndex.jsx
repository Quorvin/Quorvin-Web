import SEO from '../components/SEO'
import InsightCard from '../components/InsightCard'
import { insights } from '../data/insights'

export default function InsightsIndex() {
  return (
    <>
      <SEO
        title="Insights"
        description="Notes on AI, data and building operational systems, from the Quorvin team."
        path="/insights"
      />

      <header className="page-head">
        <div className="container">
          <h1 className="page-head__title">Notes from the work.</h1>
          <p className="page-head__lede">
            Short, practical write-ups on AI, data and what we learn while building.
          </p>
        </div>
      </header>

      <section className="section section--paper">
        <div className="container">
          <div className="entry-list">
            {insights.map((insight) => (
              <InsightCard key={insight.slug} insight={insight} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
