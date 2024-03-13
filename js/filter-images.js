import {getUniqueArrayElements} from './util.js';

const imgFiltersForm = document.querySelector('.img-filters__form');
const imgFilters = document.querySelector('.img-filters');

let pictures = [];
let currentFilter = '';

const sortCommentsDecsending = (photoA, photoB) => photoB.comments.length - photoA.comments.length;

const sortDescending = (arr) => arr.slice().sort(sortCommentsDecsending);

const filters = {
  'filter-default': () => pictures,
  'filter-random': () => getUniqueArrayElements(pictures),
  'filter-discussed': () => sortDescending(pictures)
};

const turnFilterOn = (data) => {
  imgFilters.classList.remove('img-filters--inactive');
  pictures = [...data];
  currentFilter = filters['filter-default'];
  currentFilter();
};


const setFilterClick = (cb) => {
  imgFiltersForm.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('img-filters__button--active')) {
      return;
    }
    imgFiltersForm.querySelectorAll('.img-filters__button').forEach((btn) => {
      if (btn !== evt.target) {
        btn.classList.remove('img-filters__button--active');
      }
    });
    evt.target.classList.add('img-filters__button--active');
    currentFilter = filters[evt.target.id];
    cb();
  });
};


export {turnFilterOn, currentFilter, setFilterClick};
