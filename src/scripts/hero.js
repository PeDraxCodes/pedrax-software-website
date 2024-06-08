document.addEventListener('DOMContentLoaded', function () {
  const more_info_btn = document.getElementById('moreInfo');

  more_info_btn.addEventListener('mouseenter', function () {
    gsap.to(more_info_btn, {
      duration: 0.5,
      scale: 1.1,
      ease: 'back.out',
    });
  });

  more_info_btn.addEventListener('mouseleave', function () {
    gsap.to(more_info_btn, {
      duration: 0.5,
      scale: 1,
      ease: 'back.out',
    });
  });
});
