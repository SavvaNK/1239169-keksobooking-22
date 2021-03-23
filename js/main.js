import './form.js';
import './map.js';
import { renderAds } from './map.js';
import { getData } from './api.js';
import { setAdFormSubmit, onSuccessSendDataOverlay, onFailGetDataOverlay, onFailSendDataOverlay } from './form.js';

getData(renderAds, onFailGetDataOverlay);

// draft
setAdFormSubmit(onSuccessSendDataOverlay, onFailSendDataOverlay);
