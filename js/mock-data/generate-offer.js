import { makeCounter,  generateArrayOfStrings, getRandomFloat, getUniqRandomItemsFromArray, getRandomInt } from '../utils/index.js';

const assignArray = (value) => Array.isArray(value) ? value : Array(value);

const getTitleNumber = makeCounter();

const typeList = ['palace', 'flat', 'house', 'bungalow'];

const checkInOutTimes = generateArrayOfStrings('1', ':00', 2, 4);

const featuresList = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const photosList = generateArrayOfStrings('http://o0.github.io/assets/images/tokyo/hotel', '.jpg', 1, 3);

// offer, объект — содержит информацию об объявлении. Состоит из полей:

const generateOffer = () => ({
  //   title, строка — заголовок предложения. Придумайте самостоятельно.
  title: `Заголовок предложения № ${getTitleNumber()}.`,

  //   address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.x}}, {{location.y}}.
  address: 'some address по маске {{location.x}}, {{location.y}}',

  //   price, число — стоимость. Любое положительное число.
  price: getRandomFloat(100, 60000),

  //   type, строка — одно из четырёх фиксированных значений: palace, flat, house или bungalow.
  type: getUniqRandomItemsFromArray(typeList),

  //   rooms, число — количество комнат. Любое положительное число.
  rooms: getRandomInt(0, 100),

  //   guests, число — количество гостей, которое можно разместить. Любое положительное число.
  guests: getRandomInt(0, 2),

  //   checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
  checkin: getUniqRandomItemsFromArray(checkInOutTimes),

  //   checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
  checkout: getUniqRandomItemsFromArray(checkInOutTimes),

  //   features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.
  features: assignArray(getUniqRandomItemsFromArray(featuresList, getRandomInt(1, featuresList.length))),

  //   description, строка — описание помещения. Придумайте самостоятельно.
  description: 'Lorem Ipsum',

  //   photos, массив строк — массив случайной длины из значений: http://o0.github.io/assets/images/tokyo/hotel1.jpg, http://o0.github.io/assets/images/tokyo/hotel2.jpg, http://o0.github.io/assets/images/tokyo/hotel3.jpg.
  photos: assignArray(getUniqRandomItemsFromArray(photosList, getRandomInt(1, photosList.length))),
});

export { generateOffer };

