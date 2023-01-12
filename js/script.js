///////////////////////////////////////////////////////////

const yearEl = document.querySelector(".footer-year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const burgerMenu = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

burgerMenu.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

const sectionHeroEl = document.querySelector(".section-hero");
const options = {
  root: null,
  threshold: 0,
  rootMargin: "-80px",
};
const obs = new IntersectionObserver(function (entries) {
  const ent = entries[0];

  if (!ent.isIntersecting) {
    document.body.classList.add("sticky");
  }

  if (ent.isIntersecting) {
    document.body.classList.remove("sticky");
  }
}, options);
obs.observe(sectionHeroEl);

//
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
