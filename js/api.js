const serverSendUrl = 'https://22.javascript.pages.academy/keksobooking';
const serverGetUrl = `${serverSendUrl}/data`;

const getData = (onSuccess, onFail) => {
  fetch(serverGetUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      onFail(`Код ошибки: ${response.status}.\nОписание ошибки: ${response.statusText}.`);
    })
    .then((ads) => {
      onSuccess(ads);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    serverSendUrl,
    {
      method: 'POST',
      body,
      // body: data,
    },
  )
    .then((response) => {
      if (response.ok) {
        return onSuccess();
      }

      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

const onFailGetDataOverlay = (err) => {
  const template = document
    .querySelector('#get-data-error')
    .content
    .querySelector('.get-data-error');

  const clone = template.cloneNode(true);

  document
    .querySelector('body')
    .appendChild(clone);

  clone.querySelector('.get-data-error__message--details').textContent = err;
};

const onSuccessSendDataOverlay = () => {
  const template = document
    .querySelector('#success')
    .content
    .querySelector('.success');

  const clone = template.cloneNode(true);

  document
    .querySelector('body')
    .appendChild(clone);

  document
    .querySelector('body')
    .addEventListener('click', () => {
      clone.remove();
    });
};

const onFailSendDataOverlay = () => {
  const template = document
    .querySelector('#error')
    .content
    .querySelector('.error');

  const clone = template.cloneNode(true);

  document
    .querySelector('body')
    .appendChild(clone);
};

export { getData, sendData, onFailGetDataOverlay, onSuccessSendDataOverlay, onFailSendDataOverlay };
