import './popup.js'
import './form.js'

const tokioCenter = {
  x: 35.67500,
  y: 139.75000,
};

const makeElementDisabled = (el) => el.disabled = true;

const adForm = document.querySelector('.ad-form');

adForm.classList.add('.ad-form--disabled');

const adFormFieldsets = adForm.querySelectorAll('fieldset');

adFormFieldsets.forEach(makeElementDisabled);


const mapFilters = document.querySelector('.map__filters');

mapFilters.classList.add('.map__filters--disabled');

const mapFiltersFieldsets = mapFilters.querySelectorAll('fieldset');

mapFiltersFieldsets.forEach(makeElementDisabled);

const mapFiltersSelects = mapFilters.querySelectorAll('select');

mapFiltersSelects.forEach(makeElementDisabled);
