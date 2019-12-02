import { HEROES_ADD } from '../constants/actionsTypes';

const INITIAL_STATE = [];

const applyAddHeroes = (state, action) => action.heroes;

function heroReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case HEROES_ADD: {
      return applyAddHeroes(state, action);
    }
    default:
      return state;
  }
}

export default heroReducer;
