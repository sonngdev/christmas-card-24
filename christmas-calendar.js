document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.querySelector('button.start-button');
  const grid = document.querySelector('.calendar-grid');

  if (!startButton || !grid) {
    return;
  }

  startButton.addEventListener('click', () => {
    grid.classList.remove('start-screen');
    grid.classList.add('calendar-screen');
  });
})
