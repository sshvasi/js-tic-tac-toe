const openPlayerConfig = (event) => {
  editedPlayer = +event.target.dataset.playerId;
  playerConfigOverlayElement.style.display = 'block';
  backdropElement.style.display = 'block';
  inputConfigElement.focus();
};

const closePlayerConfig = () => {
  playerConfigOverlayElement.style.display = 'none';
  backdropElement.style.display = 'none';

  errorsOutputElement.textContent = '';
  inputConfigElement.value = '';
  formElement.classList.remove('error');
};

const savePlayerConfig = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get('playername').trim();

  if (!enteredPlayerName) {
    formElement.classList.add('error');
    errorsOutputElement.textContent = 'Please enter a valid name!';
    return;
  }

  const updatedPlayerDataElement = document.getElementById(
    `player-${editedPlayer}-data`
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig();
};
