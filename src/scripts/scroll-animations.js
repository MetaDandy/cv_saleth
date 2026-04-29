/**
 * SCRIPT DE ANIMACIONES DE SCROLL
 * Funciona en TODOS los navegadores (Chrome, Firefox, Safari, Edge, etc.)
 * Usa Intersection Observer API para detectar elementos en pantalla
 */

// Opciones para el Intersection Observer
const observerOptions = {
  threshold: 0.1, // Se ejecuta cuando el 10% del elemento es visible
  rootMargin: '0px 0px -50px 0px', // Empieza 50px antes de llegar a pantalla
};

// Crear el observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // Si el elemento entra en pantalla
    if (entry.isIntersecting) {
      // Agregar clase .visible para activar la animación
      entry.target.classList.add('visible');
      
      // OPCIONAL: dejar de observar para que no se re-ejecute
      // observer.unobserve(entry.target);
    } else {
      // OPCIONAL: remover clase cuando sale de pantalla para re-ejecutar al volver
      entry.target.classList.remove('visible');
    }
  });
}, observerOptions);

// Seleccionar todos los elementos con animaciones
const animatedElements = document.querySelectorAll(
  '.animate-fade-in-up, .animate-fade-in-down, .animate-fade-in, .animate-scale-in, ' +
  '.animate-slide-in-left, .animate-slide-in-right, ' +
  '.scroll-parallax, .scroll-scale, .scroll-rotate, .scroll-fade'
);

// Observar cada elemento
animatedElements.forEach((element) => {
  observer.observe(element);
});
