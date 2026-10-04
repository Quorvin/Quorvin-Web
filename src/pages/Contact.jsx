import { useState } from 'react'
import SEO from '../components/SEO'
import Button from '../components/Button'
import { SITE, whatsappLink } from '../config/site'
import '../styles/contact.css'

// Optional: set VITE_CONTACT_ENDPOINT in .env (for example a Formspree URL)
// and the form posts there. Without it, the form opens WhatsApp with the
// message already written, so it still works with no backend.
const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || ''

const EMPTY = { name: '', email: '', company: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | sending | sent | whatsapp | error

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()

    if (!CONTACT_ENDPOINT) {
      const text = [
        `Hi Quorvin, I'm ${form.name}${form.company ? ` from ${form.company}` : ''}.`,
        form.message,
        `Reply to: ${form.email}`,
      ].join('\n\n')
      window.open(whatsappLink(text), '_blank', 'noopener')
      setStatus('whatsapp')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      setForm(EMPTY)
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Talk to Quorvin about an AI, data or web project."
        path="/contact"
      />

      <header className="page-head">
        <div className="container">
          <h1 className="page-head__title">Tell us the problem.</h1>
          <p className="page-head__lede">
            A few lines about what is not working is enough. We reply with questions.
          </p>
        </div>
      </header>

      <section className="section section--paper">
        <div className="container contact">
          <dl className="contact-facts">
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </dd>
            </div>
            <div>
              <dt>WhatsApp</dt>
              <dd>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  {SITE.whatsappDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>
                {SITE.city}, {SITE.country}
              </dd>
            </div>
          </dl>

          <form onSubmit={onSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={onChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={onChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="company">Company (optional)</label>
              <input
                id="company"
                name="company"
                autoComplete="organization"
                value={form.company}
                onChange={onChange}
              />
            </div>
            <div className="field">
              <label htmlFor="message">What problem do you want to solve?</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={onChange}
                required
              />
            </div>

            <Button type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending' : 'Send message'}
            </Button>

            <div aria-live="polite">
              {status === 'sent' && (
                <p className="form-status form-status--ok">Message sent. We will reply soon.</p>
              )}
              {status === 'whatsapp' && (
                <p className="form-status form-status--ok">
                  WhatsApp opened with your message. Press send there to finish.
                </p>
              )}
              {status === 'error' && (
                <p className="form-status form-status--error">
                  We could not send your message. Email {SITE.email} or chat on WhatsApp instead.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
