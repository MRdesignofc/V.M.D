document.addEventListener('DOMContentLoaded', () => {
  // Reveal cards on scroll
  const cards = document.querySelectorAll('.card');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  cards.forEach((card) => {
    const delay = card.dataset.delay || 0;
    card.style.transitionDelay = `${delay}ms`;
    observer.observe(card);
  });

  // Change nav background on scroll
  const nav = document.querySelector('.nav');
  const toggleNavBg = () => {
    if (window.scrollY > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  toggleNavBg();
  window.addEventListener('scroll', toggleNavBg);

  // Basic form submission handler (prevent default for demo)
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Mensagem enviada! Em breve entraremos em contato.');
      form.reset();
    });
  }
});