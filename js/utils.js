//Генерация случайных чисел
const getRandomNumber = (min, max, count = 0) => {
  if (min === max || min < 0 || max < 0) {
    return NaN;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return +(Math.random() * (max - min) + min).toFixed(count);
};

//Создание массива из случайных значений
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

//Добаления нуля однозначным числам
const createAvatarSrc = (value) => {
  if (value < 10) {
    value = `0${value}`;
  }
  return `img/avatars/user${value}.png`;
};

//Получения случайного элемента массива
const getRandomArrayElement = (elements) =>
  elements[getRandomNumber(0, elements.length - 1)];

export {
  getRandomNumber,
  shuffleArray,
  createAvatarSrc,
  getRandomArrayElement,
};
