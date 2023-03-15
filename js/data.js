import {
  getRandomPositiveInteger,
  // eslint-disable-next-line no-unused-vars
  checkStringLength,
  getRandomArrayElement,
  getShuffledArray
} from './util.js';

const commentLines = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const descriptions = [
  'Летний чил на югах. #тай #отдых #лето #чил #travel #travelgram #summergram #chill',
  'Тестим новую камеру! #camera #test #new #newcameratest #pic #photo #instaphoto',
  'Затусили с друзьями на море #laptevsea #north #northeastpassage',
  'Как же круто тут кормят #food #foodgram #instafood #delicious #yummy',
  'Отдыхаем... #chill #relax #group #photo',
  'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
  'Вот это тачка! #wow #car #carwow #drive',
  '#fun #party #cool #young',
  'Господи, это такая милота, я сейчас умру от нежности, у меня закшалил мимимиметр',
  'Хорошо, когда в жизни есть #друзья, которые вместе со мной могут зайти в #барнарубинштейна и бахнуть #пивка',
  'Норм',
];

const names = ['Николай', 'Аким', 'Ким', 'Харитон', 'Тимур', 'Степан'];

const OBJECTS_LENGHT = 25;

const constArray = getShuffledArray(OBJECTS_LENGHT); // постоянный массив на 25 рандомных чисел

const createMessage = () =>
  Array.from({ length: getRandomPositiveInteger(1, 2) }, () =>
    getRandomArrayElement(commentLines)
  ).join(' ');


const createComment = () => ({
  id: getRandomPositiveInteger(1, 200),
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(names),
});

const createPicture = (index) => ({ // index = pictureIndex
  id: constArray[index],
  url: `photos/${constArray[index]}.jpg`,
  description: getRandomArrayElement(descriptions),
  likes: getRandomPositiveInteger(15, 200),
  comments: Array.from(
    {length: getRandomPositiveInteger(1, 20)},
    (value, commentIndex) => createComment(commentIndex + 1)
  ),
});

const getPictures = () =>
  Array.from({length: OBJECTS_LENGHT}, (value, pictureIndex) => //pictureIndex - индексы от 0 до 24
    createPicture(pictureIndex)
  );

export { getPictures };
