const slider = document.querySelector('.level-form__slider');
const input = document.querySelector('.level-form__input');
const special = document.querySelector('.level-form__special');

input.value = 20;

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 100
  },
  start: 20,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value;
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    }
  }
});

slider.noUiSlider.on('update', () => {
  input.value = slider.noUiSlider.get();
});

special.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    slider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 10
      },
      start: 2,
      step: 0.1,
    });
  } else {
    slider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100
      },
      start: 20,
      step: 1,
    });
  }
});
