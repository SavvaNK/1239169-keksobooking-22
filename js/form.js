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
