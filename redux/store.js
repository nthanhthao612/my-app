import { combineReducers, configureStore } from "@reduxjs/toolkit";

import productsReducer from "./productReducer";
import promotionReducer from "./promotionReducer";
import messageReducer from "./messageReducer";

const reducer = combineReducers({
  products: productsReducer,
  promotions: promotionReducer,
  messages: messageReducer
});

export default configureStore({
  reducer,
});
