const uploadForm = document.querySelector('#upload-select-image');
const uploadFileInput = uploadForm.querySelector('#upload-file');
const imgUploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const uploadCancelButton = uploadForm.querySelector('#upload-cancel');

const hideImgUploadOverlay = () => {
  imgUploadOverlay.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onImgEscKeyDown);
  uploadFileInput.value = '';
};

const onCancelButtonClick = () => {
  hideImgUploadOverlay();
};

const onImgEscKeyDown = (evt) => {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    hideImgUploadOverlay();
  }
};

const showImgUploadOverlay = () => {
  imgUploadOverlay.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onImgEscKeyDown);
};

uploadFileInput.addEventListener('change', showImgUploadOverlay);

uploadCancelButton.addEventListener('click', onCancelButtonClick
);

export {uploadForm};
