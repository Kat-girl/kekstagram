import {renderSmallPictures} from './render-small-pictures.js';

fetch('https://25.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json())
  .then((photos) => {
    renderSmallPictures(photos);
  });
