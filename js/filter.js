import { generateAd } from './mock-data/generate-ad.js';

const ads = new Array(10).fill(null).map(generateAd);

const typeFn = (houseType) => (
  ({ offer: { type } }) => houseType === 'any' ? true : houseType === type
);

const roomsFn = (houseRooms) => (
  ({ offer: { rooms } }) => houseRooms === 'any' ? true : parseInt(houseRooms) === rooms
);

const guestsFn = (houseGuests) => (
  ({ offer: { guests } }) => houseGuests === 'any' ? true : parseInt(houseGuests) === guests
);

const lowPrice = 10000;
const highPrice = 50000;

const priceList = {
  'middle': (price) => price >= lowPrice && price <= highPrice,
  'low': (price) => price <= lowPrice,
  'high':(price) => price >= highPrice,
};

const priceFn = (housePrice) => (
  ({ offer: { price } }) => housePrice === 'any' ? true : priceList[housePrice](price)
);

console.log(
  ads.filter( typeFn('any')).filter(priceFn('middle')).filter(roomsFn('any')).filter(guestsFn('any')),
  // ads.filter( typeFn('any')).length,
  '--------------------------------\n',
  ads.filter( typeFn('any')).filter(priceFn('middle')).filter(roomsFn('any')).filter(guestsFn('any')).length,
  '--------------------------------\n',
  ads.length,
);
