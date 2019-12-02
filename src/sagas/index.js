import { takeEvery, all } from 'redux-saga/effects';
import { HEROES_FETCH } from '../constants/actionsTypes';
import { handleFetchHeroes } from './hero';

function* watchAll() {
  yield all([takeEvery(HEROES_FETCH, handleFetchHeroes)]);
}

export default watchAll;
