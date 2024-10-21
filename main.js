function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if (!src) return;

  img.src = src;
  img.onload = () => {
    img.classList.add("loaded");
  };
}

const imgObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      preloadImage(entry.target);
      observer.unobserve(entry.target);
    }
  });
});

const images = document.querySelectorAll("img[data-src]");
images.forEach((img) => {
  imgObserver.observe(img);
});

document.getElementById("loadImagesBtn").addEventListener("click", () => {
  images.forEach((img) => preloadImage(img));
});
