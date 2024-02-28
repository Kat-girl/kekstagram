import './validate-form.js';
import './open-user-modal.js';
import './picture-size-editing.js';
import './picture-filters.js';
import {renderSmallPictures} from './render-small-pictures.js';
import {showAlert} from './util.js';
import {setUserFormSubmit} from './validate-form.js';
import {showSuccess} from './show-success-message.js';
import {showError} from './show-error-message.js';
import {getData} from './api.js';
import {turnFilterOn, currentFilter} from './filter-images.js';

const onGetDataSucces = (data) => {
  turnFilterOn(data);
  renderSmallPictures(currentFilter());
};

getData(onGetDataSucces, showAlert);

setUserFormSubmit(showSuccess, showError);


