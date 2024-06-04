import { ADD_FAVORITE, REMOVE_FAVORITE } from "../config";

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, action.payload];
    case REMOVE_FAVORITE:
      return state.filter((favorite) => favorite.id !== action.payload.id);
    default:
      return state;
  }
};

export default favoritesReducer;
