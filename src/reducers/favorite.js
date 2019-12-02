import { HERO_FAVORITE } from '../constants/actionsTypes';

const INITIAL_STATE = [];

const applyFavoriteHero = (state, action) => [...state, action.favorites];

function favoriteReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case HERO_FAVORITE: {
      return applyFavoriteHero(state, action);
    }
    default:
      return state;
  }
}

export default favoriteReducer;
