import {showBigPicture} from './show-big-picture.js';

const pictures = document.querySelector('.pictures');
const imgFilters = document.querySelector('.img-filters');

const renderSmallPictures = (photos) => {
  const fragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture').cloneNode(true);
    const pictureImg = pictureTemplate.querySelector('.picture__img');
    pictureImg.src = photo.url;

    const pictureComments = pictureTemplate.querySelector('.picture__comments');
    pictureComments.textContent = photo.comments.length;

    const pictureLikes = pictureTemplate.querySelector('.picture__likes');
    pictureLikes.textContent = photo.likes;

    fragment.append(pictureTemplate);
  });
  pictures.append(fragment);
  imgFilters.classList.remove('img-filters--inactive');
  showBigPicture(photos);
};

export {renderSmallPictures};
