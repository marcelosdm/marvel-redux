import React from 'react';
import { connect } from 'react-redux';
import { doFavoriteHero } from '../../actions/favorite';

import { Container, HeroBox, Picture, Name } from './styles';
import Button from '../../styles/components/Button';

const Hero = ({ hero, onFavorite }) => {
  const picture = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;
  return (
    <Container>
      <HeroBox>
        <Picture src={picture} alt={hero.name} />
        <Name>{hero.name}</Name>

        <Button color="danger" type="button" onClick={() => onFavorite(hero)}>
          Add to Favorite
        </Button>
      </HeroBox>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  onFavorite: id => dispatch(doFavoriteHero(id))
});

export default connect(null, mapDispatchToProps)(Hero);
