import { HEROES_ADD, HEROES_FETCH } from '../constants/actionsTypes';

const doAddHeroes = heroes => ({
  type: HEROES_ADD,
  heroes
});

const doFetchHeroes = query => ({
  type: HEROES_FETCH,
  query
});

export { doAddHeroes, doFetchHeroes };
