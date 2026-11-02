// Shadowhawk Equine: English / Te Reo Māori toggle
// Every element with data-i18n="key" gets its text from COPY[lang][key].
// Elements with data-i18n-aria-label="key" get their aria-label swapped.

const COPY = {
  "en": {
    "lessons": "Programmes",
    "about": "Our story",
    "trainers": "Our team",
    "herd": "The herd",
    "supportersNav": "Supporters",
    "book": "Book a lesson",
    "heroEyebrow": "Te Ngae Road, Rotorua · Since 2014",
    "heroTitle": "Above all else, we seek connection.",
    "heroAlt": "I runga ake i ngā mea katoa, e rapu hononga ana mātou.",
    "heroSub": "Equine-assisted learning, therapy and riding programmes in Rotorua for tamariki, rangatahi and adults.",
    "seeProgrammes": "Explore programmes",
    "meetHerd": "Meet the herd",
    "call": "Or call us on",
    "purpose": "Our purpose",
    "mission": "“To foster holistic growth and healing through the transformative connection between horses and people.”",
    "missionLabel": "Our mission",
    "missionShort": "Holistic wellness through horses and mindfulness.",
    "offer": "What we offer",
    "offerTitle": "Programmes that grow confidence and connection",
    "comingSoon": "In development",
    "aboutTitle": "Our untold story",
    "trainersTitle": "Meet Mercy & Natasha",
    "herdTitle": "Four legs, big personalities",
    "galleryEyebrow": "Gallery",
    "galleryTitle": "Life at Shadowhawk",
    "galleryMore": "More on Instagram",
    "newRider": "New to equiNZone?",
    "firstTitle": "Your first lesson, step by step",
    "contact": "Contact",
    "contactTitle": "Let’s talk",
    "send": "Send enquiry",
    "follow": "Follow the herd",
    "socialTitle": "Follow the herd online",
    "explore": "Explore",
    "openMaps": "Open in Google Maps",
    "sponsorEyebrow": "Gratitude",
    "sponsorTitle": "Thanks to our supporters",
    "sponsorCtaTitle": "Every little bit counts",
    "sponsorCtaBody": "Donations of time, money, items or skills help fund places in our programmes for the young people who need them most.",
    "sponsorCta": "Offer your support",
    // Scrolling banner: change the wording here (and in "mi" below). index.html picks it up.
    "banner": "Lessons now open · Only 2 spots left · Mondays 4pm–6pm",
    "bannerCta": "Book now"
  },
  "mi": {
    "lessons": "Ngā kaupapa",
    "about": "Tā mātou kōrero",
    "trainers": "Tā mātou rōpū",
    "herd": "Ngā hōiho",
    "supportersNav": "Ngā kaitautoko",
    "book": "Tono akoranga",
    "heroEyebrow": "Te Ngae Road, Rotorua · Mai i te 2014",
    "heroTitle": "I runga ake i ngā mea katoa, e rapu hononga ana mātou.",
    "heroAlt": "Above all else, we seek connection.",
    "heroSub": "He akoranga, he haumanu, he kaupapa eke hōiho ki Rotorua mō ngā tamariki, rangatahi me ngā pakeke.",
    "seeProgrammes": "Tirohia ngā kaupapa",
    "meetHerd": "Tūtaki ki ngā hōiho",
    "call": "Waea mai rānei ki",
    "purpose": "Tō mātou kaupapa",
    "mission": "“Kia tipu, kia ora te tangata, mā te hononga i waenga i te hōiho me te tangata.”",
    "missionLabel": "Tō mātou whakatakanga",
    "missionShort": "Te oranga tonu mā te hōiho me te ngākau māhaki.",
    "offer": "Ā mātou ratonga",
    "offerTitle": "He kaupapa hei whakatipu i te māia me te hononga",
    "comingSoon": "Kei te whakawhanakehia",
    "aboutTitle": "Tā mātou kōrero huna",
    "trainersTitle": "Tūtaki ki a Mercy rāua ko Natasha",
    "herdTitle": "He āhua motuhake tō ia hōiho",
    "galleryEyebrow": "Ngā whakaahua",
    "galleryTitle": "Te noho ki Shadowhawk",
    "galleryMore": "He maha atu ki Instagram",
    "newRider": "He tauhou ki equiNZone?",
    "firstTitle": "Tō akoranga tuatahi",
    "contact": "Whakapā mai",
    "contactTitle": "Me kōrero tāua",
    "send": "Tukuna",
    "follow": "Whai mai i a mātou",
    "socialTitle": "Whai mai i ā mātou hōiho",
    "explore": "Tirohia",
    "openMaps": "Whakatuwheratia ki Google Maps",
    "sponsorEyebrow": "He mihi",
    "sponsorTitle": "Ngā mihi ki ā mātou kaitautoko",
    "sponsorCtaTitle": "Ahakoa he iti, he pounamu",
    "sponsorCtaBody": "Mā ō koha wā, moni, taonga, pūkenga rānei e tautoko ngā wāhi mō ngā rangatahi e matea ana.",
    "sponsorCta": "Tautoko mai",
    "banner": "Kua tuwhera ngā akoranga · E 2 noa ngā wāhi · Ngā Rāhina 4pm–6pm",
    "bannerCta": "Tono mai"
  }
};

