const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const menuIcon = menuBtn.querySelector("i");
const toTop = document.querySelector(".to-top");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  const open = navLinks.classList.contains("show");
  menuIcon.className = open ? "ri-close-line" : "ri-menu-3-line";
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuIcon.className = "ri-menu-3-line";
  });
});

toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});



window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});