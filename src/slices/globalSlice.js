import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  selectedCategory: null,
};

export const globalSlice = createSlice({
  name: "globalSlice",
  initialState,
  reducers: {
    onSelectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { onSelectCategory } = globalSlice.actions;
export default globalSlice.reducer;
