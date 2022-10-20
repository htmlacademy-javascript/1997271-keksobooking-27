import { сreateSimilarOffers } from './app.js';

const offerList = document.querySelector('#map-canvas');

const offerTemplate = document
  .querySelector('#card')
  .content.querySelector('.popup');

const similarOffers = сreateSimilarOffers(1);

similarOffers.forEach(({ author, offer }) => {
  const offerClone = offerTemplate.cloneNode(true);
  //заголовок
  offerClone.querySelector('.popup__title').textContent = offer.title;
  //Адрес
  offerClone.querySelector('.popup__text--address').textContent = offer.address;
  //Цена
  offerClone.querySelector(
    '.popup__text--price'
  ).textContent = `${offer.price} ₽/ночь`;
  //тип жилья
  const popupType = {
    flat: 'Квартира',
    bungalow: 'Бунгало',
    house: 'Дом',
    palace: 'Дворец',
    hotel: 'Отель',
  };
  for (let key in popupType) {
    key = offer.type;
    offerClone.querySelector('.popup__type').textContent = popupType[key];
  }
  //комнаты для гостей
  offerClone.querySelector(
    '.popup__text--capacity'
  ).textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  //время заезда/выезда
  offerClone.querySelector(
    '.popup__text--time'
  ).textContent = `Заезд после ${offer.checkin},выезд до ${offer.checkout}`;
  //удобства
  const featuresContainerList = offerClone.querySelectorAll('.popup__feature');
  featuresContainerList.forEach((featuresList) => {
    const isNecessary = offer.features.some((featureItem) =>
      featuresList.classList.contains(`popup__feature--${featureItem}`)
    );
    if (!isNecessary) {
      featuresList.remove();
    }
  });
  //описание
  offerClone.querySelector('.popup__description').textContent =
    offer.description;
  //фотографии
  const photosContainer = offerClone.querySelector('.popup__photos');
  const photosItem = photosContainer.querySelector('.popup__photo');
  offer.photos.forEach((photoElement) => {
    if (offer.photos.length >= 1) {
      photosItem.remove();
      const photoClone = photosItem.cloneNode(true);
      photosContainer.appendChild(photoClone);
      photoClone.src = photoElement;
    }
  });
  if (offer.photos.length === 0) {
    photosContainer.classList.add('hidden');
  }
  //аватарка
  offerClone.querySelector('.popup__avatar').src = author.avatar;
  offerList.appendChild(offerClone);
});
