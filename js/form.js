const minPriceForType = {
  palace: 10000,
  flat: 1000,
  house: 5000,
  bungalow: 0,
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
