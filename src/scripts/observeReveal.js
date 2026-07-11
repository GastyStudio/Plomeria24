/**
 * observeReveal.js
 * Utilidad compartida: activa animaciones suaves de aparición (fade + slide up)
 * cuando un elemento con la clase .reveal entra en el viewport.
 * Respeta prefers-reduced-motion delegando en el CSS (que ya neutraliza las
 * transiciones), y no bloquea el render inicial de la página.
 */
export function initScrollReveal(root = document) {
  const targets = root.querySelectorAll('.reveal');
  if (!targets.length) return;

  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach((el) => observer.observe(el));
}
