// about.js - robust loader (safe: does NOT rewrite your content strings, only populates)
(() => {
  const params = new URLSearchParams(location.search);
  // support both ?app=... and ?page=... query param styles
  const app = (params.get('app') || params.get('page') || 'ecosystem').toLowerCase();

  // ---------------------------
  // CONTENT (keep your text exactly here)
  // Replace this content object with your exact copy if you store it elsewhere.
  // ---------------------------
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
  // ---------------------------

  const sel = content[app] || content.ecosystem;

  // Find a few possible elements (supports different HTML templates)
  const hero = document.getElementById('hero') || document.querySelector('.hero') || null;
  const titleEl = document.getElementById('aboutTitle') || document.querySelector('.title') || document.querySelector('.app-title') || null;
  const subtitleEl = document.getElementById('aboutSubtitle') || document.querySelector('.subtitle') || null;
  const textEl = document.getElementById('aboutText') || document.querySelector('.about-text') || document.querySelector('.about-box p') || null;
  const appsBtn = document.getElementById('appsBtn') || document.querySelector('.about-btn') || null;
  const backBtn = document.getElementById('backBtn') || document.querySelector('.back-btn') || document.querySelector('.about-btn[href*="index"]') || null;

  // HERO background + gold glow class (do not change image path)
  if (hero && sel.bg) {
    hero.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.40), rgba(0,0,0,0.40)), url('${sel.bg}')`;
    hero.style.backgroundSize = 'cover';
    hero.style.backgroundPosition = 'center top';
    hero.classList.add('hero-gold-glow'); // relies on .hero-gold-glow in CSS
  }

  // Populate text fields (DO NOT modify the content strings)
  if (titleEl && sel.title) titleEl.textContent = sel.title;
  if (subtitleEl && sel.subtitle) subtitleEl.textContent = sel.subtitle;
  if (textEl && sel.text) textEl.textContent = sel.text;

  // Buttons: add gold glow class if present (CSS must contain .gold-glow)
  if (appsBtn) appsBtn.classList.add('gold-glow');
  if (backBtn) backBtn.classList.add('gold-glow');

  // Back button safe handler
  if (backBtn) {
    backBtn.addEventListener('click', (e) => {
      if (history.length > 1) {
        e.preventDefault();
        history.back();
      } else {
        // fall back to index
        location.href = './index.html';
      }
    });
  }

  // Scroll logic: desktop freeze, mobile allow
  const isMobile = /iPhone|Android|Mobile|iPad/i.test(navigator.userAgent);
  if (!isMobile) {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  } else {
    document.documentElement.style.overflowY = 'auto';
    document.body.style.overflowY = 'auto';
  }

  console.log('about.js: loaded for', app);
})();
