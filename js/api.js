const serverSendUrl = 'https://22.javascript.pages.academy/keksobooking';
const serverGetUrl = `${serverSendUrl}/data`;

const getData = (onSuccess, onFail) => {
  fetch(serverGetUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      onFail('Не удалось получить данные с сервера. Попробуйте ещё раз');
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

export { getData, sendData };
