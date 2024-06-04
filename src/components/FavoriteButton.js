import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "../config";

const BASE_CLASS = "favorite-button";
const FAVORITE_BUTTON_TEXT = "Favorite";
const UNFAVORITE_BUTTON_TEXT = "Unfavorite";

const FavoriteButton = ({ characterId }) => {
  const { favorites, dispatch } = useFavorites();

  const isFavorite = favorites.includes(characterId);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: REMOVE_FAVORITE, payload: characterId });
    } else {
      dispatch({ type: ADD_FAVORITE, payload: characterId });
    }
  };

  return (
    <button onClick={toggleFavorite} className={BASE_CLASS}>
      <img
        src={isFavorite ? "/favorite.svg" : "/not-favorite.svg"}
        width={20}
        alt={isFavorite ? FAVORITE_BUTTON_TEXT : UNFAVORITE_BUTTON_TEXT}
      />
    </button>
  );
};

export default FavoriteButton;
