
const stickyHeader = document.querySelector(".sticky-header");
const firstFoldHeight = window.innerHeight;

window.addEventListener("scroll", () => {
  if (window.scrollY > firstFoldHeight) {
    stickyHeader.classList.add("active");
  } else {
    stickyHeader.classList.remove("active");
  }
});





document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {

    const faqItem = button.parentElement;

    document.querySelectorAll(".faq-item").forEach(item => {
      if (item !== faqItem) {
        item.classList.remove("active");
      }
    });

    faqItem.classList.toggle("active");

  });
});


// ================= APPLICATION SLIDER =================

const slider = document.getElementById("slider");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

nextBtn.addEventListener("click", () => {
  slider.scrollBy({
    left: 380,
    behavior: "smooth"
  });
});

prevBtn.addEventListener("click", () => {
  slider.scrollBy({
    left: -380,
    behavior: "smooth"
  });
});


// ================= PROCESS TABS =================

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
  });
});



const container = document.querySelector(".zoom-container");
const img = document.querySelector(".zoom-image");
const lens = document.querySelector(".zoom-lens");
const result = document.querySelector(".zoom-result");

const zoomLevel = 3;

let rect, cx, cy;

function initZoom() {

  rect = container.getBoundingClientRect();

  cx = result.offsetWidth / lens.offsetWidth;
  cy = result.offsetHeight / lens.offsetHeight;

  result.style.backgroundImage = `url(${img.src})`;
  result.style.backgroundSize =
    img.width * zoomLevel + "px " +
    img.height * zoomLevel + "px";
}

initZoom();

container.addEventListener("mouseenter", () => {

  lens.style.display = "block";
  result.style.display = "block";

});

container.addEventListener("mouseleave", () => {

  lens.style.display = "none";
  result.style.display = "none";

});

container.addEventListener("mousemove", e => {

  requestAnimationFrame(() => moveLens(e));

});

function moveLens(e) {

  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;

  const lensW = lens.offsetWidth / 2;
  const lensH = lens.offsetHeight / 2;

  x = Math.max(lensW, Math.min(x, rect.width - lensW));
  y = Math.max(lensH, Math.min(y, rect.height - lensH));

  lens.style.transform =
    `translate(${x - lensW}px, ${y - lensH}px)`;

  result.style.backgroundPosition =
    `-${(x * zoomLevel) - result.offsetWidth / 2}px -${(y * zoomLevel) - result.offsetHeight / 2}px`;

}


const modal = document.getElementById("catalogModal");
const openBtn = document.querySelector(".datasheet-btn");
const closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", function (e) {
  e.preventDefault();
  modal.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  modal.classList.remove("active");
});

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

const emailInput = document.getElementById("emailInput");
const phoneInput = document.getElementById("phoneInput");
const countryCode = document.getElementById("countryCode");
const downloadBtn = document.getElementById("downloadBtn");


/* restrict phone to numbers only */

phoneInput.addEventListener("input", () => {

  phoneInput.value = phoneInput.value.replace(/\D/g, "");

});


/* change phone length based on country */

countryCode.addEventListener("change", () => {

  const length = countryCode.options[countryCode.selectedIndex].dataset.length;

  phoneInput.maxLength = length;

});


/* email validation */

function validateForm() {

  const email = emailInput.value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(email)) {
    downloadBtn.disabled = false;
  }
  else {
    downloadBtn.disabled = true;
  }

}

emailInput.addEventListener("input", validateForm);
phoneInput.addEventListener("input", validateForm);



const quoteBtn = document.querySelector(".quote-btn");
const quoteModal = document.getElementById("quoteModal");
const closeQuote = document.getElementById("closeQuote");

quoteBtn.addEventListener("click", function (e) {

  e.preventDefault();   // prevents page jump
  quoteModal.classList.add("active");

});

closeQuote.addEventListener("click", function () {

  quoteModal.classList.remove("active");

});

/* click outside to close */

quoteModal.addEventListener("click", function (e) {

  if (e.target === quoteModal) {
    quoteModal.classList.remove("active");
  }

});