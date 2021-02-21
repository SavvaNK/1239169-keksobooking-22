const popupTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

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

const createPopup = ({ author, offer }) => {
  const { avatar } = author;
  const { address, checkin, checkout, description, features: offerFeatures, guests, photos, price, rooms, title, type } = offer;

  const popup = popupTemplate.cloneNode(true);

  popup.querySelector('.popup__avatar').src = avatar;
  popup.querySelector('.popup__title').textContent = title;
  popup.querySelector('.popup__text--address').textContent = address;
  popup.querySelector('.popup__text--price').innerHTML = `${price} <span>₽/ночь<span>`;
  popup.querySelector('.popup__type').textContent = typeDict[type];
  popup.querySelector('.popup__text--capacity').textContent = `${rooms} ${getDeclensionRooms(rooms)} для ${guests} ${getDeclensionGuests(guests)}`;
  popup.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}`;
  popup.querySelector('.popup__description').textContent = description;

  features.forEach((feature) => {
    if(!offerFeatures.includes(feature)) {
      popup.querySelector(`.popup__feature--${feature}`).remove();
    }
  });

  const popupPhotos = popup.querySelector('.popup__photos');
  const popupPhotoEmpty = popupPhotos.querySelector('.popup__photo');
  photos.forEach((photo) => {
    const popupPhotoClone = popupPhotoEmpty.cloneNode();
    popupPhotoClone.src = photo;
    popupPhotos.appendChild(popupPhotoClone);
  });
  popupPhotoEmpty.remove();

  return popup;
};

export { createPopup };
