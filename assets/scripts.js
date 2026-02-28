const bookingUrl = "https://flow-state-healing-and-massage.square.site";

document.querySelectorAll("[data-booking-link]").forEach((link) => {
  link.setAttribute("href", bookingUrl);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});

const navToggle = document.querySelector("[data-nav-toggle]");
const navPanel = document.querySelector("[data-nav-panel]");

if (navToggle && navPanel) {
  navToggle.addEventListener("click", () => {
    const isOpen = navPanel.getAttribute("data-open") === "true";
    navPanel.setAttribute("data-open", String(!isOpen));
    navToggle.setAttribute("aria-expanded", String(!isOpen));
  });

  navPanel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navPanel.setAttribute("data-open", "false");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll("[data-current-year]").forEach((slot) => {
  slot.textContent = String(new Date().getFullYear());
});

/* ---- Testimonial Carousel ---- */

document.querySelectorAll("[data-carousel]").forEach(function (carousel) {
  var slides = carousel.querySelectorAll(".carousel-slide");
  var prevBtn = carousel.querySelector("[data-carousel-prev]");
  var nextBtn = carousel.querySelector("[data-carousel-next]");
  var dotsContainer = carousel.querySelector("[data-carousel-dots]");
  var current = 0;

  // Build dots
  slides.forEach(function (_, i) {
    var dot = document.createElement("button");
    dot.className = "carousel-dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", "Go to testimonial " + (i + 1));
    dot.addEventListener("click", function () {
      goTo(i);
    });
    dotsContainer.appendChild(dot);
  });

  var dots = dotsContainer.querySelectorAll(".carousel-dot");

  function goTo(index) {
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");
    current = (index + slides.length) % slides.length;
    slides[current].classList.add("active");
    dots[current].classList.add("active");
  }

  prevBtn.addEventListener("click", function () {
    goTo(current - 1);
  });

  nextBtn.addEventListener("click", function () {
    goTo(current + 1);
  });
});