function setLanguage(lang) {
  const strings = COPY[lang] || COPY.en;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = strings[el.dataset.i18n];
    if (value !== undefined) el.textContent = value;
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    const value = strings[el.dataset.i18nAriaLabel];
    if (value !== undefined) el.setAttribute('aria-label', value);
  });
  // the line under the hero heading is always in the *other* language
  document.querySelectorAll('[data-alt-lang]').forEach((el) => {
    el.lang = lang === 'mi' ? 'en' : 'mi';
  });
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const active = btn.dataset.setLang === lang;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
  try { localStorage.setItem('shq-lang', lang); } catch (e) { /* storage blocked: ignore */ }
  fitNav(); // te reo labels are longer, so the nav may need to collapse (or expand) again
}

// ---------- Header menu ----------
// The full nav shows when it fits on one row. When it doesn't (phones, or te reo on a smaller
// laptop) html gets the "nav-compact" class and the links move behind the Menu button.
let fitNav = () => {};

function setupNav() {
  const root = document.documentElement;
  const nav = document.querySelector('.site-nav');
  if (!nav) return;
  const toggle = nav.querySelector('.menu-toggle');
  const menu = nav.querySelector('.nav-menu');

  const isOpen = () => nav.classList.contains('is-open');
  function setOpen(open) {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }

  fitNav = () => {
    root.classList.remove('nav-compact');
    const items = [
      nav.querySelector('.brand'),
      ...menu.querySelector('.nav-links').children,
      menu.querySelector('.lang-toggle'),
      menu.querySelector('.nav-cta'),
    ];
    const middle = (el) => { const r = el.getBoundingClientRect(); return r.top + r.height / 2; };
    const row = middle(items[0]);
    const fits = items.every((el) => Math.abs(middle(el) - row) < 12);
    root.classList.toggle('nav-compact', !fits);
    if (fits) setOpen(false);
  };

  toggle.addEventListener('click', () => setOpen(!isOpen()));

  // close after choosing a link, on Escape, or on a click anywhere outside the nav
  menu.addEventListener('click', (e) => {
    if (e.target.closest('a') && root.classList.contains('nav-compact')) setOpen(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) { setOpen(false); toggle.focus(); }
  });
  document.addEventListener('click', (e) => {
    if (isOpen() && !nav.contains(e.target)) setOpen(false);
  });

  // only re-measure when the width changes (phones fire resize as the address bar hides)
  let lastWidth = window.innerWidth;
  window.addEventListener('resize', () => {
    if (window.innerWidth === lastWidth) return;
    lastWidth = window.innerWidth;
    requestAnimationFrame(fitNav);
  });
  if (document.fonts) document.fonts.ready.then(fitNav);
  fitNav();
}

// ---------- Enquire / Book buttons pre-select the programme in the contact form ----------
function setupProgrammeLinks() {
  const select = document.getElementById('f-type');
  if (!select) return;
  document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-programme]');
    if (!link) return;
    const match = [...select.options].find((option) => option.value === link.dataset.programme);
    if (match) select.value = match.value;
  });
}

// ---------- Scrolling banner ----------
// index.html holds one banner item; repeat it to fill the strip. The animation slides the strip
// left by half its width, so it needs an even number of identical copies.
function setupBanner() {
  const banner = document.querySelector('.banner');
  if (!banner) return;
  const track = banner.querySelector('.marquee-track');
  const item = track.querySelector('.marquee-item');
  for (let i = 1; i < 8; i++) track.appendChild(item.cloneNode(true));

  // pause / play, remembered between visits
  const toggle = banner.querySelector('.banner-toggle');
  const setPaused = (paused) => {
    banner.classList.toggle('is-paused', paused);
    toggle.setAttribute('aria-pressed', String(paused));
    try { localStorage.setItem('shq-banner-paused', paused ? '1' : '0'); } catch (e) { /* ignore */ }
  };
  let paused = false;
  try { paused = localStorage.getItem('shq-banner-paused') === '1'; } catch (e) { /* ignore */ }
  setPaused(paused);
  toggle.hidden = false;
  toggle.addEventListener('click', () => setPaused(toggle.getAttribute('aria-pressed') !== 'true'));
}

document.addEventListener('DOMContentLoaded', () => {
  setupBanner();
  setupNav();
  setupProgrammeLinks();
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.setLang));
  });
  let saved = 'en';
  try { saved = localStorage.getItem('shq-lang') || 'en'; } catch (e) { /* ignore */ }
  // always apply, so the banner and every other translated string come from COPY above
  setLanguage(saved);
});
