const SHOW_TIME = 5000;

//Генерация случайных чисел
const getRandomNumber = (min, max, decimalPlaces) => {
  if (min < 0 || min === max) {
    return NaN;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  if (decimalPlaces) {
    return +(Math.random() * (max - min) + min).toFixed(decimalPlaces);
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//Создание массива из случайных значений
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

//Получения случайного элемента массива
const getRandomArrayElement = (elements) =>
  elements[getRandomNumber(0, elements.length - 1)];

const isEscEvent = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alertTemplate = document.createElement('div');
  alertTemplate.style.zIndex = '99';
  alertTemplate.style.position = 'absolute';
  alertTemplate.style.left = '0';
  alertTemplate.style.top = '0';
  alertTemplate.style.right = '0';
  alertTemplate.style.padding = '10px 3px';
  alertTemplate.style.fontSize = '16px';
  alertTemplate.style.textAlign = 'center';
  alertTemplate.style.backgroundColor = '#F00A00';
  alertTemplate.textContent = message;
  document.body.append(alertTemplate);
  setTimeout(() => {
    alertTemplate.remove();
  }, SHOW_TIME);
};

export {
  getRandomNumber,
  shuffleArray,
  getRandomArrayElement,
  isEscEvent,
  showAlert,
};
