const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

if (slides.length > 0 && dots.length > 0) {
  let index = 0;

  const renderSlide = (nextIndex) => {
    slides.forEach((slide, idx) => slide.classList.toggle("active", idx === nextIndex));
    dots.forEach((dot, idx) => dot.classList.toggle("active", idx === nextIndex));
    index = nextIndex;
  };

  const nextSlide = () => {
    const upcoming = (index + 1) % slides.length;
    renderSlide(upcoming);
  };

  const timer = setInterval(nextSlide, 5000);

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      clearInterval(timer);
      const nextIndex = Number(dot.dataset.slide) || 0;
      renderSlide(nextIndex);
    });
  });
}
