const inputElement = document.querySelector('#name-input');
const spanElement = document.querySelector('#name-output');

inputElement.addEventListener('input', () => {
  const userInput = inputElement.value;

  const trimmedInput = userInput.trim();

  if (trimmedInput === '') {
    spanElement.textContent = 'Anonymous';
  } else {
    spanElement.textContent = trimmedInput;
  }
});
