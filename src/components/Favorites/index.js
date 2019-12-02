import React from 'react';
import { connect } from 'react-redux';
import { getFavorites } from '../../selectors/favorites';
import Hero from '../Hero';

const Favorites = ({ heroes }) => (
  <div>
    <h2>Favorites</h2>
    {(heroes || []).map(hero => (
      <Hero key={hero.id} hero={hero} />
    ))}
  </div>
);

const mapStateToProps = state => ({
  heroes: getFavorites(state)
});

export default connect(mapStateToProps)(Favorites);
