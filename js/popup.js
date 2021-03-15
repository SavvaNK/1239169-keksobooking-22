const popupTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const typeDict = {
  'palace': 'Дворец',
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalow': 'Бунгало',
};

const featuresList = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

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

const getDeclensionGuests = (guestsNumber) => {
  guestsNumber = guestsNumber.toString();
  let result = 'гостей';

  if (RegExp('1$').test(guestsNumber)) {
    result = 'гостя';
  }

  if (RegExp('11$').test(guestsNumber)) {
    result = 'гостей';
  }

  return result;
}

const createPopup = ({ author, offer }) => {
  const { avatar } = author;
  const { address, checkin, checkout, description, features, guests, photos, price, rooms, title, type } = offer;

  const popup = popupTemplate.cloneNode(true);

  const popupAvatar = popup.querySelector('.popup__avatar');
  avatar
    ? popupAvatar.src = avatar
    : popupAvatar.remove();

  const popupTitle = popup.querySelector('.popup__title');
  title
    ? popupTitle.textContent = title
    : popupTitle.remove();

  const popupAddress = popup.querySelector('.popup__text--address');
  address
    ? popupAddress.textContent = address
    : popupAddress.remove();

  const popupPrice = popup.querySelector('.popup__text--price');
  price
    ? popupPrice.innerHTML = `${price} <span>₽/ночь<span>`
    : popupPrice.remove();

  const popupType = popup.querySelector('.popup__type');
  type
    ? popupType.textContent = typeDict[type]
    : popupType.remove();

  const popupCapacity = popup.querySelector('.popup__text--capacity');
  rooms && guests
    ? popupCapacity.textContent = `${rooms} ${getDeclensionRooms(rooms)} для ${guests} ${getDeclensionGuests(guests)}`
    : popupCapacity.remove();

  const popupTime = popup.querySelector('.popup__text--time');
  checkin && checkout
    ? popupTime.textContent = `Заезд после ${checkin}, выезд до ${checkout}`
    : popupTime.remove();

  const popupDescription = popup.querySelector('.popup__description');
  description
    ? popupDescription.textContent = description
    : popupDescription.remove();

  const popupFeatures = popup.querySelector('.popup__features');
  features
    ? featuresList.forEach((feature) => {
      if(!features.includes(feature)) {
        popupFeatures.querySelector(`.popup__feature--${feature}`).remove();
      }
    })
    : popupFeatures.remove();

  const popupPhotos = popup.querySelector('.popup__photos');
  if (photos) {
    const popupPhotoEmpty = popupPhotos.querySelector('.popup__photo');
    photos.forEach((photo) => {
      const popupPhotoClone = popupPhotoEmpty.cloneNode();
      popupPhotoClone.src = photo;
      popupPhotos.appendChild(popupPhotoClone);
    });
    popupPhotoEmpty.remove();
  } else {
    popupPhotos.remove();
  }

  return popup;
};

export { createPopup };
