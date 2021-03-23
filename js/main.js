import './form.js';
import './map.js';
import { renderAds } from './map.js';
import { getData, onFailGetDataOverlay, onSuccessSendDataOverlay, onFailSendDataOverlay } from './api.js';
import { setAdFormSubmit } from './form.js';

getData(renderAds, onFailGetDataOverlay);

// draft
setAdFormSubmit(onSuccessSendDataOverlay, onFailSendDataOverlay);
