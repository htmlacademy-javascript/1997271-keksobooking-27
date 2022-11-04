const adForm = document.querySelector('.ad-form');
const filterForm = document.querySelector('.map__filters');

const adFormElements = adForm.querySelectorAll('fieldset');
const filterFormElements = filterForm.querySelectorAll('fieldset,select');

const deactivateAdForm = () => {
  adForm.classList.add('ad-form--disabled');
  adFormElements.forEach((element) => (element.disabled = true));
};

const deactivateFilterForm = () => {
  filterForm.classList.add('map__filters--disabled');
  filterFormElements.forEach((element) => (element.disabled = true));
};

const activateAdForm = () => {
  adForm.classList.remove('ad-form--disabled');
  adFormElements.forEach((element) => (element.disabled = false));
};

const activateFilterForm = () => {
  filterForm.classList.remove('map__filters--disabled');
  filterFormElements.forEach((element) => (element.disabled = false));
};

const deactivateForms = () => {
  deactivateAdForm();
  deactivateFilterForm();
};

const activateForms = () => {
  activateAdForm();
  activateFilterForm();
};

export { deactivateForms, activateForms };
