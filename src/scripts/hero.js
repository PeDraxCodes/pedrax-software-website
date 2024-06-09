/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
  const moreInfoBtn = document.getElementById('moreInfo');

  moreInfoBtn.addEventListener('mouseenter', () => {
    gsap.to(moreInfoBtn, {
      duration: 0.5,
      scale: 1.1,
      ease: 'back.out',
    });
  });

  moreInfoBtn.addEventListener('mouseleave', () => {
    gsap.to(moreInfoBtn, {
      duration: 0.5,
      scale: 1,
      ease: 'back.out',
    });
  });
});
