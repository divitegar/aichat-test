import { combineReducers } from "redux";
import reducerFavorite from "./favorite/reducer";

const rootReducer = combineReducers({
  reducerFavorite,
});

export default rootReducer;
