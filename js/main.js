import './popup.js'
import './form.js'

const tokioCenter = {
  x: 35.67500,
  y: 139.75000,
};

const makeFormInactive = (formClassName) => {
  const form = document.querySelector(`.${formClassName}`);
  form.classList.add(`.${formClassName}--disabled`);

  for (let child of form) {
    child = child.disabled = true;
  }
};

const makeFormActive = (formClassName) => {
  const form = document.querySelector(`.${formClassName}`);
  form.classList.remove(`.${formClassName}--disabled`);

  for (let child of form) {
    child = child.disabled = false;
  }
};

makeFormInactive('ad-form');
makeFormInactive('map__filters');

makeFormActive('ad-form');
makeFormActive('map__filters');
