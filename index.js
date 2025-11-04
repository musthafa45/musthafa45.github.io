const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  const video = card.querySelector('.project-video');

  card.addEventListener('mouseenter', () => {
    if (video) {
      video.currentTime = 0;
      video.play();
      video.style.opacity = "1";
    }
  });

  card.addEventListener('mouseleave', () => {
    if (video) {
      video.pause();
      video.currentTime = 0;
      video.style.opacity = "0";
    }
  });
});
