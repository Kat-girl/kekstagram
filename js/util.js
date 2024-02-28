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

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.backgroundColor = '#ff0000';
  alertContainer.style.padding = '20px';
  alertContainer.style.fontSize = '25px';
  alertContainer.style.fontWeight = 700;
  alertContainer.style.textAlign = 'center';
  alertContainer.textContent = message;
  document.querySelector('body').append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
};

const getUniqueArrayElements = (arr, length = 10) => {
  const arr2 = new Array();
  let newElem = getRandomArrayElement(arr);
  while (arr2.length < length) {
    while (arr2.includes(newElem)) {
      newElem = getRandomArrayElement(arr);
    }
    arr2.push(newElem);
  }
  return arr2;
};

export {getRandomIntInclusive, getRandomArrayElement, getUniqueNumber, showAlert, getUniqueArrayElements};
