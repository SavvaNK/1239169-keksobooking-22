/**
 * Function to create Array of concatenated string with counter's value inside.
 *
 * @param {string} stringHead - first part of concatenated string
 * @param {string} stringTail - last part of concatenated string
 * @param {number} rangeStart - starting number to set in the middle of string, included
 * @param {number} rangeEnd - ending number to set in the middle of string, included
 * @param {number} step - increment or decrement(use '-' to decrement value)
 * @return {array} Array of strings with enumerated range inside of each
 */

const generateArrayOfStrings = (stringHead, stringTail, rangeStart, rangeEnd, step = 1) => {
  const result = [];

  for (
    let current = rangeStart;
    step < 0 ? current >= rangeEnd : current <= rangeEnd;
    current += step
  ) {
    result.push(stringHead + current + stringTail);
  }

  return result;
};

export { generateArrayOfStrings };
