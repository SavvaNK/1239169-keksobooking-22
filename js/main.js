/**
 * Get a random integer in range inclusively from 'min' and 'max'.
 *
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {number} a random integer
 */

const generateRandomInt = (min, max) => (
  Math.floor(Math.random() * (max - min + 1) + min)
);

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

const checkErrors = (begin, end) => {
  if (begin < 0) {
    throw new RangeError('Negative values aren\'t allowed! Use 0 and greater for the Begin.');
  }

  if (end < 0) {
    throw new RangeError('Negative values aren\'t allowed! Use 0 and greater for the End.');
  }

  if (begin === end) {
    throw new RangeError('The Begin and End both have same value! They must be different.');
  }

  if (begin > end) {
    throw new RangeError('The Begin value exceeds the End value! The Begin value must be less the End value.');
  }
};

const checkNDigits = (nDigits) => {
  if (nDigits < 0) {
    throw new RangeError('Negative values aren\'t allowed! Use 0 and greater for the nDigits.');
  }
};

/**
 * Get a random positive integer in range inclusively from 'begin' and 'end'.
 *
 * @param {number} begin - begin positive number
 * @param {number} end - end positive number
 * @return {number} a random positive integer
 */

const getRandomInt = (begin, end) => { // eslint-disable-line
  checkErrors(begin, end);

  return generateRandomInt(begin, end);
};

/**
 * Get a random positive floating point number in range inclusively from 'begin' and 'end', specifying the required number of decimal places with 'nDigits' (default value: 2).
 *
 * @param {number} begin - begin positive number
 * @param {number} end - end positive number
 * @param {number} nDigits - nDigits positive number
 * @return {number} a random positive floating point number
 */

const getRandomFloat = (begin, end, nDigits= 2) => { // eslint-disable-line
  checkErrors(begin, end);
  checkNDigits(nDigits);

  return generateRandomFloat(begin, end, nDigits);
};


/**
 * Getting a Array of random uniq values of a received array in the specified quantity.
 *
 * @param {array} arr - Array to process
 * @param {number} quantity - number of uniq values to receive
 * @return {array} Array of random uniq values
 */

const getUniqRandomItemsFromArray = (arr, quantity) => { // eslint-disable-line
  let result = [];
  const getRandomIndexFromArray = (arr) => getRandomInt(0, arr.length - 1);

  while (result.length !== quantity) {
    const i = getRandomIndexFromArray(arr);
    const element = arr[i];

    if (!result.includes(element)) {
      result.push(element);
    }
  }

  return result;
}

// author, объект — описывает автора. Содержит одно поле:

const generateAuthor = () => ({ // eslint-disable-line
  // avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это случайное число от 1 до 8 с ведущим нулём. Например, 01, 02 и т. д.
  avatar: `img/avatars/user0${getRandomInt(1, 8)}.png`,
});

// offer's helping functions

/**
 * Function to create counter functions using clojure, starting value: 1 and increment it by 1.
 *
 * @param {number} begin - starting value
 * @param {number} modificator - increment or decrement(use '-' to decrement value)
 * @return {function} to create new instance of counter
 */

const makeCounter = (begin = 1, modificator = 1) => { // eslint-disable-line
  let currentCount = begin - modificator;
  return () => {
    currentCount = currentCount + modificator;
    return currentCount;
  }
}

const getTitleNumber = makeCounter();

// offer's data storage

const typeList = ['palace', 'flat', 'house', 'bungalow'];

const checkInOutTimes = ['12:00', '13:00', '14:00'];

const featuresList = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const photosList = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

// offer, объект — содержит информацию об объявлении. Состоит из полей:
const generateOffer = () => ({
  //   title, строка — заголовок предложения. Придумайте самостоятельно.
  title: `Заголовок предложения № ${getTitleNumber()}.`,

  //   address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.x}}, {{location.y}}.
  // location: `${location['x']}, ${location['y']}`,

  //   price, число — стоимость. Любое положительное число.
  price: getRandomFloat(100, 1000),

  //   type, строка — одно из четырёх фиксированных значений: palace, flat, house или bungalow.
  type: getUniqRandomItemsFromArray(typeList, 1).toString(),

  //   rooms, число — количество комнат. Любое положительное число.
  rooms: getRandomInt(1, 10),

  //   guests, число — количество гостей, которое можно разместить. Любое положительное число.
  guests: getRandomInt(1, 20),

  //   checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
  checkin: getUniqRandomItemsFromArray(checkInOutTimes, 1).toString(),

  //   checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
  checkout: getUniqRandomItemsFromArray(checkInOutTimes, 1).toString(),

  //   features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.
  features: getUniqRandomItemsFromArray(featuresList, getRandomInt(1, featuresList.length)),

  //   description, строка — описание помещения. Придумайте самостоятельно.
  description: 'Lorem Ipsum',

  //   photos, массив строк — массив случайной длины из значений: http://o0.github.io/assets/images/tokyo/hotel1.jpg, http://o0.github.io/assets/images/tokyo/hotel2.jpg, http://o0.github.io/assets/images/tokyo/hotel3.jpg.
  photos: getUniqRandomItemsFromArray(photosList, getRandomInt(1, photosList.length)),
})

// location, объект — местоположение в виде географических координат. Состоит из двух полей:

const generateLocation = () => ({ // eslint-disable-line
  //   x, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000
  x: getRandomFloat(35.65000, 35.70000, 5),

  //   y, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000
  y: getRandomFloat(139.70000, 139.80000, 5),
});
//

const locA = generateLocation();
const locB = generateLocation();
const locC = generateLocation();
console.log(locA, locB, locC); // eslint-disable-line
