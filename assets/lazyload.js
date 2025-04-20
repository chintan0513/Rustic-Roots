document.addEventListener("DOMContentLoaded", function() {
  const lazyImages = document.querySelectorAll("img.lazy");
  const options = { threshold: 0.1 };

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.onload = () => img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  }, options);

  lazyImages.forEach((img) => {
    imageObserver.observe(img);
  });
});
