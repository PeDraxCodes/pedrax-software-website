document.addEventListener('DOMContentLoaded', () => {
  /**
   * Function to change the color of the navbar when scrolling
   */
  window.addEventListener('scroll', () => {
    const colorDiv = document.getElementById('colorDiv');
    const navDiv = document.getElementById('navColor');

    if (window.scrollY > 50) {
      colorDiv.classList.remove('bg-transparent');
      colorDiv.classList.add('md:bg-zinc-900');
      colorDiv.classList.add('backdrop-blur-lg');
      colorDiv.classList.add('bg-black/10');
      navDiv.classList.remove('text-zinc-900'); // text color of nav text items
      navDiv.classList.add('text-white');
    } else {
      colorDiv.classList.remove('md:bg-zinc-900');
      colorDiv.classList.add('bg-transparent');
      colorDiv.classList.remove('backdrop-blur-lg');
      colorDiv.classList.remove('bg-black/10');
      navDiv.classList.remove('text-white');
      navDiv.classList.add('text-zinc-900');
    }
  });
});
