document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const navToggle = document.getElementById('navToggle');
  const lidNav = document.getElementById('lidNav');
  if (navToggle && lidNav) {
    navToggle.addEventListener('click', () => {
      const open = lidNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
  }

  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('visible'));
  }

  // Botón de nuez moscada con chispas naranja/morado
  const sugarBtn = document.getElementById('sugarBtn');
  const sugarCount = document.getElementById('sugarCount');
  let sprinkles = 0;

  if (sugarBtn && sugarCount) {
    sugarBtn.addEventListener('click', (event) => {
      sprinkles += 1;
      sugarCount.textContent = String(sprinkles);
      const rect = sugarBtn.getBoundingClientRect();
      const originX = event.clientX || rect.left + rect.width / 2;
      const originY = event.clientY || rect.top + rect.height / 2;

      for (let i = 0; i < 10; i++) {
        const speck = document.createElement('span');
        speck.className = 'cinnamon-speck';
        speck.style.left = `${originX + (Math.random() - 0.5) * 90}px`;
        speck.style.top = `${originY + (Math.random() - 0.5) * 20}px`;
        speck.style.background = i % 2 === 0 ? '#ff6b1a' : '#7c3aed';
        document.body.appendChild(speck);
        setTimeout(() => speck.remove(), 950);
      }
    });
  }

  // Sabiduría de los Nóctulos
  const quotes = [
    '"Quien bebe NoctuCafé bajo la luna llena nunca vuelve a temerle a los lunes."',
    '"Los Nóctulos dicen que el secreto de una buena poción de calabaza es tostarla con paciencia."',
    '"Un NoctuPeluche en el escritorio aumenta la creatividad nocturna en un 300%."'
  ];
  const quoteEl = document.getElementById('baristaQuote');
  const nextQuoteBtn = document.getElementById('nextQuoteBtn');
  let qIdx = 0;

  if (quoteEl && nextQuoteBtn) {
    nextQuoteBtn.addEventListener('click', () => {
      qIdx = (qIdx + 1) % quotes.length;
      quoteEl.textContent = quotes[qIdx];
    });
  }

  // Reserva visual de Merch Halloween
  const merchToast = document.getElementById('merchToast');
  document.querySelectorAll('.btn-merch').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.dataset.item || 'artículo';
      if (merchToast) {
        merchToast.textContent = `🦇 ¡Apartado imaginario confirmado! Tu "${item}" te espera en la barra embrujada.`;
      }
    });
  });

  // Formulario del caldero
  const napkinForm = document.getElementById('napkinForm');
  const formFeedback = document.getElementById('formFeedback');
  if (napkinForm && formFeedback) {
    napkinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('visitorName')?.value.trim() || 'visitante';
      formFeedback.textContent = `¡Gracias, ${name}! Los Nóctulos recibieron tu pergamino 🦇✨`;
      napkinForm.reset();
    });
  }
});
