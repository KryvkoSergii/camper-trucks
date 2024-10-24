import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations";

const campersSlice = createSlice({
  name: "campers",
  initialState: { total: 0, items: [] },
  extraReducers: (builder) =>
    builder.addCase(fetchCampers.fulfilled, (state, action) => {
      state.total = action.payload.total;
      state.items = action.payload.items;
    }),
});

export const campersReducer = campersSlice.reducer;
