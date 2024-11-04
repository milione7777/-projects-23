// Функція для лінивого завантаження зображень
document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll("img.lazy-load");

  // Створюємо IntersectionObserver
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src; // Встановлюємо значення src з data-src
              img.onload = () => img.classList.add("loaded"); // Додаємо клас для анімації після завантаження
              observer.unobserve(img); // Перестаємо спостерігати за зображенням
          }
      });
  }, {
      rootMargin: "50px", // Можна налаштувати відступи завчасного завантаження
      threshold: 0.1
  });

  // Спостерігаємо за кожним зображенням з атрибутом data-src
  lazyImages.forEach(img => observer.observe(img));

  // Завантаження зображень при натисканні на кнопку
  document.getElementById("loadImages").addEventListener("click", () => {
      lazyImages.forEach(img => {
          if (!img.src) {
              img.src = img.dataset.src;
              img.classList.add("loaded");
          }
      });
  });
});
