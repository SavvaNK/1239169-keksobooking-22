import { sendData, getData } from './api.js';
import { renderAds } from './map.js';

const adForm = document.querySelector('.ad-form');

const minPriceForType = {
  palace: 10000,
  flat: 1000,
  house: 5000,
  bungalow: 0,
};

const priceInput = adForm.querySelector('#price');
const typeInput = adForm.querySelector('#type');
const resetButton = adForm.querySelector('.ad-form__reset');

const setMinPrice = () => {
  const minPriceValue = minPriceForType[typeInput['value']];
  priceInput.min = minPriceValue;
  priceInput.placeholder = minPriceValue;
};

typeInput.addEventListener('change', setMinPrice);

const timeInInput = adForm.querySelector('#timein');
const timeOutInput = adForm.querySelector('#timeout');

const syncTimeIn = () => {
  timeInInput.value = timeOutInput.value;
};

const syncTimeOut = () => {
  timeOutInput.value = timeInInput.value;
};

timeInInput.addEventListener('change', syncTimeOut);
timeOutInput.addEventListener('change', syncTimeIn);

const getArrayOfRange = (start, end, step = 1) => {
  const result = [];
  for (let current = start; step < 0 ? current >= end : current <= end; current += step) {
    result.push(current.toString());
  }
  return result;
};

const capacityInvalidMessage = 'Количество гостей не может быть больше количества комнат!';

const roomsCapacityData = {
  1: {roomCapacity: getArrayOfRange(1, 1), alert: capacityInvalidMessage},
  2: {roomCapacity: getArrayOfRange(1, 2), alert: capacityInvalidMessage},
  3: {roomCapacity: getArrayOfRange(1, 3), alert: capacityInvalidMessage},
  100: {roomCapacity: getArrayOfRange(0, 0), alert: 'Не для гостей!'},
};

const roomNumberSelect = adForm.querySelector('#room_number');
const capacitySelect = adForm.querySelector('#capacity');

const syncCapacityWithRoomNumber = () => {
  const rooms = roomNumberSelect.value;
  const { roomCapacity } = roomsCapacityData[rooms];
  const options = capacitySelect.children;
  for (const option of options) {
    const value = option.value;
    const isRoomCapacityOk = roomCapacity.includes(value);
    option.disabled = !isRoomCapacityOk;
    option.selected = isRoomCapacityOk;
  }
};

roomNumberSelect.addEventListener('change', syncCapacityWithRoomNumber);
capacitySelect.addEventListener('focus', syncCapacityWithRoomNumber);

const titleInput = adForm.querySelector('#title');

const resetCustomValidityMessage = (element) => {
  element.setCustomValidity('');
};

const setCustomValidityValueMissingMessage = (element) => {
  if (element.validity.valueMissing) {
    element.setCustomValidity('Обязательное поле!');
  }
};

const setCustomValidityTooShortMessage = (element) => {
  const minLength = element.minLength;
  if (element.validity.tooShort) {
    element.setCustomValidity(`Должно быть минимум ${minLength} знаков!`);
  }
};

const setCustomValidityTooLongMessage = (element) => {
  const maxLength = element.maxLength;
  if (element.validity.tooLong) {
    element.setCustomValidity(`Должно быть максимум ${maxLength} знаков!`);
  }
};

const setCustomValidityTypeMismatchMessage = (element) => {
  if (element.validity.typeMismatch) {
    element.setCustomValidity('Введён неверный тип данных!');
  }
};

const onPriceInputInvalid = (evt) => {
  const el = evt.target;
  resetCustomValidityMessage(el);
  setCustomValidityValueMissingMessage(el);
  setCustomValidityTypeMismatchMessage(el);
};

const onTitleInputInvalid = (evt) => {
  const el = evt.target;
  resetCustomValidityMessage(el);
  setCustomValidityValueMissingMessage(el);
  setCustomValidityTooShortMessage(el);
  setCustomValidityTooLongMessage(el);
};

titleInput.addEventListener('invalid', onTitleInputInvalid);
priceInput.addEventListener('invalid', onPriceInputInvalid);

const resetAdForm = () => {
  adForm.reset();
};

resetButton.addEventListener('click', resetAdForm);

const setAdFormSubmit = (onSuccess, onFail) => {
  const onAdFormSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    sendData(onSuccess, onFail, formData);
  };

  adForm.addEventListener('submit', onAdFormSubmit);
};

// form overlays
const onSuccessSendDataOverlay = () => {
  const template = document
    .querySelector('#success')
    .content
    .querySelector('.success');

  const clone = template.cloneNode(true);

  const parentElement = document.querySelector('body');

  const removeClone = () => {
    clone.remove();
  };

  const onParentElementKeydownEscape = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      removeClone();
    }
  };

  parentElement.appendChild(clone);
  parentElement.addEventListener('click', removeClone, {once: true});
  parentElement.addEventListener('keydown', onParentElementKeydownEscape, {once: true});

  resetAdForm();
};

const onFailGetDataOverlay = (err) => {
  const template = document
    .querySelector('#get-data-error')
    .content
    .querySelector('.get-data-error');

  const clone = template.cloneNode(true);

  clone
    .querySelector('.get-data-error__message--details')
    .textContent = err;

  const parentElement = document.querySelector('body');

  const removeClone = () => {
    clone.remove();
  };

  const onParentElementKeydownEscape = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      removeClone();
    }
  };

  parentElement.appendChild(clone);
  parentElement.addEventListener('click', removeClone, {once: true});
  parentElement.addEventListener('keydown', onParentElementKeydownEscape, {once: true});
};

const onFailSendDataOverlay = () => {
  const template = document
    .querySelector('#error')
    .content
    .querySelector('.error');

  const clone = template.cloneNode(true);

  const button = clone.querySelector('.error__button');

  const parentElement = document.querySelector('body');

  parentElement.appendChild(clone);

  const removeClone = () => {
    clone.remove();
  };

  const onParentElementKeydownEscape = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      removeClone();
    }
  };

  parentElement.addEventListener('click', removeClone, {once: true});
  parentElement.addEventListener('keydown', onParentElementKeydownEscape, {once: true});

  button.addEventListener('click', removeClone);
};

getData(renderAds, onFailGetDataOverlay);

setAdFormSubmit(onSuccessSendDataOverlay, onFailSendDataOverlay);
