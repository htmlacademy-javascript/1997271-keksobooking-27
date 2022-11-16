const popupType = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const offerTemplate = document
  .querySelector('#card')
  .content.querySelector('.popup');

const createSimpleString = (data, parent, selector, additionalText = '') => {
  const element = parent.querySelector(selector);
  if (!data) {
    element.remove();
  }
  element.textContent = `${data}${additionalText}`;
};

const createAvatar = (data, parent, selector) => {
  const element = parent.querySelector(selector);
  if (!data) {
    element.remove();
  }
  element.src = data;
};

const createRooms = (firstData, secondData, parent, selector) => {
  const element = parent.querySelector(selector);
  if (!firstData && !secondData) {
    element.remove();
    return;
  }

  const firstText = firstData ? `${firstData} комнаты` : '';
  const secondText = secondData ? `для ${secondData} гостей` : '';
  const divider = firstText && secondText ? ' ' : '';

  element.textContent = `${firstText}${divider}${secondText}`;
};

const createTime = (firstData, secondData, parent, selector) => {
  const element = parent.querySelector(selector);
  if (!firstData && !secondData) {
    element.remove();
    return;
  }

  const firstText = firstData ? `Заезд до ${firstData}` : '';
  const secondText = secondData ? `Выезд после ${secondData}` : '';
  const divider = firstText && secondText ? ', ' : '';

  element.textContent = `${firstText}${divider}${secondText}`;
};

const createTypeHouse = (data, parent, selector) => {
  const element = parent.querySelector(selector);
  if (!data) {
    element.remove();
  }
  element.textContent = popupType[data] || 'Квартира';
};

const createFeatures = (data, parent, selector, parentSelector) => {
  const parentItem = parent.querySelector(parentSelector);
  if (!data) {
    parentItem.remove();
    return;
  }

  const elementList = parentItem.querySelectorAll(selector);
  const modifiers = data.map((dataEl) => `popup__feature--${dataEl}`);
  elementList.forEach((element) => {
    const modifier = element.classList[1];
    if (!modifiers.includes(modifier)) {
      element.remove();
    }
  });
};

const createPhotos = (data, parent, selector, parentSelector) => {
  const photoParent = parent.querySelector(parentSelector);
  const photoItem = photoParent.querySelector(selector);
  if (!data) {
    photoParent.remove();
  }
  if (data) {
    data.forEach((photoSrc) => {
      photoItem.remove();
      const photoClone = photoItem.cloneNode(true);
      photoParent.appendChild(photoClone);
      photoClone.src = photoSrc;
    });
  }
};

const createCard = ({ author, offer }) => {
  const offerClone = offerTemplate.cloneNode(true);
  createSimpleString(offer.title, offerClone, '.popup__title');
  createSimpleString(offer.address, offerClone, '.popup__text--address');
  createSimpleString(offer.price, offerClone, '.popup__text--price', ' ₽/ночь');
  createSimpleString(offer.description, offerClone, '.popup__description');
  createAvatar(author.avatar, offerClone, '.popup__avatar');
  createRooms(offer.rooms, offer.guests, offerClone, '.popup__text--capacity');
  createTime(offer.checkin, offer.checkout, offerClone, '.popup__text--time');
  createTypeHouse(offer.type, offerClone, '.popup__type');
  createFeatures(
    offer.features,
    offerClone,
    '.popup__feature',
    '.popup__features'
  );
  createPhotos(offer.photos, offerClone, '.popup__photo', '.popup__photos');

  return offerClone;
};

export { createCard };
