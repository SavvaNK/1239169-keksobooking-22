import { generateAd } from './mock-data/generate-ad.js';

const ads = new Array(5).fill(null).map(generateAd);

const filterType = (houseType) => (
  ({ offer: { type } }) => houseType === 'any' ? true : houseType === type
);

const filterRooms = (houseRooms) => (
  ({ offer: { rooms } }) => houseRooms === 'any' ? true : parseInt(houseRooms) === rooms
);

const filterGuests = (houseGuests) => (
  ({ offer: { guests } }) => houseGuests === 'any' ? true : parseInt(houseGuests) === guests
);

const lowPrice = 10000;
const highPrice = 50000;

const priceDict = {
  'middle': (price) => price >= lowPrice && price <= highPrice,
  'low': (price) => price <= lowPrice,
  'high':(price) => price >= highPrice,
};

const filterPrice = (housePrice) => (
  ({ offer: { price } }) => housePrice === 'any' ? true : priceDict[housePrice](price)
);

const filterFeatures = (houseFeatures) => (
  ({ offer: { features } }) => houseFeatures.length === 0 ? true : features.includes(...houseFeatures)
);

const mapFilters = document.querySelector('.map__filters');
// eslint-disable-next-line no-unused-vars
const typeFilterInput = mapFilters.querySelector('.housing-type');
// eslint-disable-next-line no-unused-vars
const priceFilterInput = mapFilters.querySelector('.housing-price');
// eslint-disable-next-line no-unused-vars
const roomsFilterInput = mapFilters.querySelector('.housing-rooms');
// eslint-disable-next-line no-unused-vars
const guestsFilterInput = mapFilters.querySelector('.housing-guests');
// eslint-disable-next-line no-unused-vars
const featuresFilterCheckboxes = mapFilters.querySelectorAll('.map__checkbox');

const reduceCheckedCheckboxesValue = (checkboxes) => {
  const result = [];
  checkboxes.forEach((el) => el.checked && result.push(el.value));
  return result;
};

// eslint-disable-next-line no-console
console.log(
  ads.filter( filterType('any')).filter(filterPrice('middle')).filter(filterRooms('any')).filter(filterGuests('any')).filter(filterFeatures(['washer', 'elevator', 'wifi'])),
  // ads.filter( typeFn('any')).length,
  '--------------------------------\n',
  ads.filter( filterType('any')).filter(filterPrice('middle')).filter(filterRooms('any')).filter(filterGuests('any')).filter(filterFeatures(['washer', 'elevator', 'wifi'])).length,
  '--------------------------------\n',
  ads.length,
  JSON.stringify(ads.filter( filterType('any')).filter(filterPrice('middle')).filter(filterRooms('any')).filter(filterGuests('any')).filter(filterFeatures(['washer', 'elevator', 'wifi']))),
  reduceCheckedCheckboxesValue(featuresFilterCheckboxes),
);
