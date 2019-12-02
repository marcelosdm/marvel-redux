import React from 'react';
import { connect } from 'react-redux';
import { getHeroes } from '../../selectors/hero';
import Hero from '../Hero';

import { Container, HeroesContainer } from './styles';

const Heroes = ({ heroes }) => (
  <Container>
    <h2>Heroes</h2>
    <HeroesContainer>
      {(heroes || []).map(hero => (
        <Hero key={hero.id} hero={hero} />
      ))}
    </HeroesContainer>
  </Container>
);

const mapStateToProps = state => ({
  heroes: getHeroes(state)
});

export default connect(mapStateToProps)(Heroes);
