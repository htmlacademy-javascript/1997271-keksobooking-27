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

export { getRandomNumber, shuffleArray, getRandomArrayElement };
