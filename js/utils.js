const DEBOUNCE_DELAY = 500;

const debounce = (fn, delay = DEBOUNCE_DELAY) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
};

export { debounce };
