import './popup.js'
import './form.js'

const tokioCenter = {
  x: 35.67500,
  y: 139.75000,
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

enableForm('.ad-form', 'fieldset');
enableForm('.map__filters', 'fieldset', 'select');
