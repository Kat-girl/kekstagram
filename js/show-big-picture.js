const bigPictureContainer = document.querySelector('.big-picture');
const commentsLoaderButton = bigPictureContainer.querySelector('.social__comments-loader');
const commentsCurrent = bigPictureContainer.querySelector('.comments-current');

const COMMENTS_PER_PORTION = 5;
let commentsShown = 0;
let commentsArray = [];

const getUsersComment = (comments) => {
  const socialComments = bigPictureContainer.querySelector('.social__comments');
  const socialComment = socialComments.querySelector('.social__comment');

  socialComments.innerHTML = '';

  commentsShown += COMMENTS_PER_PORTION;

  if (comments.length <= commentsShown) {
    commentsShown = comments.length;
    commentsLoaderButton.classList.add('hidden');
  } else {
    commentsLoaderButton.classList.remove('hidden');
  }

  for (let i = 0; i < commentsShown; i ++) {
    const comment = comments[i];
    const usersComment = socialComment.cloneNode(true);
    const socialPicture = usersComment.querySelector('.social__picture');
    const socialText = usersComment.querySelector('.social__text');
    socialPicture.src = comment.avatar;
    socialPicture.alt = comment.name;
    socialText.textContent = comment.message;

    socialComments.append(usersComment);
  }

  commentsCurrent.textContent = commentsShown;

  return socialComments;
};

const openModal = () => {
  bigPictureContainer.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onModalEscKeyDown);
};

const renderPictureInfo = (element, smallPic) => {
  const bigPicture = bigPictureContainer.querySelector('.big-picture__img').children[0];
  const likesCount = bigPictureContainer.querySelector('.likes-count');
  const commentsCount = bigPictureContainer.querySelector('.comments-count');
  const socialCaption = bigPictureContainer.querySelector('.social__caption');

  element.addEventListener('click', () => {
    openModal();

    bigPicture.src = smallPic.url;
    likesCount.textContent = smallPic.likes;
    commentsCount.textContent = smallPic.comments.length;
    socialCaption.textContent = smallPic.description;

    commentsArray = smallPic.comments;

    getUsersComment(smallPic.comments);
  });
};

commentsLoaderButton.addEventListener('click', () => {
  getUsersComment(commentsArray);
});

const resetCommentsShown = () => {
  commentsShown = 0;
};

const closeModal = () => {
  bigPictureContainer.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onModalEscKeyDown);
  resetCommentsShown();
};

const onCancelButtonClick = () => {
  closeModal();
};

function onModalEscKeyDown (evt) {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    closeModal();
  }
}

const showBigPicture = (photos) => {
  const picturesCollection = document.querySelectorAll('.picture');
  const bigPictureCancel = bigPictureContainer.querySelector('.big-picture__cancel');

  for (let i = 0; i < picturesCollection.length; i ++) {
    renderPictureInfo(picturesCollection[i], photos[i]);
  }

  bigPictureCancel.addEventListener('click', () => {
    onCancelButtonClick();
  });
};

export {showBigPicture};
