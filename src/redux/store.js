import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import reducer from "./combineReducers";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import hardSet from "redux-persist/es/stateReconciler/hardSet";

const logger = createLogger({});

const persistConfig = {
  key: "root_primary",
  storage,
  whitelist: ["reducerFavorite"],
  stateReconciler: hardSet,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const middleware = applyMiddleware(thunk, logger);

let store = createStore(persistedReducer, {}, middleware);

let persistor = persistStore(store);

export { persistor, store };
