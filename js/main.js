import getRandomInt from './utils/get-random-int.js';
import getRandomFloat from './utils/get-random-float.js';
import getUniqRandomItemsFromArray from './utils/get-uniq-random-items-from-array.js';
import makeCounter from './utils/make-counter.js';
import generateAuthor from './src/generate-author.js';

// offer's helping functions

const getTitleNumber = makeCounter();

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
}

// offer's data storage

const typeList = ['palace', 'flat', 'house', 'bungalow'];

const checkInOutTimes = generateArrayOfStrings('1', ':00', 2, 4);

const featuresList = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const photosList = generateArrayOfStrings('http://o0.github.io/assets/images/tokyo/hotel', '.jpg', 1, 3);

// offer, объект — содержит информацию об объявлении. Состоит из полей:
const generateOffer = () => ({ // eslint-disable-line
  //   title, строка — заголовок предложения. Придумайте самостоятельно.
  title: `Заголовок предложения № ${getTitleNumber()}.`,

  //   address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.x}}, {{location.y}}.
  address: '${offerLocation[\'x\']}, ${offerLocation[\'y\']}',

  //   price, число — стоимость. Любое положительное число.
  price: getRandomFloat(100, 1000),

  //   type, строка — одно из четырёх фиксированных значений: palace, flat, house или bungalow.
  type: getUniqRandomItemsFromArray(typeList),

  //   rooms, число — количество комнат. Любое положительное число.
  rooms: getRandomInt(1, 10),

  //   guests, число — количество гостей, которое можно разместить. Любое положительное число.
  guests: getRandomInt(1, 20),

  //   checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
  checkin: getUniqRandomItemsFromArray(checkInOutTimes),

  //   checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
  checkout: getUniqRandomItemsFromArray(checkInOutTimes),

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

const generateAd = () => ({
  author: generateAuthor(),
  offer: generateOffer(),
  location: generateLocation(),
});

const ads = new Array(10).fill(null).map(generateAd);

console.log(  // eslint-disable-line
  JSON.stringify(ads),
  ads,
);
