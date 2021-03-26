/* global L:readonly */

import { createPopup } from './popup.js';

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

const tokioCenter = Object.freeze({
  lat: 35.67500,
  lng: 139.75000,
});

const ICON_SIZE = Object.freeze([48, 48]);
const ICON_ANCHOR_SIZE = Object.freeze([24, 48]);
const PRECISION_AFTER_POINT = 5;
const MAP_ZOOM = 9;

const map = L.map('map-canvas')
  .on('load', () => {
    enableForm('.ad-form', 'fieldset');
    enableForm('.map__filters', 'fieldset', 'select');
  })
  .setView(tokioCenter, MAP_ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: ICON_SIZE,
  iconAnchor: ICON_ANCHOR_SIZE,
});

const mainMarker = L.marker(
  tokioCenter,
  {
    draggable: true,
    icon: mainIcon,
  },
).addTo(map);

const address = document.querySelector('#address');
address.readOnly = true;
address.value = `${tokioCenter.lat}, ${tokioCenter.lng}`;

mainMarker.on('drag', (evt) => {
  const { lat, lng } = evt.target.getLatLng();
  address.value = `${lat.toFixed(PRECISION_AFTER_POINT)}, ${lng.toFixed(PRECISION_AFTER_POINT)}`;
});

let renderedMinorMarkers = [];

const renderAds = (ads) => {
  renderedMinorMarkers.forEach(marker => marker.remove());
  renderedMinorMarkers = [];

  ads.forEach((ad) => {
    const pinIcon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: ICON_SIZE,
      iconAnchor: ICON_ANCHOR_SIZE,
    });

    const marker = L.marker(
      ad.location,
      {
        icon: pinIcon,
      },
    );

    marker
      .addTo(map)
      .bindPopup(
        createPopup(ad),
        {
          keepInView: true,
        },
      );

    renderedMinorMarkers.push(marker);
  });
};

export { renderAds };
