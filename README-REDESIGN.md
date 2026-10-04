# Quorvin redesign - how to use

This replaces the `src/` folder of the first build. It keeps your own edits
(Bandung, your WhatsApp number) and moves them into one file.

## Steps

1. Copy this `src/` folder over your repo's `src/` folder.
   Delete `src/components/ServiceCard.jsx` and `src/components/LogTransform.jsx`
   if they still exist (they are replaced by `ServiceRow.jsx` and `LogDemo.jsx`).
2. Open `index.html`. Copy the font `<link>` tags and the `<title>` / description
   into your own `index.html`. Keep your favicon link.
3. Check dependencies: `npm install react-router-dom react-helmet-async`
4. `npm run dev`

## Change company facts in one place

`src/config/site.js` holds the email, WhatsApp number, city and domain.
The header, footer, contact page, WhatsApp button and SEO tags all read from it.

## Still to do

- Confirm the email in `src/config/site.js` is a real mailbox.
- Add `public/og-image.jpg` (1200 x 630) for link previews.
- Check the tech list in `src/pages/About.jsx`.
- Contact form: with no `VITE_CONTACT_ENDPOINT` in `.env`, it opens WhatsApp with
  the message already written. Add a Formspree URL later if you want email delivery.
- Deploy: add the rewrite rule from the first README so refreshing `/about` does not 404.
