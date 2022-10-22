import { ADD_FAVORITE, REMOVE_FAVORITE } from "./type";

export const addFavorite = (payload) => {
  return {
    type: ADD_FAVORITE,
    payload: payload,
  };
};

export const removeFavorite = (payload) => {
  return {
    type: REMOVE_FAVORITE,
    payload: payload,
  };
};
