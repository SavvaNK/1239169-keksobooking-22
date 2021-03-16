import './form.js';
import './map.js';

fetch('https://22.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((ads) => {
    console.log(ads);
  });
