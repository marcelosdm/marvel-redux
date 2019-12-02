import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Heroes from '../Heroes';
import SearchHeroes from '../SearchHeroes';
import Navbar from '../Navbar';
import Favorites from '../Favorites';
import NotFavorites from '../NotFavorites';
import GlobalStyles from '../../styles/global-styles';

const App = () => (
  <Router>
    <GlobalStyles />
    <Navbar />
    <SearchHeroes />
    <Switch>
      <Route exact path="/" component={Heroes} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/not-favorites" component={NotFavorites} />
    </Switch>
  </Router>
);

export default App;
