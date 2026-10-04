import { whatsappLink } from '../config/site'

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      className="whatsapp-fab"
      target="_blank"
      rel="noopener noreferrer"
    >
      Chat on WhatsApp
    </a>
  )
}
