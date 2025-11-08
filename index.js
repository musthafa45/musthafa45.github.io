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

const pointer = document.querySelector('.pointer-triangle');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');
const startBtn = document.getElementById('startBtn');

function updatePointer() {
  const currentItem = items[currentIndex];
  const itemRect = currentItem.getBoundingClientRect();
  const parentRect = currentItem.parentElement.getBoundingClientRect();

  // Position pointer horizontally centered above the current item
  pointer.style.left = `${itemRect.left - parentRect.left + itemRect.width / 2 - 10}px`;
}

leftBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updatePointer();
});

rightBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  updatePointer();
});

startBtn.addEventListener('click', () => {
  const link = items[currentIndex].dataset.link;
  window.open(link, '_blank');
});

// Initialize pointer on page load
window.addEventListener('load', updatePointer);
window.addEventListener('resize', updatePointer); // reposition if window changes

