const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const navBackdrop = document.querySelector('.nav-backdrop');

const backToTop = document.querySelector('.back-to-top');
const navLinks = document.querySelectorAll('.nav__list a');

const closeMenu = () => {
  if (!nav || !navToggle || !navBackdrop) return;
  nav.classList.remove('is-open');
  navToggle.classList.remove('is-active');
  navToggle.setAttribute('aria-expanded', 'false');
  navBackdrop.classList.remove('is-visible');
};

const openMenu = () => {
  if (!nav || !navToggle || !navBackdrop) return;
  nav.classList.add('is-open');
  navToggle.classList.add('is-active');
  navToggle.setAttribute('aria-expanded', 'true');
  navBackdrop.classList.add('is-visible');
};

navToggle?.addEventListener('click', () => {
  if (nav.classList.contains('is-open')) {
    closeMenu();
  } else {
    openMenu();
  }
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

navBackdrop?.addEventListener('click', closeMenu);

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
  }
});

document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));

const updateBackToTop = () => {
  backToTop?.classList.toggle('is-visible', window.scrollY > 300);
};

window.addEventListener('scroll', updateBackToTop, { passive: true });
updateBackToTop();

backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
