import {uploadForm} from './upload-picture-form.js';

const scaleControlSmaller = uploadForm.querySelector('.scale__control--smaller');
const scaleControlBigger = uploadForm.querySelector('.scale__control--bigger');
const scaleControlValue = uploadForm.querySelector('.scale__control--value');
const previewImage = uploadForm.querySelector('.img-upload__preview').children[0];

const changePictureSize = () => {
  if (parseInt(scaleControlValue.value, 10) < 100) {
    previewImage.style.transform = `scale(0.${parseInt(scaleControlValue.value, 10)})`;
  } else {
    previewImage.style.transform = 'scale(1)';
  }
};

scaleControlSmaller.addEventListener('click', () => {
  if (parseInt(scaleControlValue.value, 10) > 25) {
    scaleControlValue.value = `${parseInt(scaleControlValue.value, 10) - 25}%`;
  } else {
    scaleControlValue.value = '25%';
  }
  changePictureSize();
});

scaleControlBigger.addEventListener('click', () => {
  if (parseInt(scaleControlValue.value, 10) < 100) {
    scaleControlValue.value = `${parseInt(scaleControlValue.value, 10) + 25}%`;
  } else {
    scaleControlValue.value = '100%';
    previewImage.style.transform = 'scale(1)';
  }
  changePictureSize();
});


