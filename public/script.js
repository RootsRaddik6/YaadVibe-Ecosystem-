// Small helpers: menu toggle and smooth scroll
document.addEventListener('DOMContentLoaded', function(){
  const menuBtn = document.getElementById('menuToggle');
  if(menuBtn){
    menuBtn.addEventListener('click', () => {
      alert('Menu placeholder — you can wire this to your nav later.');
    });
  }

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const id = this.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el) el.scrollIntoView({ behavior: 'smooth', block:'start' });
    });
  });
});
