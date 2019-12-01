import React from "react";
import Heroes from "../Heroes";

const App = ({ heroes, onFavorite }) => (
  <div>
    <h1>Marvel Superheroes</h1>
    <Heroes heroes={heroes} onFavorite={onFavorite} />
  </div>
);

export default App;
