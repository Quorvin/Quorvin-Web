import { useParams, Navigate } from 'react-router-dom'
import SEO from '../components/SEO'
import CTABanner from '../components/CTABanner'
import { getUseCaseBySlug } from '../data/useCases'
import '../styles/use-cases.css'

export default function UseCaseDetail() {
  const { slug } = useParams()
  const useCase = getUseCaseBySlug(slug)

  if (!useCase) return <Navigate to="/use-cases" replace />

  return (
    <>
      <SEO title={useCase.title} description={useCase.excerpt} path={`/use-cases/${useCase.slug}`} />

      <header className="page-head">
        <div className="container">
          <h1 className="page-head__title" style={{ maxWidth: '24ch' }}>
            {useCase.title}
          </h1>
        </div>
      </header>

      <section className="section section--paper">
        <div className="container">
          <dl className="case-facts">
            <div>
              <dt>Industry</dt>
              <dd>{useCase.industry}</dd>
            </div>
            <div>
              <dt>Built with</dt>
              <dd>{useCase.stack.join(', ')}</dd>
            </div>
          </dl>

          <div className="case-section">
            <h2>The challenge</h2>
            <p>{useCase.challenge}</p>
          </div>
          <div className="case-section">
            <h2>What we built</h2>
            <p>{useCase.approach}</p>
          </div>
          <div className="case-section">
            <h2>The result</h2>
            <p>{useCase.outcome}</p>
          </div>

          <p className="case-note">
            This page describes how the system works. We share client names and figures only with
            permission. Ask us for details.
          </p>
        </div>
      </section>

      <CTABanner title="Have a similar problem?" />
    </>
  )
}
