// eslint-disable-next-line no-unused-vars
//Функция, возвращающая случайное целое число из переданного диапазона включительно.

function getRndInteger(min, max) {
  return max <= min || min < 0 || max < 0
    ? NaN
    : Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRndInteger(1, 50));

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
function getRndFloat(min, max) {
  return max <= min || min < 0 || max < 0
    ? NaN
    : Math.random() * (max - min + 1) + min;
}

console.log(getRndFloat(1, 10));
