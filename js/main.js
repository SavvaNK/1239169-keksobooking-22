import './popup.js'
import './form.js'

const tokioCenter = {
  lat: 35.67500,
  lng: 139.75000,
};

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

const map = L.map('map-canvas')
  .on('load', () => {
    enableForm('.ad-form', 'fieldset');
    enableForm('.map__filters', 'fieldset', 'select');
  })
  .setView({
    lat: tokioCenter.lat,
    lng: tokioCenter.lng,
  }, 13);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

