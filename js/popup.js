import { generateAd } from './data/generate-ad.js';

const ads = new Array(10).fill(null).map(generateAd);

console.log(  // eslint-disable-line
  JSON.stringify(ads),
  ads,
);

const popupTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const mapCanvas = document.querySelector('#map-canvas'); // eslint-disable-line

const fragment = document.createDocumentFragment();

const typeDict = {
  'palace': 'Дворец',
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalow': 'Бунгало',
};

const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const getDeclensionRooms = (roomNumber) => {
  roomNumber = roomNumber.toString();
  let result = 'комнат';

  if (RegExp('[2-4]$').test(roomNumber)) {
    result = 'комнаты';
  }
  if (RegExp('1$').test(roomNumber)) {
    result = 'комната';
  }

  if (RegExp('11$').test(roomNumber)) {
    result = 'комнат';
  }

  return result;
};

const getDeclensionGuests = (guestsNumber) => guestsNumber === 1 ? 'гостя' : 'гостей';

const MakePopup = ({ author, offer }) => {
  const { avatar } = author;
  const { address, checkin, checkout, description, features: offerFeatures, guests, photos, price, rooms, title, type } = offer;

  const popupClone = popupTemplate.cloneNode(true);

  popupClone.querySelector('.popup__avatar').src = avatar;
  popupClone.querySelector('.popup__title').textContent = title;
  popupClone.querySelector('.popup__text--address').textContent = address;
  popupClone.querySelector('.popup__text--price').innerHTML = `${price} <span>₽/ночь<span>`;
  popupClone.querySelector('.popup__type').textContent = typeDict[type];
  popupClone.querySelector('.popup__text--capacity').textContent = `${rooms} ${getDeclensionRooms(rooms)} для ${guests} ${getDeclensionGuests(guests)}`;
  popupClone.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}`;

  features.forEach((feature) => {
    if(!offerFeatures.includes(feature)) {
      popupClone.querySelector(`.popup__feature--${feature}`).remove();
    }
  });

  popupClone.querySelector('.popup__description').textContent = description;

  const popupPhotos = popupClone.querySelector('.popup__photos');
  const popupPhotoEmpty = popupPhotos.querySelector('.popup__photo');

  photos.forEach((photo) => {
    const popupPhotoClone = popupPhotoEmpty.cloneNode();
    popupPhotoClone.src = photo;
    popupPhotos.appendChild(popupPhotoClone);
  });

  popupPhotoEmpty.remove();

  return popupClone;
};


// ads.forEach(({author, offer}) => {
//   const popupClone = popupTemplate.cloneNode(true);
//
//   popupClone.querySelector('.popup__avatar').src = author.avatar;
//   popupClone.querySelector('.popup__title').textContent = offer.title;
//   popupClone.querySelector('.popup__text--address').textContent = offer.address;
//   popupClone.querySelector('.popup__text--price').innerHTML = `${offer.price} <span>₽/ночь<span>`;
//   popupClone.querySelector('.popup__type').textContent = typeDict[offer.type];
//
//   const offerRooms = offer.rooms;
//   const offerGuests = offer.guests;
//   popupClone.querySelector('.popup__text--capacity').textContent = `${offerRooms} ${getDeclensionRooms(offerRooms)} для ${offerGuests} ${getDeclensionGuests(offerGuests)}`;
//   popupClone.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
//
//   const offerFeature = offer.features;
//   features.forEach((feature) => {
//     if(!offerFeature.includes(feature)) {
//       popupClone.querySelector(`.popup__feature--${feature}`).remove();
//     }
//   });
//
//   popupClone.querySelector('.popup__description').textContent = offer.description;
//
//   const popupPhotos = popupClone.querySelector('.popup__photos');
//   const popupPhotoEmpty = popupPhotos.querySelector('.popup__photo');
//   const offerPhotos = offer.photos;
//
//   offerPhotos.forEach((photo) => {
//     const popupPhotoClone = popupPhotoEmpty.cloneNode();
//     popupPhotoClone.src = photo;
//     popupPhotos.appendChild(popupPhotoClone);
//   });
//
//   popupPhotoEmpty.remove();
//
//   fragment.appendChild(popupClone);
// });

// mapCanvas.appendChild(fragment.firstChild);

export { MakePopup, ads };
