import { renderPictures } from './picture.js';
import { getData, sendData } from './api.js';
import { showAlert } from './util.js';
import { setOnFormSubmit, hideModal } from './form.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
import { turnFilterOn, filterPictures } from './filter.js';

const onSendDataSuccess = () => {
  hideModal();
  showSuccessMessage();
};

const onSendDataError = () => {
  showErrorMessage();
};

setOnFormSubmit(async (data) => {
  await sendData(onSendDataSuccess, onSendDataError, data);
});

const onGetDataSuccess = (data) => {
  turnFilterOn(data);
  renderPictures(filterPictures());
};

getData(onGetDataSuccess, showAlert);

