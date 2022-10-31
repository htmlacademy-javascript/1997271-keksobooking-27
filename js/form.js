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

const HOUSING_TYPE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 3000,
  palace: 10000,
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
      price = HOUSING_TYPE.bungalow;
      break;
    case 'flat':
      price = HOUSING_TYPE.flat;
      break;
    case 'hotel':
      price = HOUSING_TYPE.hotel;
      break;
    case 'house':
      price = HOUSING_TYPE.house;
      break;
    case 'palace':
      price = HOUSING_TYPE.palace;
      break;
  }
  priceField.min = price;
  priceField.placeholder = price;
};

const validatePrice = () => priceField.value >= HOUSING_TYPE[typeField.value];

const createErrorMessagePrice = () =>
  `Цена не менее ${HOUSING_TYPE[typeField.value]}`;

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
validateField(priceField, validatePrice, createErrorMessagePrice);

timeInField.addEventListener('change', () => {
  onChangeSyncField('#timein', '#timeout', form);
});

timeOutField.addEventListener('change', () => {
  onChangeSyncField('#timeout', '#timein', form);
});

typeField.addEventListener('change', (evt) => {
  onChangeTypeHouse(evt.target.value);
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
