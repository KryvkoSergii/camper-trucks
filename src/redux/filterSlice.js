import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  AC: false,
  automatic: false,
  kitchen: false,
  TV: false,
  bathroom: false,
  form: undefined,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    changeFilter(state, action) {
      state[action.payload.field] = action.payload.value;
    },
    resetFilter(state) {
      for (const [key, value] of Object.entries(initialState)) {
        state[key] = value;
      }
    },
  },
});

export const { changeFilter, resetFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
