const form = document.querySelector('.ad-form');
const titleField = document.querySelector('#title');
const roomsField = document.querySelector('#room_number');
const guestsField = document.querySelector('#capacity');
const timeInField = document.querySelector('#timein');
const timeOutField = document.querySelector('#timeout');
const typeField = document.querySelector('#type');
const priceField = document.querySelector('#price');

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const roomsToOptions = {
  1: ['1'],
  2: ['2', '1'],
  3: ['3', '2', '1'],
  100: ['0'],
};

const typeToPrice = {
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

const validateTitleField = (value) =>
  value.length >= MIN_TITLE_LENGTH && value.length <= MAX_TITLE_LENGTH;
const createTitleError = () =>
  `Длина заголовка должна быть от ${MIN_TITLE_LENGTH} до ${MAX_TITLE_LENGTH} символов. У вас ${titleField.value.length}`;

const onTimeInFieldChange = () => (timeOutField.value = timeInField.value);
const onTimeOutFieldChange = () => (timeInField.value = timeOutField.value);
const onTypeFieldChange = (evt) => {
  priceField.min = typeToPrice[evt.tagret.value];
  priceField.placeholder = typeToPrice[evt.tagret.value];
};

const validatePriceField = () =>
  priceField.value >= typeToPrice[typeField.value];
const createPriceError = () => `Цена не менее ${typeToPrice[typeField.value]}`;

const validateRoomsField = () =>
  roomsToOptions[roomsField.value].includes(guestsField.value);
const createRoomsError = () => {
  if (roomsField.value === '1') {
    return 'Размещение для одного гостя';
  }
  if (roomsField.value === '2') {
    return 'Размещение от одного гостя до двух гостей';
  }
  if (roomsField.value === '3') {
    return 'Размещение от одного гостя до трех гостей';
  }
  if (roomsField.value === '100') {
    return 'Не для гостей';
  }
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

const adSendFormListeners = () => {
  timeInField.addEventListener('change', onTimeInFieldChange);
  timeOutField.addEventListener('change', onTimeOutFieldChange);
  typeField.addEventListener('change', onTypeFieldChange);
  form.addEventListener('submit', onFormSubmit);
};

const adSendFormValidation = () => {
  pristine.addValidator(titleField, validateTitleField, createTitleError);
  pristine.addValidator(guestsField, validateRoomsField, createRoomsError);
  pristine.addValidator(priceField, validatePriceField, createPriceError);
};

const adSendFormAction = () => {
  adSendFormListeners();
  adSendFormValidation();
};

export { adSendFormAction };
