document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll("img.lazy-load");

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src; 
              img.onload = () => img.classList.add("loaded");
              observer.unobserve(img); 
          }
      });
  }, {
      rootMargin: "50px", 
      threshold: 0.1
  });

  lazyImages.forEach(img => observer.observe(img));

  document.getElementById("loadImages").addEventListener("click", () => {
      lazyImages.forEach(img => {
          if (!img.src) {
              img.src = img.dataset.src;
              img.classList.add("loaded");
          }
      });
  });
});
