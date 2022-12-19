let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector(".dark-mode");
const themeToggler = document.querySelector(".theme");
const bgAnimation = document.querySelector(".main-intro");
const headerMobileMenu = document.querySelector(".header-mobile-menu");
const headerNavigation = document.querySelector(".header-navigation");
const headerNavItems = document.querySelector(".header-navigation *");
const closeSvg = document.querySelector(".close-svg");
const scrollToTop = document.querySelector(".scroll-to-top");
const svg = document.querySelectorAll(".animatedSVG");
const presentYear = document.querySelector(".presentYear");
let mousePositionY;
let mousePositionX;

/*  To set toggle mode and store them in the local storage  */

const enableDarkMode = () => {
  document.body.classList.add("dark-mode");
  themeToggler.removeAttribute("title");
  themeToggler.setAttribute("title", "Activate light mode");
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("dark-mode");
  themeToggler.removeAttribute("title");
  themeToggler.setAttribute("title", "Activate dark mode");
  localStorage.setItem("darkMode", null);
};
let userPreferenceDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;
if (darkMode === "enabled" || userPreferenceDark === true) {
  enableDarkMode();
}

themeToggler.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
function toggleNav() {
  headerNavigation.classList.toggle("active");
}
headerMobileMenu.addEventListener("click", toggleNav);
closeSvg.addEventListener("click", toggleNav);
headerNavItems.addEventListener("click", toggleNav);

/* For mousemovement when i hover on the top area of the page */

setInterval(() => {
  bgAnimation.addEventListener("mousemove", (e) => {
    mousePositionY = e.clientY;
    mousePositionX = e.clientX;
    svg.forEach((each, index) => {
      each.style.transform = `translate(${mousePositionX / index / 3}px,${
        mousePositionY / index / 3
      }px)`;
    });
  });
}, 500);

// Scroll to the top
document.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollToTop.style.display = "grid";
  } else {
    scrollToTop.style.display = "none";
  }
});

//Render the current date
const currentTimeFrame = new Date();
const currentYear = currentTimeFrame.getFullYear();
presentYear.textContent = currentYear;
