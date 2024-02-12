const uploadForm = document.querySelector('#upload-select-image');
const uploadFileInput = uploadForm.querySelector('#upload-file');
const imgUploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const uploadCancelButton = uploadForm.querySelector('#upload-cancel');
const hashtagsInput = uploadForm.querySelector('.text__hashtags');
const photoDescription = uploadForm.querySelector('.text__description');

const hideImgUploadOverlay = () => {
  imgUploadOverlay.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onImgEscKeyDown);
  uploadForm.reset();
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

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__input-wrapper',
  errorTextParent: 'img-upload__input-wrapper',
});

const startsWithHashtag = (value) => value[0] === '#';

const hasValidSymbols = (value) => {
  const validSymbols = /^[A-Za-zА-Яа-яЁё0-9]+$/g;
  return validSymbols.test(value.slice(1));
};

const isValidLength = (value) => value.length >= 2 && value.length <= 20;

const validateHashtag = (value) => startsWithHashtag(value) && hasValidSymbols(value) && isValidLength(value);

const hasRepeatingElems = (array) => {
  const toLowerCaseTags = array.map((elem) => elem.toLowerCase());
  return toLowerCaseTags.every((elem, index) => toLowerCaseTags.indexOf(elem) === index);
};

const hasValidHashtagsAmount = (array) => array.length <= 5;

const validateHashtagsInput = (string) => {
  const hashtags = string.trim().split(' ');
  return hashtags.every((tag) => validateHashtag(tag) && hasRepeatingElems(hashtags) && hasValidHashtagsAmount(hashtags));
};

pristine.addValidator(hashtagsInput,
  validateHashtagsInput,
  'Invalid hashtag');

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

hashtagsInput.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

photoDescription.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

export {uploadForm};

