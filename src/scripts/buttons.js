const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

let menuOpen = false;
btn.addEventListener("click", function () {
  menu.classList.toggle("opacity-100");
  line1.classList.toggle("-rotate-45");
  line1.classList.toggle("translate-y-2");
  line3.classList.toggle("rotate-45");
  line2.classList.toggle("-translate-x-4");

  if (menuOpen) {
    // add classes if menu is closed
    line3.classList.add("translate-y-4");
    line3.classList.add("w-5");
    line3.classList.remove("w-6");
    menuOpen = false;
  } else {
    // add classes if menu is opend
    line3.classList.remove("translate-y-4");
    line3.classList.add("translate-y-2");
    line3.classList.add("w-6");

    menuOpen = true;
  }
});
