/**
 * Function to change the color of the navbar when scrolling
 */
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  const navLogo = document.getElementById('navLogo');
  const navItemsDesktop = document.getElementById('navItemsDesktop');
  const navContactButton = document.getElementById('navContact');
  const pageScrollButton = document.getElementById('pageScrollButton');

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
  if (window.scrollY > 50) {
    header.classList.remove('bg-transparent');
    header.classList.add('md:bg-zinc-900');
    header.classList.add('backdrop-blur-lg');
    header.classList.add('bg-black/10');
    navLogo.classList.replace('text-green-700', 'text-white'); // text color of nav logo
    navItemsDesktop.classList.replace('text-zinc-900', 'text-white'); // text color of nav text items
    navContactButton.classList.replace('text-zinc-900', 'text-white');
    pageScrollButton.classList.replace('opacity-100', 'opacity-0');
    pageScrollButton.classList.replace('visible', 'invisible');
  } else {
    header.classList.remove('md:bg-zinc-900');
    header.classList.add('bg-transparent');
    header.classList.remove('backdrop-blur-lg');
    header.classList.remove('bg-black/10');
    navLogo.classList.replace('text-white', 'text-green-700'); // text color of nav logo
    navItemsDesktop.classList.replace('text-white', 'text-zinc-900');
    navContactButton.classList.replace('text-white', 'text-zinc-900');
    pageScrollButton.classList.replace('invisible', 'visible');
    pageScrollButton.classList.replace('opacity-0', 'opacity-100');
  }
});

  });
});
