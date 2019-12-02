import React from 'react';
import { connect } from 'react-redux';
import { getHeroes } from '../../selectors/hero';
import Hero from '../Hero';

const Heroes = ({ heroes }) => (
  <div>
    <h2>Heroes</h2>
    {(heroes || []).map(hero => (
      <Hero key={hero.id} hero={hero} />
    ))}
  </div>
);

const mapStateToProps = state => ({
  heroes: getHeroes(state)
});

export default connect(mapStateToProps)(Heroes);
