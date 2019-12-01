import React from "react";
import Hero from "../Hero";

const Heroes = ({ heroes, onFavorite }) => (
  <div>
    <h2>Heroes</h2>
    {(heroes || []).map(hero => (
      <Hero key={hero.id} hero={hero} onFavorite={onFavorite} />
    ))}
  </div>
);

export default Heroes;
