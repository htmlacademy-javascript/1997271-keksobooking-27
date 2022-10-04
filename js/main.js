//Функция, возвращающая случайное целое число из переданного диапазона включительно.
const getRandomNumber = (min, max, count = 0) => {
  if (min === max || min < 0 || max < 0) {
    return NaN;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return +(Math.random() * (max - min) + min).toFixed(count);
};

console.log(getRandomNumber(1, 10, 2));
