import { isEscEvent } from './utils.js';

const errorTemplate = document
  .querySelector('#error')
  .content.querySelector('.error');
const documentElement = document.querySelector('body');

const onErrorButtonClick = () => {
  hideMessage();
};

const onMessageEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    hideMessage();
  }
};

const showErrorMessage = () => {
  const errorTemplateElement = errorTemplate.cloneNode(true);
  errorTemplateElement
    .querySelector('.error__button')
    .addEventListener('click', onErrorButtonClick);
  document.addEventListener('keydown', onMessageEscKeydown);
  documentElement.append(errorTemplateElement);
};

function hideMessage() {
  const message = document.querySelector('.error');
  message.remove();
  document.removeEventListener('keydown', onMessageEscKeydown);
  document.removeEventListener('click', onErrorButtonClick);
}

export { showErrorMessage };
