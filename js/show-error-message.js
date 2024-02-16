import {hideImgUploadOverlay} from './open-user-modal.js';

const errorTemplate = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const errorButton = errorTemplate.querySelector('.error__button');
const errorInner = errorTemplate.querySelector('.error__inner');
const errorTitle = errorTemplate.querySelector('.error__title');

const hideErrorMessage = () => {
  errorTemplate.classList.add('hidden');
  document.removeEventListener('keydown', onMsgEscKeyDown);
};

function onMsgEscKeyDown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideErrorMessage();
  }
}

const onErrorButtonClick = () => {
  hideErrorMessage();
};

const onEmptyAreaClick = (evt) => {
  if (evt.target !== errorInner && evt.target !== errorTitle) {
    hideErrorMessage();
  }
};

const createErrorMessage = () => {
  const fragment = document.createDocumentFragment();
  fragment.append(errorTemplate);
  document.querySelector('body').append(fragment);
  if (errorTemplate.classList.contains('hidden')) {
    errorTemplate.classList.remove('hidden');
  }
  errorButton.addEventListener('click', onErrorButtonClick);
  document.addEventListener('keydown', onMsgEscKeyDown);
  errorTemplate.addEventListener('click', onEmptyAreaClick);
};

const showError = () => {
  hideImgUploadOverlay();
  createErrorMessage();
};

export {showError};
