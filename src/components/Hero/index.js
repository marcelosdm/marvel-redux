import React from 'react';
import { connect } from 'react-redux';
import { doFavoriteHero } from '../../actions/favorite';

import { Container, HeroBox } from './styles';

const Hero = ({ hero, onFavorite }) => (
  <Container>
    <HeroBox>
      {hero.name} - {hero.description}
      <button type="button" onClick={() => onFavorite(hero)}>
        Add to Favorite
      </button>
    </HeroBox>
  </Container>
);

const mapDispatchToProps = dispatch => ({
  onFavorite: id => dispatch(doFavoriteHero(id))
});

export default connect(null, mapDispatchToProps)(Hero);
