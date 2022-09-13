import { ordered as cakeOrdered } from "../cake/cakeSlice";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfIceCreams--;
    },
    restocked: (state, action) => {
      state.numberOfIceCreams += action.payload;
    },
  },
  /*  extraReducers: {
    ["cake/ordered"]: (state, action) => {
      state.numberOfIceCreams--;
    },
  }, */
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state, actions) => {
      state.numberOfIceCreams--;
    });
  },
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
