import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const showMoreSlice = createSlice({
  name: "showmore",
  initialState,
  reducers: {
    toggleShowMore: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleShowMore } = showMoreSlice.actions;

export default showMoreSlice.reducer;
