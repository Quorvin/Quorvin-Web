import SEO from '../components/SEO'
import UseCaseCard from '../components/UseCaseCard'
import CTABanner from '../components/CTABanner'
import { useCases } from '../data/useCases'

export default function UseCasesIndex() {
  return (
    <>
      <SEO
        title="Use cases"
        description="How Quorvin's AI and data systems work in practice, by industry."
        path="/use-cases"
      />

      <header className="page-head">
        <div className="container">
          <h1 className="page-head__title">Where the work actually runs.</h1>
          <p className="page-head__lede">
            Real operational problems and what we built for them. We add a page after each
            engagement.
          </p>
        </div>
      </header>

      <section className="section section--paper">
        <div className="container">
          <div className="entry-list">
            {useCases.map((useCase) => (
              <UseCaseCard key={useCase.slug} useCase={useCase} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Want to be the next one on this page?" />
    </>
  )
}
