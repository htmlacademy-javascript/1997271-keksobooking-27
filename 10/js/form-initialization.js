const adForm = document.querySelector('.ad-form');
const filterForm = document.querySelector('.map__filters');

const adFormElements = adForm.querySelectorAll('fieldset');
const filterFormElements = filterForm.querySelectorAll('fieldset, select');

const deactivateAdForm = () => {
  adForm.classList.add('ad-form--disabled');
  adFormElements.forEach((element) => (element.disabled = true));
};

const deactivateFilterForm = () => {
  filterForm.classList.add('map__filters--disabled');
  filterFormElements.forEach((element) => (element.disabled = true));
};

const engageAdForm = () => {
  adForm.classList.remove('ad-form--disabled');
  adFormElements.forEach((element) => (element.disabled = false));
};

const engageFilterForm = () => {
  filterForm.classList.remove('map__filters--disabled');
  filterFormElements.forEach((element) => (element.disabled = false));
};

const deactivateForms = () => {
  deactivateAdForm();
  deactivateFilterForm();
};

export { deactivateForms, engageAdForm, engageFilterForm };
