const minPriceForType = {
  palace: 10000,
  flat: 1000,
  house: 5000,
  bungalow: 0,
};

const getArrayOfRange = (start, end, step = 1) => {
  const result = [];
  for (let current = start; step < 0 ? current >= end : current <= end; current += step) {
    result.push(current);
  }
  return result;
};

const roomsCapacity = {
  1: getArrayOfRange(1, 1),
  2: getArrayOfRange(1, 2),
  3: getArrayOfRange(1, 3),
  'alert': 'Количество гостей не может быть больше количества комнат!',
};

const inputPrice = document.querySelector('#price');
const inputType = document.querySelector('#type');

const setMinPrice = () => {
  const minPriceValue = minPriceForType[inputType['value']];
  inputPrice.min = minPriceValue;
  inputPrice.placeholder = minPriceValue;
};

inputType.addEventListener('change', setMinPrice);

const inputTimeIn = document.querySelector('#timein');
const inputTimeOut = document.querySelector('#timeout');

const syncTimeIn = () => {
  inputTimeIn.value = inputTimeOut.value;
};

const syncTimeOut = () => {
  inputTimeOut.value = inputTimeIn.value;
};

inputTimeIn.addEventListener('change', syncTimeOut);
inputTimeOut.addEventListener('change', syncTimeIn);
