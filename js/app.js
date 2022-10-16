import {
  getRandomNumber,
  shuffleArray,
  getRandomArrayElement,
} from './utils.js';

const OFFER_COUNTER = 10;

const LOCATION = {
  lat: {
    min: 35.65,
    max: 35.7,
  },
  lng: {
    min: 139.7,
    max: 139.8,
  },
};

const TITLES = [
  'Стандартная квартира в центре',
  'Большая квартирка на окрайне',
  'Квартира рядом с метро',
  'Небольшая квартира для студентов',
  'Загородный дом для отдыха',
];

const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const CHECK_IN_TIMES = ['12:00', '13:00', '14:00'];

const CHECKOUT_TIMES = ['12:00', '13:00', '14:00'];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
  'Просто маленькая квартирка для бедных студентов',
  'Дворец для настоящих ценителей архитектуры',
  'Подвальчик в одной из пятиэтажек',
  'Квартира со свежим ремонтом и кафешкой на первом на этаже',
  'Квартира с ужасно шумными соседями',
  'За углом есть шаверма',
  'Стены очень тонкие и в соседней комнате живут студенты',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

//Добаления нуля однозначным числам
const createAvatarSrc = (value) => {
  if (value < 10) {
    value = `0${value}`;
  }
  return `img/avatars/user${value}.png`;
};

//Создание объекта
const createObject = () => {
  const location = {
    lat: getRandomNumber(LOCATION.lat.min, LOCATION.lat.max, 5),
    lng: getRandomNumber(LOCATION.lng.min, LOCATION.lng.max, 5),
  };
  return {
    author: {
      avatar: createAvatarSrc(getRandomNumber(1, 10)),
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${location.lat},${location.lng}`,
      price: getRandomNumber(1, 100000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomNumber(1, 5),
      guests: getRandomNumber(1, 3),
      checkin: getRandomArrayElement(CHECK_IN_TIMES),
      checkout: getRandomArrayElement(CHECKOUT_TIMES),
      features: shuffleArray(FEATURES).slice(
        getRandomNumber(1, FEATURES.length)
      ),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: shuffleArray(PHOTOS).slice(getRandomNumber(1, PHOTOS.length)),
    },
    location,
  };
};

//Создание массива

const сreateSimilarOffers = () =>
  Array.from({ length: OFFER_COUNTER }, createObject);

export { сreateSimilarOffers };
