import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    ac: false,
    automatic: false,
    kitchen: false,
    tv: false,
    bathroom: false,
    van: false,
    integrated: false,
    alcove: false
  },
  reducers: {
    changeFilter(state, action) {
        state[action.payload.field] = action.payload.value;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;