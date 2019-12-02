import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/';
import store from './store';
import { HERO_FAVORITE } from './constants/actionsTypes';
import { getHeroes } from './selectors/hero';

ReactDOM.render(
  <App
    heroes={getHeroes(store.getState())}
    onFavorite={id => store.dispatch({ type: HERO_FAVORITE, id })}
  />,
  document.getElementById('root')
);
