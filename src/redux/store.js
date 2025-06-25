import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counter/counterSlice";
import showMoreSlice from "../counter/showMoreSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    showmore: showMoreSlice,
  },
});
