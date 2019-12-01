import { combineReducers } from "redux";
import heroReducer from "./hero";
import favoriteReducer from "./favorite";

const rootReducer = combineReducers({
  heroState: heroReducer,
  favoriteState: favoriteReducer
});

export default rootReducer;
