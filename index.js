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


const items = document.querySelectorAll('.menu-item');
let currentIndex = 0;

const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');
const startBtn = document.getElementById('startBtn');

function updateSelection() {
  items.forEach((item, i) => item.classList.toggle('selected', i === currentIndex));
}

leftBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateSelection();
});

rightBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateSelection();
});

startBtn.addEventListener('click', () => {
  const link = items[currentIndex].dataset.link;
  window.open(link, '_blank'); // opens the selected item
});
