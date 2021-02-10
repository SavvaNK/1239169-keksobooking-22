import getRandomInt from './get-random-int.js';

const checkErrors = (arr, quantity) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Arr must be Array!');
  }

  if (arr.length === 0) {
    throw new Error('Arr must not be empty!');
  }

  if (quantity === 0) {
    throw new RangeError('Quantity cannot be equal to zero! Use another integer.');
  }

  if (quantity > arr.length) {
    throw new RangeError('Quantity cannot be more than Arr length!');
  }
};

/**
 * Getting a Array of random uniq values of a received array in the specified quantity.
 *
 * @param {array} arr - Array to process
 * @param {number} quantity - number of uniq values to receive, default value: 1
 * @return {array|string} Array of random uniq values, but if quantity only one return string
 */

const getUniqRandomItemsFromArray = (arr, quantity= 1) => {
  checkErrors(arr, quantity);

  let result = [];
  const getRandomIndexFromArray = (arr) => getRandomInt(0, arr.length - 1);

  while (result.length !== quantity) {
    const i = getRandomIndexFromArray(arr);
    const element = arr[i];

    if (!result.includes(element)) {
      result.push(element);
    }
  }

  return quantity === 1 ? result.toString() : result;
};

export default getUniqRandomItemsFromArray;
