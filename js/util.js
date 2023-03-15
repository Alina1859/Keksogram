const ALERT_SHOW_TIME = 5000;

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.abs(Math.random() * (upper - lower + 1) + lower);

  if (typeof a !== 'number'  || typeof a !== 'number' || (b === undefined && a === undefined)) {
    throw new Error('Первый параметр должен быть число');
  } else if (b === undefined || lower === upper) {
    return Math.abs(Math.floor(Math.random() * a));
  }
  return Math.floor(result);
};

const checkStringLength = (string, length) => string.length <= length; // проверка на длину строки

// eslint-disable-next-line no-unused-vars
const getRandomArrayElement = (array) => // получение рандомного элемента массива
  array[getRandomPositiveInteger(0, array.length - 1)];

const getShuffledArray = (num) => {  // получение перемешанного массива num чисел
  const arr = [];
  for (let i = 1;  i <= num; i++) {
    arr.push(i);
  }
  return arr.sort(() => Math.random() - 0.5);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alert = document.createElement('div');
  alert.style.position = 'absolute';
  alert.style.zIndex = '100';
  alert.style.left = '0';
  alert.style.top = '0';
  alert.style.right = '0';
  alert.style.padding = '10px 3px';
  alert.style.fontSize = '30px';
  alert.style.textAlign = 'center';
  alert.style.backgroundColor = 'red';
  alert.textContent = message;
  document.body.append(alert);

  setTimeout(() => {
    alert.remove();
  }, ALERT_SHOW_TIME);
};

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

// eslint-disable-next-line no-unused-vars
function throttle (callback, delayBetweenFrames) {
  // Используем замыкания, чтобы время "последнего кадра" навсегда приклеилось
  // к возвращаемой функции с условием, тогда мы его сможем перезаписывать
  let lastTime = 0;

  return (...rest) => {
    // Получаем текущую дату в миллисекундах,
    // чтобы можно было в дальнейшем
    // вычислять разницу между кадрами
    const now = new Date();

    // Если время между кадрами больше задержки,
    // вызываем наш колбэк и перезаписываем lastTime
    // временем "последнего кадра"
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
}

export {
  getRandomPositiveInteger,
  checkStringLength,
  getRandomArrayElement,
  getShuffledArray,
  isEscapeKey,
  showAlert, debounce };
