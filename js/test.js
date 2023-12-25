/*
  ЗАДАЧА:
  Напишите функцию-генератор для получения случайных идентификаторов
  из указанного диапазона, и так, чтобы они не повторялись,
  пока не будут перебраны все числа из этого промежутка.
*/

function getRandomPositiveInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createRandomIdFromRangeGenerator (min, max) {
  const arr = new Array();
  return function () {
    let randInt = getRandomPositiveInteger (min, max);
    if (arr.length >= (max - min + 1)) {
      console.error('Перебраны все числа из диапазона');
      return null;
    }
    while (arr.includes(randInt)) {
      randInt = getRandomPositiveInteger (min, max);
    }
    arr.push(randInt);
    return randInt;
  };
}

const randId = createRandomIdFromRangeGenerator(1, 3);
console.log(randId());
console.log(randId());
console.log(randId());
console.log(randId());
console.log(randId());
console.log(randId());
console.log(randId());
console.log(randId());
console.log(randId());
