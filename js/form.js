import { declOfNum } from './utils.js';
const form = document.querySelector('.ad-form');
const roomsField = form.querySelector('[name="rooms"]');
const guestsField = form.querySelector('[name="capacity"]');
const timeInField = form.querySelector('#timein');
const timeOutField = form.querySelector('#timeout');
const typeField = form.querySelector('#type');
const priceField = form.querySelector('#price');

const ROOMS_OPTIONS = {
  1: ['1'],
  2: ['2', '1'],
  3: ['3', '2', '1'],
  100: ['0'],
};
const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__element-error',
});

const validateField = (field, validateFn, msg) => {
  pristine.addValidator(field, validateFn, msg);
};

const onChangeSyncField = (firstSelect, secondSelect, parent) => {
  const firstElement = parent.querySelector(firstSelect);
  const secondElement = parent.querySelector(secondSelect);

  for (let i = 0; i < firstElement.length; i++) {
    if (firstElement.options[i].selected) {
      for (let j = 0; j < secondElement.length; j++) {
        if (firstElement.options[i].value === secondElement.options[j].value) {
          secondElement.options[j].selected = true;
        }
      }
    }
  }
};

const onChangeTypeHouse = (value) => {
  let price = 0;
  switch (value) {
    case 'bungalow':
      price = 0;
      break;
    case 'flat':
      price = 1000;
      break;
    case 'hotel':
      price = 3000;
      break;
    case 'house':
      price = 5000;
      break;
    case 'palace':
      price = 10000;
      break;
  }
  priceField.min = price;
  priceField.placeholder = price;
};

typeField.addEventListener('change', (evt) => {
  onChangeTypeHouse(evt.target.value);
});

const validateRooms = () =>
  ROOMS_OPTIONS[roomsField.value].includes(guestsField.value);

const createErrorMessage = () => `${roomsField.value}${declOfNum(
  roomsField.value,
  [' комната', ' комнаты', ' комнат']
)} не для
${guestsField.value}${declOfNum(guestsField.value, [
  ' гостя',
  ' гостей',
  ' гость',
])}`;

validateField(roomsField, validateRooms, createErrorMessage);
validateField(guestsField, validateRooms, createErrorMessage);

timeInField.addEventListener('change', () => {
  onChangeSyncField('#timein', '#timeout', form);
});

timeOutField.addEventListener('change', () => {
  onChangeSyncField('#timeout', '#timein', form);
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
