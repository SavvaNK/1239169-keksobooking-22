/**
 * Function to create counter functions using clojure, starting value: 1 and increment it by 1.
 *
 * @param {number} begin - starting value
 * @param {number} step - increment or decrement(use '-' to decrement value)
 * @return {function} to create new instance of counter
 */

const makeCounter = (begin = 1, step = 1) => {
  let currentCount = begin - step;

  return () => {
    currentCount = currentCount + step;
    return currentCount;
  }
};

export { makeCounter };
