// about.js - central about loader
// Usage: /about.html?app=yaadvibe  OR ?app=yaadlife ?app=purvibe ?app=irievibe ?app=ecosystem

(() => {
  const params = new URLSearchParams(location.search);
  const app = (params.get('app') || 'ecosystem').toLowerCase();

  // -----------------------------
  // CONTENT — TEXT UNTOUCHED
  // -----------------------------
  const content = {
    ecosystem: {
      title: 'ABOUT - Ecosystems',
      subtitle: 'The 1Drop Ecosystems',
      text: `YaadVibe is a Jamaican-born digital ecosystem that returns control, culture and much more of tourism value back to local communities. 
This platform blends immersive experiences, web-wallet flows, and content channels to help Jamaicans capture more direct value while delivering visitors an authentic, reliable experience.`,
      bg: '/IMG_1125.jpeg'
    },
    yaadvibe: {
      title: 'ABOUT YaadVibe',
      subtitle: 'YaadVibe — flagship DApp',
      text: `YaadVibe is the flagship immersive Jamaican booking experience. It combines curated stays, local services, and cultural programming into one DApp.
Built to help communities keep more tourism revenue locally, YaadVibe connects travelers to real providers, curated guides, and tailored experiences — while keeping user privacy and local ownership in mind.`,
      bg: '/images/A10813F1-F3F5-4EB1-8BD5-04E1119116BE.jpeg'
    },
    yaadlife: {
      title: 'ABOUT YaadLife Lite',
      subtitle: 'YaadLife Lite — fast TON access',
      text: `YaadLife Lite is a fast, mobile-first version built for quick access and transactions on TON. It keeps core features compact — payments, light profiles, and instant confirmations — ideal for fast check-ins and low-bandwidth environments.`,
      bg: '/images/C9577413-ED2C-4C08-BFCB-9294F736F211.jpeg'
    },
    purvibe: {
      title: 'ABOUT PurVibe',
      subtitle: 'PurVibe — Content Channel Curator',
      text: `PurVibe is a curator of content channel — playlists, releases, and scheduled programming that feel like a broadcast channel for your tastes. 
It’s designed to let users control scheduling content while it streams from your subscriptions.`,
      bg: '/images/DCE3C919-9E51-49D6-8E7F-51B1F080CA31.jpeg'
    },
    irievibe: {
      title: 'ABOUT IrieVibe',
      subtitle: 'IrieVibe — local flava',
      text: `IrieVibe supports on-the-ground discovery: food, rides, reservations, and local tips tailored to nearby users. It focuses on practical, mobile-first bookings and real-time availability to help communities offer better local services.`,
      bg: '/images/cards/irievibe.jpeg'
    }
  };
    

  const sel = content[app] || content.ecosystem;

  const hero = document.getElementById('hero');
  const titleEl = document.getElementById('aboutTitle');
  const subtitleEl = document.getElementById('aboutSubtitle');
  const textEl = document.getElementById('aboutText');
  const appsBtn = document.getElementById('appsBtn');
  const backBtn = document.getElementById('backBtn');

  /* ----------------------------------------------
     FIX 1 — HERO IMAGE + GOLDEN GLOW
     (Also forces hero to always show title block)
  ----------------------------------------------- */
  if (hero && sel.bg) {
    hero.style.backgroundImage =
      `linear-gradient(rgba(0,0,0,0.40), rgba(0,0,0,0.40)), url('${sel.bg}')`;
    hero.style.backgroundSize = 'cover';
    hero.style.backgroundPosition = 'center top';
    hero.style.display = 'flex';
    hero.style.alignItems = 'flex-end';
    hero.style.paddingBottom = '32px';

    hero.classList.add('hero-gold-glow');
  }

  /* ----------------------------------------------
     FIX 2 — SET TEXT EXACTLY (NO EDITING)
  ----------------------------------------------- */
  if (titleEl) titleEl.textContent = sel.title;
  if (subtitleEl) subtitleEl.textContent = sel.subtitle;
  if (textEl) textEl.textContent = sel.text;

  /* ----------------------------------------------
     FIX 3 — GOLD GLOW BUTTONS
  ----------------------------------------------- */
  if (appsBtn) appsBtn.classList.add('gold-glow');
  if (backBtn) backBtn.classList.add('gold-glow');

  /* ----------------------------------------------
     FIX 4 — BACK BUTTON
  ----------------------------------------------- */
  if (backBtn) {
    backBtn.addEventListener('click', (e) => {
      if (history.length > 1) {
        e.preventDefault();
        history.back();
      } else {
        location.href = "/index.html";
      }
    });
  }

  /* ---------------------------------------------------
     FIX 5 — SCROLLING: Desktop OFF, Mobile ON
  --------------------------------------------------- */
  const isMobile = /iPhone|Android|Mobile|iPad/i.test(navigator.userAgent);

  if (!isMobile) {
    document.body.style.overflow = 'hidden';   // freeze
  } else {
    document.body.style.overflow = 'auto';     // normal
  }

  console.log("About page loaded with fixed hero, glow, and scroll logic");
})();
