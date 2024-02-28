import './validate-form.js';
import './open-user-modal.js';
import './picture-size-editing.js';
import './picture-filters.js';
import {renderSmallPictures} from './render-small-pictures.js';
import {showAlert, debounce} from './util.js';
import {setUserFormSubmit} from './validate-form.js';
import {showSuccess} from './show-success-message.js';
import {showError} from './show-error-message.js';
import {getData} from './api.js';
import {turnFilterOn, currentFilter, setFilterClick} from './filter-images.js';

const RERENDER_DELAY = 500;

const onGetDataSucces = (data) => {
  turnFilterOn(data);
  renderSmallPictures(currentFilter());
  setFilterClick(debounce(() => renderSmallPictures(currentFilter()), RERENDER_DELAY));
};

getData(onGetDataSucces, showAlert);

setUserFormSubmit(showSuccess, showError);


