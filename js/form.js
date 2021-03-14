const adForm = document.querySelector('.ad-form');

const minPriceForType = {
  palace: 10000,
  flat: 1000,
  house: 5000,
  bungalow: 0,
};

const priceInput = adForm.querySelector('#price');
const typeInput = adForm.querySelector('#type');

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

const titleInputLimits = {
  MIN_LENGTH: 30,
  MAX_LENGTH: 100,
};

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

const onPriceInputInvalid = (evt) => {
  const el = evt.target;
  resetCustomValidityMessage(el);
  setCustomValidityValueMissingMessage(el);
};

const onTitleInputInvalid = (evt) => {
  const el = evt.target;
  resetCustomValidityMessage(el);
  setCustomValidityValueMissingMessage(el);
  setCustomValidityTooShortMessage(el);
};

titleInput.addEventListener('invalid', onTitleInputInvalid);
priceInput.addEventListener('invalid', onPriceInputInvalid);
