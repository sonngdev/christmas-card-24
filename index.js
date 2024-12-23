document.addEventListener('DOMContentLoaded', async () => {
  const startButton = document.querySelector('button.start-button');
  const grid = document.querySelector('.calendar-grid');
  const music = new Audio('https://res.cloudinary.com/dh7qbp6sy/video/upload/v1734994346/christmas-calendar-24/santa-tell-me-ariana-grande_mzcsd7.mp3');
  const playButton = document.querySelector('button.play-button');

  if (!startButton || !grid) {
    return;
  }

  startButton.addEventListener('click', () => {
    grid.classList.remove('start-screen');
    grid.classList.add('calendar-screen');
    music.play();
  });

  playButton.addEventListener('click', () => {
    if (music.paused) {
      music.play();
      playButton.querySelector('.text').textContent = 'Playing';
      playButton.classList.add('playing');
      playButton.classList.remove('pausing');
    } else {
      music.pause();
      playButton.querySelector('.text').textContent = 'Pausing';
      playButton.classList.remove('playing');
      playButton.classList.add('pausing');
    }
  })
})
