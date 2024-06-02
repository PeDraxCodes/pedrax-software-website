document.addEventListener("DOMContentLoaded", function () {
  /**
   * Function to change the color of the navbar when scrolling
   */
    window.addEventListener("scroll", function () {
    const colorDiv = document.getElementById("colorDiv");
    const navDiv = document.getElementById("navColor");
    if (window.scrollY > 50) {
      colorDiv.classList.remove("bg-transparent");
      colorDiv.classList.add("bg-zinc-900");
      navDiv.classList.remove("text-zinc-900");
      navDiv.classList.add("text-white");
    } else {
      colorDiv.classList.remove("bg-zinc-900");
      colorDiv.classList.add("bg-transparent");
      navDiv.classList.remove("text-white");
      navDiv.classList.add("text-zinc-900");
    }
  });
});
