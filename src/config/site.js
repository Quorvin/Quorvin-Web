// One place for company facts. Change a value here and the header, footer,
// contact page, WhatsApp button and SEO tags all update together.

export const SITE = {
  name: 'Quorvin',
  url: 'https://quorvin.biz.id',
  description:
    'Quorvin builds AI and data solutions that turn operational data into clear answers.',
  email: 'techschole@gmail.com',
  whatsappNumber: '6287896830282', // digits only, country code first
  whatsappDisplay: '+62 878-9683-0282',
  city: 'Bandung',
  country: 'Indonesia',
}

export const whatsappLink = (message = "Hi Quorvin, I'd like to talk about a project.") =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`
