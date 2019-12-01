import React from "react";

const Hero = ({ hero, onFavorite }) => (
  <li>
    {hero.name} - {hero.description}
    <button type="button" onClick={() => onFavorite(hero)}>
      Add to Favorite
    </button>
  </li>
);

export default Hero;
