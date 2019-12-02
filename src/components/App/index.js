import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Heroes from '../Heroes';
import SearchHeroes from '../SearchHeroes';

const App = () => (
  <div>
    <h1>Marvel Superheroes</h1>
    <SearchHeroes />
    <Heroes />
  </div>
);

export default App;
