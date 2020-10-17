import wixAnimations from 'wix-animations';

const doc = document;

const overlay = doc.querySelector(".overlay");
const menuOpen = doc.querySelector(".nav__links");
const menuClose = doc.querySelector(".nav__links")

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});
