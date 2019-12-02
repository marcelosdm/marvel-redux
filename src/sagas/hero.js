import { call, put } from 'redux-saga/effects';
import { doAddHeroes } from '../actions/hero';
import { fetchHeroes } from '../api/hero';

function* handleFetchHeroes(action) {
  const { query } = action;
  const result = yield call(fetchHeroes, query);
  yield put(doAddHeroes(result.data.results));
}

export { handleFetchHeroes };
