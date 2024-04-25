import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  secondArray: [],
  secondObject: {
    a: 1,
    b: "2",
    c: false,
  },
  secondBoolean: true,
  secondNumber: 1,
};

const secondSlice = createSlice({
  name: "second",
  initialState,
  reducers: {
    setSecondArray: (state, action) => {
      state.secondArray = [...action.payload];
    },
    setSecondObject: (state, action) => {
      state.secondObject = { ...action.payload };
    },
    setSecondBoolean: (state) => {
      state.secondBoolean = !state.secondBoolean;
      // state.secondBoolean = action.payload;
    },
    setSecondNumber: (state, action) => {
      state.secondNumber = action.payload;
    },
  },
});

export const {
  setSecondArray,
  setSecondObject,
  setSecondBoolean,
  setSecondNumber,
} = secondSlice.actions;

export default secondSlice.reducer;
