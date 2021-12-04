const openPlayerConfig = () => {
  playerConfigOverlayElement.style.display = 'block';
  backdropElement.style.display = 'block';
  inputConfigElement.focus();
};

const closePlayerConfig = () => {
  playerConfigOverlayElement.style.display = 'none';
  backdropElement.style.display = 'none';
};

const savePlayerConfig = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get('playername');
  console.log(enteredPlayerName);
};
