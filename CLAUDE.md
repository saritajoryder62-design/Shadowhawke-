# Shadowhawk Equine website: handoff for Claude Code

This is a static landing page for **Shadowhawk Equine**, an equine-assisted learning, therapy and riding business on Te Ngae Road, Rotorua, Aotearoa New Zealand. It was exported from a design canvas. It already renders correctly on desktop and phone and the English / Te Reo Māori toggle works. The job now is to make every part of it **linked together and functional**, and get it ready to deploy.

## Project layout

```
index.html          the whole page (one long landing page, anchor-linked sections)
css/styles.css      colour tokens (:root), banner animation, hero background, toggle styles
js/main.js          COPY object (en + mi strings) and the language toggle
images/             photos and logo (cropped from Facebook screenshots, so they're low-res)
images/sponsors/    supporter logos
```

Sections in order, with their anchor ids: scrolling banner, nav, `#top` hero, purpose band, `#programmes`, `#about`, `#team`, `#gallery`, `#herd`, first-lesson steps, `#contact`, social feed, `#supporters`, footer.

## How the language toggle works

- Any element with `data-i18n="key"` gets its text from `COPY[lang][key]` in `js/main.js`.
- `data-i18n-aria-label="key"` swaps an aria-label.
- To translate more text, add a key to **both** `COPY.en` and `COPY.mi` and wrap the text in `<span data-i18n="key">`.
- Body paragraphs are English-only for now. The te reo text has **not** been reviewed by a fluent speaker yet, so don't add more without flagging it.

## Tasks (do these in order, and check each one in the browser)

1. **Contact form**: it currently does nothing. Make it submit for real. Preferred: Netlify Forms (add `name="enquiry"`, `method="POST"`, `data-netlify="true"`, a hidden `form-name` input, and `name` attributes on every field), with a thank-you message or `thanks.html`. Add `required` on name + email, and keep the existing `<label for>` pairs.
2. **Buttons and links**: check every `href` actually goes somewhere. All "Book a lesson", "Book now" and "Enquire" buttons should go to `#contact` and, ideally, pre-select the matching programme in the dropdown (e.g. `#contact?programme=camps` handled in JS, or `data-programme` on the button).
3. **Google Map**: the footer map is a drawn placeholder linking to Google Maps. Replace it with a real Google Maps `<iframe>` embed (lazy-loaded, with a `title`). Ask Sarita-Jo for the full street address first, because right now it just searches "Te Ngae Road, Rotorua".
4. **Mobile navigation**: on phones the nav wraps onto three lines and the sticky header takes up too much screen. Add a hamburger menu (a real `<button>` with `aria-expanded`, closes on link click and Escape) that holds the links and the language toggle. Keep the banner and the logo visible.
5. **Te reo nav overflow**: the Māori nav labels are longer and wrap on desktop. Make the nav handle both languages cleanly.
6. **Refactor styles**: most styling is inline `style=""` from the design export. Move repeated patterns into classes in `css/styles.css` (section, container, eyebrow, h2, card, button-primary, button-outline, pill), using the `:root` colour tokens. **Don't change how anything looks.** Compare before and after.
7. **Banner**: keep the scrolling marquee. Make it easy to edit (one place for the text, in `COPY`) and keep the reduced-motion fallback.
8. **SEO and sharing**: add Open Graph and Twitter meta (title, description, image), a `LocalBusiness` JSON-LD block (name, phone 021 628 274, email shadowhawkequine@gmail.com, address Te Ngae Road, Rotorua, social links), `robots.txt` and `sitemap.xml`.
9. **Images**: add `width`/`height` attributes and `loading="lazy"` below the fold. Leave the files themselves, because Shadowhawk will supply full-resolution originals later.
10. **Accessibility pass**: one `<h1>`, logical heading order, alt text, colour contrast (4.5:1), visible focus, keyboard-only walkthrough of the whole page.
11. **Deploy**: set up for Netlify (a `netlify.toml` is fine, or drag-and-drop). Make sure the forms work on the deployed site.

## Placeholders still waiting on real content (don't invent these)

Anything in `[square brackets]` is waiting for info from Shadowhawk:
- Mercy and Natasha Wallace: roles and photos
- Assuage Equine Therapy: session length, referral process
- Horse details for Philli and Phoenix, plus the cowboy-hat horse's name
- Next summer Break Away Camp dates

## Facts to keep accurate

- **Programmes and prices:**
  - equiNZone After School: $50, plus $10 travel. Mon–Fri, 3:30–5:30pm in school terms. Ages 8+. 5–6 riders with 2 instructors.
  - Break Away Camps: $400 per person. Mon–Fri, 9am–4pm. Ages 11+. Max 10.
  - Hōtaka Rangatahi Youth Programme: $1,800. Ages 13–24. 10 × 2-hour sessions.
  - Assuage Equine Therapy: enquire for details.
- **Supporters:** Waiariki Women's Refuge, Breath Infusion NZ (donates 9D breathwork), Papatūānuku Support Services.
- **Banner times:** the banner says "Mondays 4pm–6pm", but equiNZone runs 3:30–5:30pm. Sarita-Jo is confirming which is right. Don't change it without asking.

## Working style for this project

- Sarita-Jo prefers complete corrected files over partial diffs.
- Show changes in a live browser preview (e.g. VS Code Live Server) after each task.
- Plain HTML, CSS and JS only. No framework or build step unless she asks.
