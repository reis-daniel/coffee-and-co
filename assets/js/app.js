// Get Elemets
let goTopButton = document.querySelector(".goTop-Button");
let navbar = document.querySelector(".navbar");
let navbarLinks = document.querySelectorAll("nav-link");
let menuArt = document.querySelector(".menu");
let storyArt = document.querySelector(".story");
let cateringArt = document.querySelector(".catering");
let cakesArt = document.querySelector(".cakes");
let menuPos = menuArt.getBoundingClientRect();
let storyPos = storyArt.getBoundingClientRect();
let cateringPos = cateringArt.getBoundingClientRect();
let cakesPos = cakesArt.getBoundingClientRect();
let bgImg = document.querySelector(".fixed-background-img");
let tester = document.querySelector(".menu.background-img");
let testerPos = tester.getBoundingClientRect();

// Functions

console.log(testerPos.top);
console.log(testerPos.top - window.innerHeight);

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if (scroll >= menuPos.top - window.innerHeight) {
    bgImg.classList.add("bg-menu");
  }
  console.log(scroll);
});

function topFunction() {
  document.documentElement.scrollTop = 0;
}

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
