import SEO from '../components/SEO'
import CTABanner from '../components/CTABanner'
import { SITE } from '../config/site'
import '../styles/about.css'

const VALUES = [
  {
    title: 'Small and real',
    text: 'We would rather ship something small that works on your real data than pitch a large platform first.',
  },
  {
    title: 'Explainable over impressive',
    text: 'An AI system that can say why it reached a conclusion is worth more to your team than one that only looks smart.',
  },
  {
    title: 'We build, not only advise',
    text: 'Our advice comes with working code behind it. We are a team that ships.',
  },
  {
    title: 'Data first',
    text: 'Most AI problems are data problems. We fix the layer underneath before we automate on top of it.',
  },
]

// TODO: make sure this list matches what you really use.
const STACK = ['Python', 'FastAPI', 'Groq', 'React', 'TypeScript', 'PostgreSQL']

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Quorvin is a small AI and data solutions team in Indonesia."
        path="/about"
      />

      <header className="page-head">
        <div className="container">
          <h1 className="page-head__title">A small team that builds.</h1>
          <p className="page-head__lede">
            Quorvin is based in {SITE.city}, {SITE.country}. We design and build AI and data
            solutions for teams that need a working system, not a slide deck.
          </p>
        </div>
      </header>

      <section className="section section--paper">
        <div className="container">
          <h2 className="section-title">How we work</h2>
          <ul className="values">
            {VALUES.map((v) => (
              <li className="values__item" key={v.title}>
                <h3 className="values__title">{v.title}</h3>
                <p className="values__text">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">What we build with</h2>
          <ul className="stack">
            {STACK.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner title="Want to work together?" />
    </>
  )
}
