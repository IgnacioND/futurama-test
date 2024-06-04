import React from "react";
import PropTypes from "prop-types";

import { useFavorites } from "../context/FavoritesContext";
import {
  ADD_FAVORITE,
  FAVORITE_BUTTON_TEXT,
  REMOVE_FAVORITE,
  UNFAVORITE_BUTTON_TEXT,
} from "../config";

const BASE_CLASS = "favorite-button";

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

FavoriteButton.propTypes = {
  characterId: PropTypes.string,
};

export default FavoriteButton;
