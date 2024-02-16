// const uploadForm = document.querySelector('#upload-select-image');

import {uploadForm, setDefaultSize} from './picture-size-editing.js';
import {setDefaultFilters} from './picture-filters.js';

const uploadFileInput = uploadForm.querySelector('#upload-file');
const imgUploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const uploadCancelButton = uploadForm.querySelector('#upload-cancel');

const resetForm = () => {
  uploadForm.reset();
  setDefaultSize();
  setDefaultFilters();
};

const hideImgUploadOverlay = () => {
  imgUploadOverlay.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onImgEscKeyDown);
  resetForm();
};

const onCancelButtonClick = () => {
  hideImgUploadOverlay();
};

function onImgEscKeyDown (evt) {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    hideImgUploadOverlay();
  }
}

const showImgUploadOverlay = () => {
  imgUploadOverlay.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  uploadForm.querySelector('.img-upload__effect-level').classList.add('hidden');
  document.addEventListener('keydown', onImgEscKeyDown);
};

uploadFileInput.addEventListener('change', showImgUploadOverlay);

uploadCancelButton.addEventListener('click', onCancelButtonClick);

export {uploadForm, showImgUploadOverlay, hideImgUploadOverlay};
