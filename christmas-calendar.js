document.addEventListener('DOMContentLoaded', async () => {
  const startButton = document.querySelector('button.start-button');
  const grid = document.querySelector('.calendar-grid');
  const music = new Audio('https://res.cloudinary.com/dh7qbp6sy/video/upload/v1734902929/santa-tell-me-ariana-grande_gkiv6o.mp3');

  if (!startButton || !grid) {
    return;
  }

  startButton.addEventListener('click', () => {
    grid.classList.remove('start-screen');
    grid.classList.add('calendar-screen');
    music.play();
  });
})
