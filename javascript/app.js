const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');

const edit1PlayerBtnElement = document.getElementById('edit-player-1-element');
const edit2PlayerBtnElement = document.getElementById('edit-player-2-element');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');
const inputConfigElement = document.getElementById('playername');

edit1PlayerBtnElement.addEventListener('click', openPlayerConfig);
edit2PlayerBtnElement.addEventListener('click', openPlayerConfig);

cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);
formElement.addEventListener('submit', savePlayerConfig);
