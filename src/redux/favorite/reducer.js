import { ADD_FAVORITE, REMOVE_FAVORITE } from "./type";

const initialState = {
  listFavorite: [],
};

const reducerFavorite = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        listFavorite: [...state.listFavorite, action.payload],
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        listFavorite: state.listFavorite.filter(
          (item) => action.payload.Title !== item.Title
        ),
      };

    default:
      return state;
  }
};

export default reducerFavorite;
