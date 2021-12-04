const openPlayerConfig = () => {
  playerConfigOverlayElement.style.display = 'block';
  backdropElement.style.display = 'block';
  inputConfigElement.focus();
};

const closePlayerConfig = () => {
  playerConfigOverlayElement.style.display = 'none';
  backdropElement.style.display = 'none';
};
