const carousel = document.querySelector('.carousel__images');

let isRotating = true;
let rotationSpeed = 30;

function updateRotationSpeed() {
  carousel.style.animation = `rotate ${rotationSpeed}s infinite linear`;
}

carousel.addEventListener('click', () => {
  isRotating = !isRotating;
  carousel.style.animationPlayState = isRotating ? 'running' : 'paused';
});

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      rotationSpeed = Math.max(1, rotationSpeed - 1);
      updateRotationSpeed();
      break;
    case 'ArrowDown':
      rotationSpeed += 0.5;
      updateRotationSpeed();
      break;
    case ' ':
      isRotating = !isRotating;
      carousel.style.animationPlayState = isRotating ? 'running' : 'paused';
      break;
  }
});

updateRotationSpeed();
