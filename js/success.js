import { isEscEvent } from './utils.js';

const successTemplate = document
  .querySelector('#success')
  .content.querySelector('.success');
const documentElement = document.querySelector('body');

const onMessageEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    hideMessage();
  }
};

const onOverlayClick = () => {
  hideMessage();
};

const showSuccessMessage = () => {
  const successTemplateElement = successTemplate.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onOverlayClick);
  documentElement.append(successTemplateElement);
};

function hideMessage() {
  const message = document.querySelector('.success');
  message.remove();
  document.removeEventListener('keydown', onMessageEscKeydown);
  document.removeEventListener('click', onOverlayClick);
}

export { showSuccessMessage };
