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

const tokioCenter = {
  lat: 35.67500,
  lng: 139.75000,
};

const map = L.map('map-canvas') // eslint-disable-line
  .on('load', () => {
    enableForm('.ad-form', 'fieldset');
    enableForm('.map__filters', 'fieldset', 'select');
  })
  .setView({
    lat: tokioCenter.lat,
    lng: tokioCenter.lng,
  }, 13);

L.tileLayer( // eslint-disable-line
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainIcon = L.icon({ // eslint-disable-line
  iconUrl: '../img/main-pin.svg',
  iconSize: [60, 80],
  iconAnchor: [30, 80],
});

const mainMarker = L.marker( // eslint-disable-line
  {
    lat: tokioCenter.lat,
    lng: tokioCenter.lng,
  },
  {
    draggable: true,
    icon: mainIcon,
  },
).addTo(map);

const address = document.querySelector('#address');
address.readOnly = true;
address.value = `${tokioCenter.lat}, ${tokioCenter.lng}`;

mainMarker.on('drag', (evt) => {
  address.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});
