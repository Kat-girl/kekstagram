import {getRandomIntInclusive, getRandomArrayElement, getUniqueNumber} from './util.js';

const PHOTO_DESCRIPTIONS = [
  'Что Вы думаете о моей новой причёске? Правда я красотка!',
  'Утро началось не с кофе',
  'Хотелось бы пожелать доброго утра, но когда утро было добрым',
  'Да, да! В это зеркало я буду фоткаться до тех пор, пока не состарюсь',
  'Посмотрела я в зеркало и удивилась: Ну как меня можно не любить?!',
  'No matter what I do, I like everything',
  'Красавчика вызывали? Тогда я иду к Вам!',
  'И в зеркале я вижу только самое прекрасное',
  'Ох ну и достанется же кому-то такая красота!',
  'No matter how much I think, I still do everything different',
  'И в огонь, и в воду, и в медные трубы… Кто угодно, только не я.',
  'Дай каждому дню шанс стать лучшим в твоей жизни',
  'Самая красивая звезда сияет ярче всех остальных',
  'Одна голова хорошо, а две тоже ничего придумать не могут',
  'Улыбка — самое главное оружие девушки',
  'Допустим, я немного сумасшедшая, зато со мной не скучно',
  'Даже близкие не читают мысли. Выражать чувства — твоя отвественность',
  'Вечер пятницы — моя самое любимое время',
  'Обожаю тот момент на работе, когда нужно уходить домой',
  'Заблудился в море, которого не существует.',
  'Forever Young Forever drunk',
  'Глаза боятся, а руки делают. Если, конечно, ты не рукожоп',
  'Мой характер дикий, но сердце доброе',
  'Позвони мне, позвони',
  'Ещё один день. Ещё одно фото'
];

const COMMENT_TEXTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Елена',
  'Мария',
  'Антон',
  'Сергей',
  'Татьяна',
  'Александр'
];

const LAST_NAMES = [
  'Смит',
  'Джонс',
  'Браун',
  'Джексон',
  'Грин',
  'Робертс'
];

const createCommentMessage = () => {
  const MESSAGE = [];
  for (let i = 1; i <= getRandomIntInclusive(1, 2); i++) {
    MESSAGE.push(getRandomArrayElement(COMMENT_TEXTS));
  }
  return MESSAGE.join(' ');
};

const commentId = getUniqueNumber();

const createComment = () => ({
  id: commentId(),
  avatar: `img/avatar-${getRandomIntInclusive(1, 6)}.svg`,
  message: createCommentMessage(),
  name: `${getRandomArrayElement(NAMES)} ${getRandomArrayElement(LAST_NAMES)}`
});

const getComments = () => Array.from({length: getRandomIntInclusive(1, 20)}, createComment);

const userId = getUniqueNumber();
const photoId = getUniqueNumber();

const createUserPhotoDescription = () => ({
  id: userId(),
  url: `photos/${photoId()}.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
  likes: getRandomIntInclusive (15, 200),
  comments: getComments()
});

const getUserPhotoDescriptions = () => Array.from({length: 25}, createUserPhotoDescription);

export {getUserPhotoDescriptions};
