const openPlayerConfig = (event) => {
  editedPlayer = +event.target.dataset.playerId;
  playerConfigOverlayElement.style.display = 'block';
  backdropElement.style.display = 'block';
  inputConfigElement.focus();
  formElement.classList.remove('error');
};

const closePlayerConfig = () => {
  playerConfigOverlayElement.style.display = 'none';
  backdropElement.style.display = 'none';

  errorsOutputElement.textContent = ' ';
};

const savePlayerConfig = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get('playername').trim();

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add('error');
    errorsOutputElement.textContent = 'Please enter a valid name!';
    return;
  }
};
