import './validate-form.js';
import './open-user-modal.js';
import './picture-size-editing.js';
import './picture-filters.js';
import './get-data.js';
import {setUserFormSubmit} from './validate-form.js';
import {showSuccess} from './show-success-message.js';
import {showError} from './show-error-message.js';

setUserFormSubmit(showSuccess, showError);


