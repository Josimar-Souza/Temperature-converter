window.onload = () => {
  const userInput = document.getElementById('input');
  const display = document.getElementById('result-display');

  const onUserInputChange = ({ target: { value } }) => {
    if (value === '') {
      display.textContent = '';
      return;
    }

    const result = ((value * 1.8) + 32).toFixed(2);

    display.textContent = result;
  };

  userInput.addEventListener('input', onUserInputChange);
};
