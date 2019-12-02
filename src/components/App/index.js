import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Heroes from '../Heroes';
import SearchHeroes from '../SearchHeroes';
import Navbar from '../Navbar';
import Favorites from '../Favorites';
import NotFavorites from '../NotFavorites';

const App = () => (
  <Router>
    <h1>Marvel Superheroes</h1>
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
