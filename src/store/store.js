import { configureStore } from "@reduxjs/toolkit";
import firstReducer from "./firstSlice";
import secondReducer from "./secondSlice";

const store = configureStore({
  reducer: {
    first: firstReducer,
    second: secondReducer,
  },
});

export default store;
