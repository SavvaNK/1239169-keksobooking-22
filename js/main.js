import './form.js';
import './map.js';
import { renderAds } from './map.js';
import { getData, sendData, onFailGetDataOverlay, onSuccessSendDataOverlay } from './api.js';
import { setAdFormSubmit } from './form.js';

getData((ads) => renderAds(ads), (err) => onFailGetDataOverlay(err));

// draft
setAdFormSubmit(onSuccessSendDataOverlay);
