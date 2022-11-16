import { isEscEvt, renderElement } from './utils.js';

const GET_ERROR_TEXT = 'Ошибка при загрузке данных';
const POST_ERROR_TEXT = 'Ошибка размещения объявления';

const createErrorTemplate = (text, buttonState) => `<div class="error">
                                                      <p class="error__message">${text}</p>
                                                      ${buttonState ? '<button type="button" class="error__button">Попробовать снова</button>' : ''}
                                                    </div>`;

const onErrorClick = (evt) => {
  evt.preventDefault();
  if (evt.target.closest('.error')) {
    evt.target.closest('.error').remove();
    removeListeners();
  }
};

const onErrorKeydown = (evt) => {
  evt.preventDefault();
  const errorBlock = document.querySelector('.error');
  if (isEscEvt(evt) && errorBlock) {
    errorBlock.remove();
    removeListeners();
  }
};

const addListeners = () => {
  document.addEventListener('click', onErrorClick);
  document.addEventListener('keydown', onErrorKeydown);
};

function removeListeners() {
  document.removeEventListener('click', onErrorClick);
  document.removeEventListener('keydown', onErrorKeydown);
}

const renderGetErrorMessage = () => {
  renderElement(document.body, createErrorTemplate(GET_ERROR_TEXT, true));
  addListeners();
};

const renderPostErrorMessage = () => {
  renderElement(document.body, createErrorTemplate(POST_ERROR_TEXT, true));
  addListeners();
};

export { renderGetErrorMessage, renderPostErrorMessage };
