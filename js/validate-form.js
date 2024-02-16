import { uploadForm } from './open-user-modal.js';

const hashtagsInput = uploadForm.querySelector('.text__hashtags');
const photoDescription = uploadForm.querySelector('.text__description');

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
  if (string) {
    const hashtags = string.trim().split(' ');
    return hashtags.every((tag) => validateHashtag(tag) && hasRepeatingElems(hashtags) && hasValidHashtagsAmount(hashtags));
  } else {
    return true;
  }
};

pristine.addValidator(hashtagsInput,
  validateHashtagsInput,
  'Invalid hashtag');

hashtagsInput.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

photoDescription.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

const setUserFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(evt.target);
      fetch ('https://25.javascript.htmlacademy.pro/kekstagram',
        {
          method: 'POST',
          body: formData
        })
        .then(() => onSuccess());
    }
  });
};

export {setUserFormSubmit};

