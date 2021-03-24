import { generateAd } from './mock-data/generate-ad.js';

const ads = new Array(10).fill(null).map(generateAd);

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

const priceList = {
  'middle': (price) => price >= lowPrice && price <= highPrice,
  'low': (price) => price <= lowPrice,
  'high':(price) => price >= highPrice,
};

const filterPrice = (housePrice) => (
  ({ offer: { price } }) => housePrice === 'any' ? true : priceList[housePrice](price)
);

const mapFilters = document.querySelector('.map__filters');
const typeFilterInput = mapFilters.querySelector('.housing-type');
const priceFilterInput = mapFilters.querySelector('.housing-price');
const roomsFilterInput = mapFilters.querySelector('.housing-rooms');
const guestsFilterInput = mapFilters.querySelector('.housing-guests');
const featuresFilterCheckboxes = mapFilters.querySelectorAll('.map__checkbox');

console.log(
  ads.filter( filterType('any')).filter(filterPrice('any')).filter(filterRooms('any')).filter(filterGuests('any')),
  // ads.filter( typeFn('any')).length,
  '--------------------------------\n',
  ads.filter( filterType('any')).filter(filterPrice('any')).filter(filterRooms('any')).filter(filterGuests('any')).length,
  '--------------------------------\n',
  ads.length,
);

