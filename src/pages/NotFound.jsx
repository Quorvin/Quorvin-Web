import SEO from '../components/SEO'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found" />
      <header className="page-head">
        <div className="container">
          <h1 className="page-head__title">This page does not exist.</h1>
          <p className="page-head__lede">The link may be broken, or the page may have moved.</p>
          <div className="btn-group" style={{ marginTop: 32 }}>
            <Button to="/">Go to the home page</Button>
            <Button to="/contact" variant="ghost">
              Contact us
            </Button>
          </div>
        </div>
      </header>
    </>
  )
}
