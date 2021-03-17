import { getRandomFloat } from '../utils/index.js';

// location, объект — местоположение в виде географических координат. Состоит из двух полей:
const generateLocation = () => ({
  //   x, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000
  lat: getRandomFloat(35.65000, 35.70000, 5),

  //   y, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000
  lng: getRandomFloat(139.70000, 139.80000, 5),
});

export { generateLocation };
