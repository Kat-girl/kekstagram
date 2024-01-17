const pictures = document.querySelector('.pictures');

const bigPictureContainer = document.querySelector('.big-picture');

const getUsersComment = (comments) => {
  const socialComments = bigPictureContainer.querySelector('.social__comments');
  const socialComment = socialComments.querySelector('.social__comment');

  socialComments.innerHTML = '';

  comments.forEach((comment) => {
    const usersComment = socialComment.cloneNode(true);
    const socialPicture = usersComment.querySelector('.social__picture');
    const socialText = usersComment.querySelector('.social__text');
    socialPicture.src = comment.avatar;
    socialPicture.alt = comment.name;
    socialText.textContent = comment.message;

    socialComments.append(usersComment);
  });

  return socialComments;
};

const openModal = (element, modal, smallPic) => {
  const bigPicture = bigPictureContainer.querySelector('.big-picture__img').children[0];
  const likesCount = bigPictureContainer.querySelector('.likes-count');
  const commentsCount = bigPictureContainer.querySelector('.comments-count');
  const socialCaption = bigPictureContainer.querySelector('.social__caption');

  element.addEventListener('click', () => {
    modal.classList.remove('hidden');
    document.querySelector('body').classList.add('modal-open');
    document.addEventListener('keydown', onEscKeyDown);

    bigPicture.src = smallPic.url;
    likesCount.textContent = smallPic.likes;
    commentsCount.textContent = smallPic.comments.length;
    socialCaption.textContent = smallPic.description;

    bigPictureContainer.querySelector('.social__comment-count').classList.add('hidden');
    bigPictureContainer.querySelector('.comments-loader').classList.add('hidden');

    getUsersComment(smallPic.comments);
  });
};

const hideBigPicture = () => {
  bigPictureContainer.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
};

const onCancelButtonClick = () => {
  hideBigPicture();
};

const onEscKeyDown = (evt) => {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPicture();
  }
};

const showBigPicture = (photos) => {
  const picturesCollection = pictures.querySelectorAll('.picture');
  const bigPictureCancel = bigPictureContainer.querySelector('.big-picture__cancel');

  for (let i = 0; i < picturesCollection.length; i ++) {
    openModal(picturesCollection[i], bigPictureContainer, photos[i]);
  }

  bigPictureCancel.addEventListener('click', () => {
    onCancelButtonClick();
  });
};


export {showBigPicture, pictures};


