const imgFiltersForm = document.querySelector('.img-filters__form');

const array1 = [15, 2, 3];

const showDefault = (arr) => arr;

const sortDescending = (arr) => arr.slice().sort((a, b) => b - a);

const filters = {
  'filter-default': (arr) => showDefault(arr),
  'filter-random': (arr) => sortDescending(arr)
};

imgFiltersForm.addEventListener('click', (evt) => {
  imgFiltersForm.querySelectorAll('.img-filters__button').forEach((btn) => btn.classList.remove('img-filters__button--active'));
  evt.target.classList.add('img-filters__button--active');
  // console.log(evt.target.id);
  const exe = filters[evt.target.id];
  console.log(exe(array1));
  exe(array1);
});

// export {filterImages};
