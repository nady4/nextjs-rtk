import counterReducer from "./features/counterSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    counterReducer,
  },
});
