////////////////////////////////////////////////////////////////////////////////////
// APPLYING NAVIGATION FUNCTIONALITY (FOR MOBILE)
////////////////////////////////////////////////////////////////////////////////////

// Open Navigation by clicking on Burger Icon
const btnMobNavEL = document.querySelector(".btn-mobile-nav");
const headerEL = document.querySelector(".header");

btnMobNavEL.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});

// Closing Navigation after clicking on the link of Navigation-viewport
// (It causes some problem of smooth scrolling so, we also implement this as manually)

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    // console.log(href)

    // Scroll backto Top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: smooth,
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEL = document.querySelector(href);
      sectionEL.scrollIntoView({ behavior: "smooth" });
    }

    // Close the Burger-Navigation after clicking on link
    if (link.classList.contains("main-nav-link")) {
      headerEL.classList.toggle("nav-open");
    }
  });
});

////////////////////////////////////////////////////////////////////////////////////
// APPLYING STICKY NAVIGATION FUNCTIONALITY (FOR DESKTOP)
////////////////////////////////////////////////////////////////////////////////////

const sectionHeroEL = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEL);

////////////////////////////////////////////////////////////////////////////////////
// SET CURRENT YEAR IN FOOTER
////////////////////////////////////////////////////////////////////////////////////

// Pro Point for HTML content: Always use EL in the name of a variable, this way you remember that is HTML content I have picked.
const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;
