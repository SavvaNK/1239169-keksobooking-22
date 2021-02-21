import './popup.js';
import './form.js';

const disableElement = (el) => el.disabled = true;
const enableElement = (el) => el.disabled = false;
const mapChildren = (parent, selector, fn) => parent.querySelectorAll(selector).forEach(fn);

const disableForm = (formSelector, ...selectors) => {
  const form = document.querySelector(`${formSelector}`);
  form.classList.add(`${formSelector}--disabled`);
  selectors.forEach((selector) => mapChildren(form, selector, disableElement));
};

const enableForm = (formSelector, ...selectors) => {
  const form = document.querySelector(`${formSelector}`);
  form.classList.remove(`${formSelector}--disabled`);
  selectors.forEach((selector) => mapChildren(form, selector, enableElement));
};

disableForm('.ad-form', 'fieldset');
disableForm('.map__filters', 'fieldset', 'select');

const TokioCenter = {
  LAT: 35.67500,
  LNG: 139.75000,
};

const map = L.map('map-canvas') // eslint-disable-line
  .on('load', () => {
    enableForm('.ad-form', 'fieldset');
    enableForm('.map__filters', 'fieldset', 'select');
  })
  .setView({
    lat: TokioCenter.LAT,
    lng: TokioCenter.LNG,
  }, 13);

L.tileLayer( // eslint-disable-line
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainIcon = L.icon({ // eslint-disable-line
  iconUrl: '../img/main-pin.svg',
  iconSize: [48, 48],
  iconAnchor: [24, 48],
});

const mainMarker = L.marker( // eslint-disable-line
  {
    lat: TokioCenter.LAT,
    lng: TokioCenter.LNG,
  },
  {
    draggable: true,
    icon: mainIcon,
  },
).addTo(map);

const address = document.querySelector('#address');
address.readOnly = true;
address.value = `${TokioCenter.LAT}, ${TokioCenter.LNG}`;

mainMarker.on('drag', (evt) => {
  const { lat, lng } = evt.target.getLatLng();
  address.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
});
