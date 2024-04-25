import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstArray: [],
  firstObject: {
    a: 1,
    b: "2",
    c: false,
  },
  firstBoolean: true,
};

const firstSlice = createSlice({
  name: "first",
  initialState,
  reducers: {
    setFirstArray: (state, action) => {
      state.firstArray = [...action.payload];
    },
    setFirstObject: (state, action) => {
      state.firstObject = { ...action.payload };
    },
    setFirstBoolean: (state, action) => {
      state.firstBoolean = action.payload;
    },
  },
});

export const { setFirstArray, setFirstObject, setFirstBoolean } =
  firstSlice.actions;

export default firstSlice.reducer;
