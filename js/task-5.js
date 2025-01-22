const buttonChangeColor = document.querySelector('.change-color');
const spanChangeColor = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonChangeColor.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  spanChangeColor.textContent = newColor;
});
