import { HERO_FAVORITE } from '../constants/actionsTypes';

const doFavoriteHero = favorites => ({
  type: HERO_FAVORITE,
  favorites
});

export { doFavoriteHero };
