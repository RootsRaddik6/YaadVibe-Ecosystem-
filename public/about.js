// You can add interactive or animated features later.
// For now, this keeps about.js valid and ready.
console.log("About page loaded");
/* about.js - central about loader
   Usage: /about.html?app=yaadvibe  OR ?app=yaadlife ?app=purvibe ?app=irievibe ?app=ecosystem
*/

(() => {
  const params = new URLSearchParams(location.search);
  const app = (params.get('app') || 'ecosystem').toLowerCase();

  // Map of app -> { title, subtitle, text, bg }
  const content = {
    ecosystem: {
      title: 'ABOUT 1Drop Ecosystem',
      subtitle: 'The 1Drop Ecosystem',
      text: `1Drop (YaadVibe family) is a Jamaican-born digital ecosystem that returns control, culture and much more of tourism value back to local communities. 
This platform blends immersive experiences, lightweight wallet flows, and content channels to help Jamaicans capture more direct value while delivering visitors an authentic, reliable experience.`,
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
      subtitle: 'PurVibe — content & creator channel',
      text: `PurVibe is a curated channel for creators and channels — playlists, releases, and scheduled programming that feel like a broadcast channel for your tastes. 
It’s designed to let creators control drops and playlists while audiences discover and follow curated streams.`,
      bg: '/images/DCE3C919-9E51-49D6-8E7F-51B1F080CA31.jpeg'
    },
    irievibe: {
      title: 'ABOUT IrieVibe',
      subtitle: 'IrieVibe — local services & beacons',
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

  // Set background (leave image alone as requested)
  if (hero && sel.bg) {
    hero.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('${sel.bg}')`;
    hero.style.backgroundSize = 'cover';
    hero.style.backgroundPosition = 'center';
  }

  // Set copy (title/subtitle/text)
  if (titleEl) titleEl.textContent = sel.title;
  if (subtitleEl) subtitleEl.textContent = sel.subtitle;
  if (textEl) textEl.textContent = sel.text;

  // If we want Apps button to go to cards.html, keep default.
  // Back button: prefer history.back() when available to preserve UX
  backBtn.addEventListener('click', (e) => {
    // if there's a real history entry, go back, else go home
    if (history.length > 1) {
      e.preventDefault();
      history.back();
    } // otherwise link's href will work (index.html)
  });

  // Small enhancement: set 'apps' button visible (already linked in HTML)
})();
