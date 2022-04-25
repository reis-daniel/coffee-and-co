// Get Elemets
let goTopButton = document.querySelector(".goTop-Button");
let navbar = document.querySelector(".navbar");
let navbarLinks = document.querySelectorAll("nav-link");

// Change Background-Image when scrolling
let menuArt = document.querySelector(".menuArt");
let storyArt = document.querySelector(".storyArt");
let cateringArt = document.querySelector(".cateringArt");
let cakesArt = document.querySelector(".cakesArt");
let menuPos = menuArt.getBoundingClientRect();
let storyPos = storyArt.getBoundingClientRect();
let cateringPos = cateringArt.getBoundingClientRect();
let cakesPos = cakesArt.getBoundingClientRect();
let bgImg = document.querySelector("#bg-image");
let fixedClass = "fixed-background-img";

// Scroll top when reloading the page..
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
  clearBackgroundClass();
};

// Functions
function topFunction() {
  document.documentElement.scrollTop = 0;
  clearBackgroundClass();
}

function clearBackgroundClass() {
  bgImg.className = fixedClass;
  bgImg.classList.add("bg-menu");
}

// Invoke stickynavbar-Function when scrolling
window.onscroll = function () {
  functionStickyNavbar();
};

let sticky = navbar.offsetTop;

function functionStickyNavbar() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("navbar-scrolled");
    goTopButton.classList.add("nav-scrolled");
    for (let i = 0; i < navbarLinks.length; i++) {
      navbarLinks[i].classList.add("nav-link-scrolled");
    }
  } else {
    navbar.classList.remove("navbar-scrolled");
    goTopButton.classList.remove("nav-scrolled");
    for (let i = 0; i < navbarLinks.length; i++) {
      navbarLinks[i].classList.remove("nav-link-scrolled");
    }
  }
}

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;

  if (scroll <= menuPos.top) {
    bgImg.className = fixedClass;
    bgImg.classList.add("bg-menu");
  }

  //   Menü -> bg-story
  if (scroll >= menuPos.top) {
    bgImg.className = fixedClass;
    bgImg.classList.add("bg-story");
  }
  // Story -> bg-catering
  if (scroll >= storyPos.top) {
    bgImg.className = fixedClass;
    bgImg.classList.add("bg-catering");
  }
  // Catering -> bg-cakes
  if (scroll >= cateringPos.top) {
    bgImg.className = fixedClass;
    bgImg.classList.add("bg-cakes");
  }

  if (scroll >= cakesPos.top) {
    bgImg.className = "bg-black";
  }
});
