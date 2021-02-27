const adForm = document.querySelector('.ad-form');

const minPriceForType = {
  palace: 10000,
  flat: 1000,
  house: 5000,
  bungalow: 0,
};

const inputPrice = adForm.querySelector('#price');
const inputType = adForm.querySelector('#type');

const setMinPrice = () => {
  const minPriceValue = minPriceForType[inputType['value']];
  inputPrice.min = minPriceValue;
  inputPrice.placeholder = minPriceValue;
};

inputType.addEventListener('change', setMinPrice);

const inputTimeIn = adForm.querySelector('#timein');
const inputTimeOut = adForm.querySelector('#timeout');

const syncTimeIn = () => {
  inputTimeIn.value = inputTimeOut.value;
};

const syncTimeOut = () => {
  inputTimeOut.value = inputTimeIn.value;
};

inputTimeIn.addEventListener('change', syncTimeOut);
inputTimeOut.addEventListener('change', syncTimeIn);

const getArrayOfRange = (start, end, step = 1) => {
  const result = [];
  for (let current = start; step < 0 ? current >= end : current <= end; current += step) {
    result.push(current.toString());
  }
  return result;
};

const roomsCapacity = {
  1: getArrayOfRange(1, 1),
  2: getArrayOfRange(1, 2),
  3: getArrayOfRange(1, 3),
  100: getArrayOfRange(0, 0),
  alert: 'Количество гостей не может быть больше количества комнат!',
};

const selectRoomNumber = adForm.querySelector('#room_number');
const selectCapacity = adForm.querySelector('#capacity');

const syncCapacityWithRoomNumber = () => {
  const rooms = selectRoomNumber.value;
  const roomCapacity = roomsCapacity[rooms];
  const options = selectCapacity.children;
  for (const option of options) {
    // ля, как же у меня тут горело, сутки горело, код не работал как задумано, а оказывается option.value стринга, а не int
    // console.log(typeof(option.value));
    const value = option.value;
    option.disabled = !roomCapacity.includes(value);
    option.selected = roomsCapacity[rooms].includes(value);
  }
};

selectRoomNumber.addEventListener('change', syncCapacityWithRoomNumber);
selectCapacity.addEventListener('focus', syncCapacityWithRoomNumber);
