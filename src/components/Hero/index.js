import React from 'react';
import { connect } from 'react-redux';
import { doFavoriteHero } from '../../actions/favorite';

const Hero = ({ hero, onFavorite }) => (
  <li>
    {hero.name} - {hero.description}
    <button type="button" onClick={() => onFavorite(hero)}>
      Add to Favorite
    </button>
  </li>
);

const mapDispatchToProps = dispatch => ({
  onFavorite: id => dispatch(doFavoriteHero(id))
});

export default connect(null, mapDispatchToProps)(Hero);
