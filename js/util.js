// источник: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomIntInclusive = (min, max = 1) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
};

const checkMaxStringLength = (string, maxLength) => string.length <= maxLength;

const getRandomArrayElement = (array) => array[getRandomIntInclusive (0, array.length - 1)];

const getUniqueNumber = () => {
  let counter = 1;
  return function () {
    return counter ++;
  };
};

checkMaxStringLength('ok', 140);

export {getRandomIntInclusive, getRandomArrayElement, getUniqueNumber};
