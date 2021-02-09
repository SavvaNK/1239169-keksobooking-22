/**
 * Get a random floating point number in range inclusively from 'min' and 'max', specifying the required number of decimal places with 'nDigits'.
 *
 * @param {number} min - min positive number
 * @param {number} max - max positive number
 * @param {number} nDigits - nDigits positive number
 * @return {number} a random floating point number
 */

const generateRandomFloat = (min, max, nDigits) => (
  parseFloat((Math.random() * (max - min) + min).toFixed(nDigits))
);

export default generateRandomFloat;
