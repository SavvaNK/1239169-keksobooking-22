import { getRandomInt } from '../utils/index.js';

// author, объект — описывает автора. Содержит одно поле:
const generateAuthor = () => ({
  // avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это случайное число от 1 до 8 с ведущим нулём. Например, 01, 02 и т. д.
  avatar: `img/avatars/user0${getRandomInt(1, 8)}.png`,
});

export { generateAuthor };
