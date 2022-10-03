// eslint-disable-next-line no-unused-vars

//Функция, возвращающая случайное целое число из переданного диапазона включительно.
function getRandomInteger(min, max) {
  if (max <= min || min < 0 || max < 0) {
    return NaN;
  }

  const RANDOM_NUMBER = Math.floor(Math.random() * (max - min + 1)) + min;
  return RANDOM_NUMBER;
}

console.log(getRandomInteger(1, 10));

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
function getRandomFloat(min, max, count) {
  const NUMBER_OF_CHARACTER = count;

  if (max <= min || min < 0 || max < 0) {
    return NaN;
  }

  const RANDOM_NUMBER = Math.random() * (max - min + 1) + min;
  return +RANDOM_NUMBER.toFixed(NUMBER_OF_CHARACTER);
}

console.log(getRandomFloat(1, 10, 2));
