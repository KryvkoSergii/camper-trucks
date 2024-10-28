import { createSlice } from "@reduxjs/toolkit";
import { fetchByQueryCampers } from "./operations";

const handlePending = (state) => {
  state.loading = true;
};

const updateCampersState = (state, action) => {
  if (action && action.payload) {
    state.total = action.payload.total;
    state.items = action.payload.items;
  } else {
    state.total = 0;
    state.items = [];
  }
};

const handleReject = (state) => {
  state.total = 0;
  state.items = [];
};

const campersSlice = createSlice({
  name: "campers",
  initialState: { total: 0, items: [] },
  extraReducers: (builder) =>
    builder
      // .addCase(fetchCampers.pending, (state, action) => {})
      // .addCase(fetchCampers.fulfilled, updateCampersState)
      // .addCase(fetchCampers.rejected, handleReject)

      .addCase(fetchByQueryCampers.pending, (state, action) => {})
      .addCase(fetchByQueryCampers.fulfilled, updateCampersState)
      .addCase(fetchByQueryCampers.rejected, handleReject),
});

export const campersReducer = campersSlice.reducer;
