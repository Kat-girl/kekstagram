import {hideImgUploadOverlay} from './open-user-modal.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const successButton = successTemplate.querySelector('.success__button');
const successInner = successTemplate.querySelector('.success__inner');
const successTitle = successTemplate.querySelector('.success__title');

const hideSuccessMessage = () => {
  successTemplate.classList.add('hidden');
  document.removeEventListener('keydown', onMsgEscKeyDown);
};

function onMsgEscKeyDown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideSuccessMessage();
  }
}

const onSuccessButtonClick = () => {
  hideSuccessMessage();
};

const onEmptyAreaClick = (evt) => {
  if (evt.target !== successInner && evt.target !== successTitle) {
    hideSuccessMessage();
  }
};

const createSuccessMessage = () => {
  const fragment = document.createDocumentFragment();
  fragment.append(successTemplate);
  document.querySelector('body').append(fragment);
  if (successTemplate.classList.contains('hidden')) {
    successTemplate.classList.remove('hidden');
  }
  successButton.addEventListener('click', onSuccessButtonClick);
  document.addEventListener('keydown', onMsgEscKeyDown);
  successTemplate.addEventListener('click', onEmptyAreaClick);
};

const showSuccess = () => {
  hideImgUploadOverlay();
  createSuccessMessage();
};

export {showSuccess};
