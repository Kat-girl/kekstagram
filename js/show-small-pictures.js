import {getUserPhotoDescriptions} from './get-user-photo-descriptions.js';
const userPhotos = getUserPhotoDescriptions();

const renderPicturesFragment = (photos) => {
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
  return fragment;
};

const renderPictures = renderPicturesFragment(userPhotos);

const showPictures = (container) => {
  container.append(renderPictures);
};

export {showPictures, userPhotos};
