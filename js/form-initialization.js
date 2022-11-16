const adForm = document.querySelector('.ad-form');
const filterForm = document.querySelector('.map__filters');

const adFormField = adForm.querySelectorAll('fieldset');
const filterFormChildren = filterForm.querySelectorAll('fieldset, select');

const deactivateAdForm = () => {
  adForm.classList.add('ad-form--disabled');
<<<<<<< HEAD
  adFormField.forEach((element) => {
    element.disabled = true;
  });
=======
  adFormField.forEach((element) => (element.disabled = true));
>>>>>>> fca9d440554fdee88066bb0c14a3c952b8abffca
};

const deactivateFilterForm = () => {
  filterForm.classList.add('map__filters--disabled');
<<<<<<< HEAD
  filterFormChildren.forEach((element) => {
    element.disabled = true;
  });
=======
  filterFormChildren.forEach((element) => (element.disabled = true));
>>>>>>> fca9d440554fdee88066bb0c14a3c952b8abffca
};

const engageAdForm = () => {
  adForm.classList.remove('ad-form--disabled');
<<<<<<< HEAD
  adFormField.forEach((element) => {
    element.disabled = false;
  });
=======
  adFormField.forEach((element) => (element.disabled = false));
>>>>>>> fca9d440554fdee88066bb0c14a3c952b8abffca
};

const engageFilterForm = () => {
  filterForm.classList.remove('map__filters--disabled');
<<<<<<< HEAD
  filterFormChildren.forEach((element) => {
    element.disabled = false;
  });
=======
  filterFormChildren.forEach((element) => (element.disabled = false));
>>>>>>> fca9d440554fdee88066bb0c14a3c952b8abffca
};

const deactivateForms = () => {
  deactivateAdForm();
  deactivateFilterForm();
};

export { deactivateForms, engageAdForm, engageFilterForm };
