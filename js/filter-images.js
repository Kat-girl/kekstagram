const imgFiltersForm = document.querySelector('.img-filters__form');

imgFiltersForm.addEventListener('click', (evt) => {
  imgFiltersForm.querySelectorAll('.img-filters__button').forEach((btn) => btn.classList.remove('img-filters__button--active'));
  evt.target.classList.add('img-filters__button--active');
  console.log(evt.target.id);
});

// export {filterImages};
