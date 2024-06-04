import React, { createContext, useReducer, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { ADD_FAVORITE, FAVORITES_KEY, REMOVE_FAVORITE } from "../config";

const FavoritesContext = createContext();

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, action.payload];
    case REMOVE_FAVORITE:
      return state.filter((favorite) => favorite !== action.payload);
    default:
      return state;
  }
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, dispatch] = useReducer(favoritesReducer, [], () => {
    const localData = localStorage.getItem(FAVORITES_KEY);
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
};

FavoritesProvider.propTypes = {
  children: PropTypes.node,
};

export const useFavorites = () => useContext(FavoritesContext);
