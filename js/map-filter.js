import { renderAds } from './map.js';
import { onFailGetDataOverlay } from './form.js';
import { getData } from './api.js';
import { debounce } from './utils.js';

const MAX_ADS_NUMBER_TO_RENDER = 10;

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
  'high': (price) => price >= highPrice,
};

const filterPrice = (housePrice) => (
  ({ offer: { price } }) => housePrice === 'any' ? true : priceDict[housePrice](price)
);

const filterFeatures = (houseFeatures) => (
  ({ offer: { features } }) => houseFeatures.length === 0 ? true : houseFeatures.every(el => features.includes(el))
);

const reduceCheckedCheckboxesValues = (checkboxes) => {
  const values = [];
  checkboxes.forEach((el) => el.checked && values.push(el.value));
  return values;
};

const mapFilters = document.querySelector('.map__filters');
const typeFilterInput = mapFilters.querySelector('#housing-type');
const priceFilterInput = mapFilters.querySelector('#housing-price');
const roomsFilterInput = mapFilters.querySelector('#housing-rooms');
const guestsFilterInput = mapFilters.querySelector('#housing-guests');
const featuresFilterCheckboxes = mapFilters.querySelectorAll('.map__checkbox');

const resetMapFilters = () => {
  mapFilters.reset();
};

const processingAds = (ads) => (
  renderAds(ads
    .filter(filterType(typeFilterInput.value))
    .filter(filterRooms(roomsFilterInput.value))
    .filter(filterGuests(guestsFilterInput.value))
    .filter(filterPrice(priceFilterInput.value))
    .filter(filterFeatures(reduceCheckedCheckboxesValues(featuresFilterCheckboxes)))
    .slice(0, MAX_ADS_NUMBER_TO_RENDER))
);

const getAds = () => getData(processingAds, onFailGetDataOverlay);

const getAdsDebounced = debounce(getAds);

const onFilterElementChange = getAdsDebounced;

mapFilters.addEventListener('change', onFilterElementChange);

export { getAdsDebounced, resetMapFilters };
