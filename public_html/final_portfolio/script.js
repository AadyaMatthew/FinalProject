const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.style.opacity = 0;
});

document.addEventListener('DOMContentLoaded', () => {
  cards.forEach((card) => {
    card.style.opacity = 1;
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const backToTopButton = document.querySelector(".back-to-top");
  backToTopButton.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});