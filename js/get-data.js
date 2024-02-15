import {renderSmallPictures} from './render-small-pictures.js';
import {showAlert} from './util.js';

fetch('https://25.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      showAlert('Не удалось загрузить фотографии пользователей');
    }
  }
  )
  .then((photos) => {
    renderSmallPictures(photos);
  })
  .catch(() => {
    showAlert('Не удалось загрузить фотографии пользователей');
  });
