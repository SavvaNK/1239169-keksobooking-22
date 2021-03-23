import './form.js';
import './map.js';
import { renderAds } from './map.js';
import { getData, onFailGetDataOverlay, onFailSendDataOverlay } from './api.js';
import { setAdFormSubmit, onSuccessSendDataOverlay } from './form.js';

getData(renderAds, onFailGetDataOverlay);

// draft
setAdFormSubmit(onSuccessSendDataOverlay, onFailSendDataOverlay);
