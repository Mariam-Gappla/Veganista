import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './splices/shoppingcard';
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});