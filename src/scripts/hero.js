/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
  const downloadRequestBtn = document.getElementById('downloadRequestButton');

  downloadRequestBtn.addEventListener('mouseenter', () => {
    gsap.to(downloadRequestBtn, {
      duration: 0.5,
      scale: 1.1,
      ease: 'back.out',
    });
  });

  downloadRequestBtn.addEventListener('mouseleave', () => {
    gsap.to(downloadRequestBtn, {
      duration: 0.5,
      scale: 1,
      ease: 'back.out',
    });
  });
});
