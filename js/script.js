//Setting current year
const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

// -----------------------
//Mobile navigation btn
// -----------------------

const navBtn = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

navBtn.addEventListener("click", function (e) {
  header.classList.toggle("nav-open");
});

// -----------------------
// Smooth scrolling
// -----------------------

const ctaSection = document.querySelector("#cta");

document.addEventListener("keydown", function () {
  console.log("run");
  const { x, y } = ctaSection.getBoundingClientRect();
  window.scrollTo(x, y + window.Scroll);
});

const links = document.querySelectorAll("a:link");

links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      const { y } = section.getBoundingClientRect();
      window.scrollTo({
        top: y + window.scrollY,
        behavior: "smooth",
      });

      //close mobile navigation

      if (link.classList.contains("main-nav-link"))
        header.classList.remove("nav-open");
    }
  });
});

// Sticky naviation
let options = {
  root: null,
  threshold: 0,
  rootMargin: "-80px",
};
let target = document.querySelector(".section-hero");

let observer = new IntersectionObserver(function (entries) {
  const entry = entries[0];
  if (!entry.isIntersecting) {
    header.classList.add("sticky");
    target.style.marginTop = "9.6rem";
  }

  if (entry.isIntersecting) {
    header.classList.remove("sticky");
    target.style.marginTop = "0rem";
  }
}, options);

observer.observe(target);
