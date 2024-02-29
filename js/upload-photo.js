import {uploadFileInput} from './open-user-modal.js';
import {previewImage} from './picture-size-editing.js';

const effectsPreview = document.querySelectorAll('.effects__preview');
console.log(effectsPreview);

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

uploadFileInput.addEventListener('change', () => {
  const file = uploadFileInput.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((el) => fileName.endsWith(el));
  if (matches) {
    previewImage.src = URL.createObjectURL(file);
    for (const effect of effectsPreview) {
      effect.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
    }
  }
});
