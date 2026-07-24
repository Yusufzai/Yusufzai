document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Navbar scroll state ---------- */
const navbar = document.getElementById('navbar');
function onScrollNav() {
  const menuOpen = document.getElementById('mobileMenu').classList.contains('open');
  if (window.scrollY > 20 || menuOpen) {
    navbar.classList.add('bg-cream/90', 'dark:bg-ink/90', 'backdrop-blur-md', 'shadow-sm');
  } else {
    navbar.classList.remove('bg-cream/90', 'dark:bg-ink/90', 'backdrop-blur-md', 'shadow-sm');
  }
}
document.addEventListener('scroll', onScrollNav, { passive: true });
onScrollNav();

/* ---------- Dark mode toggle ---------- */
const themeToggle = document.getElementById('themeToggle');
const themeToggleMobile = document.getElementById('themeToggleMobile');
const rootEl = document.documentElement;

function setTheme(isDark) {
  rootEl.classList.toggle('dark', isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function toggleTheme() {
  setTheme(!rootEl.classList.contains('dark'));
}

if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);

/* ---------- Mobile menu ---------- */
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const iconHamburger = document.getElementById('iconHamburger');
const iconClose = document.getElementById('iconClose');

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  iconHamburger.classList.remove('hidden');
  iconClose.classList.add('hidden');
  menuToggle.setAttribute('aria-expanded', 'false');
  onScrollNav();
}

menuToggle.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  iconHamburger.classList.toggle('hidden', isOpen);
  iconClose.classList.toggle('hidden', !isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  onScrollNav();
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

/* ---------- Scroll-triggered reveal ---------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ---------- Animated skill bars ---------- */
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target.querySelector('.skill-fill');
      if (fill) fill.style.width = fill.dataset.width + '%';
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('.skill-row').forEach(el => skillObserver.observe(el));

/* ---------- Scroll-spy active nav link ---------- */
const sections = ['home', 'about', 'skills', 'projects', 'contact']
  .map(id => document.getElementById(id))
  .filter(Boolean);
const navLinks = document.querySelectorAll('.nav-link');

const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
      });
    }
  });
}, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

sections.forEach(section => spyObserver.observe(section));

/* ---------- Contact form validation ---------- */
const contactForm = document.getElementById('contactForm');
const formFields = document.getElementById('formFields');
const formSuccess = document.getElementById('formSuccess');

function setError(input, message) {
  const wrapper = input.closest('div');
  const errorEl = wrapper.querySelector('.error-msg');
  if (message) {
    input.classList.add('border-red-500');
    errorEl.textContent = message;
    errorEl.classList.remove('hidden');
  } else {
    input.classList.remove('border-red-500');
    errorEl.classList.add('hidden');
  }
}

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let isValid = true;

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const projectType = document.getElementById('projectType');
  const budget = document.getElementById('budget');
  const message = document.getElementById('message');

  if (!name.value.trim()) { setError(name, 'Please enter your name.'); isValid = false; }
  else setError(name, '');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) { setError(email, 'Please enter your email.'); isValid = false; }
  else if (!emailRegex.test(email.value.trim())) { setError(email, 'Please enter a valid email address.'); isValid = false; }
  else setError(email, '');

  if (!projectType.value) { setError(projectType, 'Please select a project type.'); isValid = false; }
  else setError(projectType, '');

  if (!budget.value) { setError(budget, 'Please select a budget range.'); isValid = false; }
  else setError(budget, '');

  if (!message.value.trim()) { setError(message, 'Please tell me a bit about your project.'); isValid = false; }
  else setError(message, '');

  if (isValid) {
    formFields.classList.add('hidden');
    formSuccess.classList.remove('hidden');
    contactForm.reset();
  }
});

/* ---------- Back to top ---------- */
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
