const TITLE = [
  'Стандартная квартира в центре',
  'Большая квартирка на окрайне',
  'Квартира рядом с метро',
  'Небольшая квартира для студентов',
  'Загородный дом для отдыха',
];

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
];

const DESCRIPTION = [
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


const getRandomNumber = (min, max, count = 0) => {
  if (min === max || min < 0 || max < 0) {
    return NaN;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return +(Math.random() * (max - min ) + min).toFixed(count);
};

//Функция добаления нуля однозначным числам
const padValue = (value) => {
  if (value < 10) {
    return `0${value}`;
  }
  return value;
};

//Создание массива из случайных значений
const getRandomArrayLength = ([...arrays] , maxLength) => Array.from(
  { length : Math.min(arrays.length, 1 + Math.random() * maxLength | 0) },
  () => arrays.splice(Math.random() * arrays.length | 0, 1)[0]
);

//Функция для получения случайного элемента массива
const getRandomArrayElement = (elements) =>
  elements[getRandomNumber(0, elements.length - 1)];

//Создание объекта
const createObject = () => {
  const lat = getRandomNumber(35.65000,35.70000,5);
  const lng = getRandomNumber(139.70000, 139.80000 ,5);
  return{
    avatar : {
      avatar: `img/avatars/user${padValue(getRandomNumber(1, 10))}.png`,
    },
    offer : {
      title: getRandomArrayElement(TITLE),
      adress:{
        lat,
        lng,
      },
      price : getRandomNumber(1, 100000),
      type : getRandomArrayElement(TYPE),
      rooms : getRandomNumber(1, 5),
      checkin :getRandomArrayElement(CHECKIN),
      checkout :getRandomArrayElement(CHECKOUT),
      features : getRandomArrayLength(FEATURES,getRandomNumber(1,5)),
      description : getRandomArrayElement(DESCRIPTION),
      photos : getRandomArrayLength(PHOTOS,getRandomNumber(1,3)),
    },
    location: {
      lat,
      lng
    }
  };
};


//Создание массива

const similarOffer = () => Array.from({length:10}, createObject);

similarOffer();


