import { showBigPicture } from './big-picture.js';

const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

const createPicture = (data) => {
  const {url, description, likes, comments} = data;
  const picture = pictureTemplate.cloneNode(true);

  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__likes').textContent = likes;
  picture.querySelector('.picture__comments').textContent = comments.length;

  picture.addEventListener('click', () => {
    showBigPicture(data);
  });
  return picture;
};

const renderPictures = (pictures) => {
  picturesContainer.querySelectorAll('.picture').forEach((element) => element.remove());
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const pictureElement = createPicture(picture);
    fragment.append(pictureElement);
  });

  picturesContainer.append(fragment);
};

export { renderPictures };
