// import {uploadForm} from './open-user-modal.js';
import {previewImage, uploadForm} from './picture-size-editing.js';

const effects = uploadForm.querySelector('.img-upload__effects');
const rangeSlider = uploadForm.querySelector('.effect-level__slider');
const rangeValue = uploadForm.querySelector('.effect-level__value');

const filterIntensity = {
  chrome: {
    range: {
      min: 0,
      max: 1
    },
    step: 0.1,
    start: 1
  },
  sepia: {
    range: {
      min: 0,
      max: 1
    },
    step: 0.1,
    start: 1
  },
  marvin: {
    range: {
      min: 0,
      max: 100
    },
    step: 1,
    start: 100
  },
  phobos: {
    range: {
      min: 0,
      max: 3
    },
    step: 0.1,
    start: 3
  },
  heat: {
    range: {
      min: 1,
      max: 3
    },
    step: 0.1,
    start: 3
  }
};

const filterType = {
  chrome: 'grayscale',
  sepia: 'sepia',
  marvin: 'invert',
  phobos: 'blur',
  heat: 'brightness'
};

noUiSlider.create(rangeSlider, {
  range: {
    min: 0,
    max: 100
  },
  start: 100,
  step: 1,
  connect: 'lower'
});

const onSliderUpdate = (data) => {
  rangeSlider.noUiSlider.on('update', () => {
    rangeValue.value = rangeSlider.noUiSlider.get();
    const effectType = filterType[data];
    previewImage.style.filter = `${effectType}(${rangeValue.value})`;
    if (effectType === 'invert') {
      previewImage.style.filter = `${effectType}(${rangeValue.value}%)`;
    } else if (effectType === 'blur') {
      previewImage.style.filter = `${effectType}(${rangeValue.value}px)`;
    }
  });
};

effects.addEventListener('change', (evt) => {
  previewImage.className = '';
  const checkedOption = evt.target.value;
  previewImage.classList.add(`effects__preview--${checkedOption}`);
  if (checkedOption === 'none') {
    previewImage.style.removeProperty('filter');
    uploadForm.querySelector('.img-upload__effect-level').classList.add('hidden');
  } else {
    uploadForm.querySelector('.img-upload__effect-level').classList.remove('hidden');
    rangeSlider.noUiSlider.updateOptions(filterIntensity[checkedOption]);
    onSliderUpdate(checkedOption);
  }
});

const setDefaultFilters = () => {
  previewImage.className = '';
  previewImage.style.removeProperty('filter');
  uploadForm.querySelector('.img-upload__effect-level').classList.add('hidden');
};

export {setDefaultFilters};
