import { generateAd } from './mock-data/generate-ad.js';

const ads = new Array(1000).fill(null).map(generateAd);

const typeFn = (houseType) => (
  ({ offer: { type } }) => houseType === 'any' ? true : houseType === type
);

const lowPrice = 10000;
const highPrice = 50000;

const price = {
  'any': el => el,
  'middle': ({ offer: { price } }) => price >= lowPrice && price <= highPrice,
  'low': ({ offer: { price } }) => price <= lowPrice,
  'high': ({ offer: { price } }) => price >= highPrice,
};

const roomsFn = (houseRooms) => (
  ({ offer: { rooms } }) => houseRooms === 'any' ? true : parseInt(houseRooms) === rooms
);

const guestsFn = (houseGuests) => (
  ({ offer: { guests } }) => houseGuests === 'any' ? true : parseInt(houseGuests) === guests
);

// const guests = {
//   'any': el => el,
//   '1': ({ offer: { guests } }) => guests === 1,
//   '2': ({ offer: { guests } }) => guests === 2,
//   '0': ({ offer: { guests } }) => guests === 0,
// };

console.log(
  ads.filter( typeFn('any')).filter(price['any']).filter(roomsFn('1')).filter(guestsFn('1')),
  // ads.filter( typeFn('any')).length,
  '--------------------------------\n',
  ads.filter( typeFn('any')).filter(price['any']).filter(roomsFn('1')).filter(guestsFn('1')).length,
  '--------------------------------\n',
  ads.length,
);
