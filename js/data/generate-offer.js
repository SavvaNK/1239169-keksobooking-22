import makeCounter from '../utils/make-counter.js';
import generateArrayOfStrings from '../utils/generate-array-of-strings.js';
import getRandomFloat from '../utils/get-random-float.js';
import getUniqRandomItemsFromArray from '../utils/get-uniq-random-items-from-array.js';
import getRandomInt from '../utils/get-random-int.js';
import generateLocation from './generate-location.js';

const getTitleNumber = makeCounter();

const typeList = ['palace', 'flat', 'house', 'bungalow'];

const checkInOutTimes = generateArrayOfStrings('1', ':00', 2, 4);

const featuresList = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const photosList = generateArrayOfStrings('http://o0.github.io/assets/images/tokyo/hotel', '.jpg', 1, 3);

// offer, объект — содержит информацию об объявлении. Состоит из полей:

const generateOffer = () => {
  const offerLocation = generateLocation();

  return {
    //   title, строка — заголовок предложения. Придумайте самостоятельно.
    title: `Заголовок предложения № ${getTitleNumber()}.`,

    //   address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.x}}, {{location.y}}.
    address: `${offerLocation['x']}, ${offerLocation['y']}`,

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
}};

export default generateOffer;
