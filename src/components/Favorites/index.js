import React from "react";
import { connect } from "react-redux";
import { getFavorites } from "../../selectors/favorites";
import Hero from "../Hero";

import { Container, HeroesContainer } from "./styles";

const Favorites = ({ heroes }) => (
  <Container>
    <h2>Favorites</h2>
    <HeroesContainer>
      {(heroes || []).map(hero => (
        <Hero key={hero.id} hero={hero} />
      ))}
    </HeroesContainer>
  </Container>
);

const mapStateToProps = state => ({
  heroes: getFavorites(state)
});

export default connect(mapStateToProps)(Favorites);
