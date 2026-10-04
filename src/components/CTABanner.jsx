import Button from './Button'
import { whatsappLink } from '../config/site'

// Renders its own full-width section, so place it directly inside a page.
export default function CTABanner({
  title = 'Have a problem worth automating?',
  text = 'Tell us what is not working. We reply with questions, not a sales deck.',
}) {
  return (
    <section className="section section--navy cta-band" aria-labelledby="cta-title">
      <div className="container cta-band__inner">
        <div>
          <h2 id="cta-title" className="cta-band__title">
            {title}
          </h2>
          <p className="cta-band__text">{text}</p>
        </div>
        <div className="btn-group">
          <Button href={whatsappLink()}>Chat on WhatsApp</Button>
          <Button to="/contact" variant="ghost">
            Send a message
          </Button>
        </div>
      </div>
    </section>
  )
}
