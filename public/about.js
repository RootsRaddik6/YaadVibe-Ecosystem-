// about.js — simplified static version (no content injection)
(() => {

  // === ELEMENT HANDLES ===
  const hero = document.getElementById('hero') || document.querySelector('.hero');
  const appsBtn = document.getElementById('appsBtn') || document.querySelector('.about-btn');
  const backBtn = document.getElementById('backBtn') || document.querySelector('.back-btn');

  // === OPTIONAL BACKGROUND SUPPORT ===
  // If the hero block has a data-bg attribute, apply it.
  if (hero) {
    const bg = hero.getAttribute('data-bg');
    if (bg) {
      hero.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.40), rgba(0,0,0,0.40)), url('${bg}')`;
      hero.style.backgroundSize = 'cover';
      hero.style.backgroundPosition = 'center top';
      hero.classList.add('hero-gold-glow');
    }
  }

  // === BUTTON ENHANCEMENTS ===
  if (appsBtn) appsBtn.classList.add('gold-glow');
  if (backBtn) backBtn.classList.add('gold-glow');

  // Back button logic (safe fallback)
  if (backBtn) {
    backBtn.addEventListener('click', (e) => {
      if (history.length > 1) {
        e.preventDefault();
        history.back();
      } else {
        location.href = './index.html';
      }
    });
  }

  // === DEVICE SCROLL BEHAVIOR ===
  const isMobile = /iPhone|Android|Mobile|iPad/i.test(navigator.userAgent);
  if (!isMobile) {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  } else {
    document.documentElement.style.overflowY = 'auto';
    document.body.style.overflowY = 'auto';
  }

  console.log("about.js: static mode loaded");

})();
