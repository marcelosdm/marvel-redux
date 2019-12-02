import md5 from 'js-md5';

const PUBLIC_KEY = process.env.REACT_APP_PUBLIC;
const PRIVATE_KEY = process.env.REACT_APP_PRIVATE;
const timestamp = Number(new Date());
const hash = md5.create();
hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);
const query = '';

const MARVEL_BASE_URL = `https://gateway.marvel.com:443/v1/public/characters?limit=10&nameStartsWith=${query}`;

const URL_PARAMS = `&ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`;

const fetchHeroes = query =>
  fetch(MARVEL_BASE_URL + query + URL_PARAMS).then(response => response.json());

export { fetchHeroes };
