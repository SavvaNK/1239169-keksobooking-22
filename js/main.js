import './form.js';
import './map.js';
import { renderAds } from './map.js';
import { getData, onFailGetDataOverlay } from './api.js';

getData((ads) => renderAds(ads), (err) => onFailGetDataOverlay(err));
