import { createSlice } from "@reduxjs/toolkit";
import { fetchByQueryCampers } from "./operations";

const handlePending = (state) => {
  console.log("start");
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
  state.loading = false;
};

const handleReject = (state) => {
  state.total = 0;
  state.items = [];
  state.loading = false;
};

const campersSlice = createSlice({
  name: "campers",
  initialState: { total: 0, items: [], loading: false },
  extraReducers: (builder) =>
    builder
      .addCase(fetchByQueryCampers.pending, handlePending)
      .addCase(fetchByQueryCampers.fulfilled, updateCampersState)
      .addCase(fetchByQueryCampers.rejected, handleReject),
});

export const campersReducer = campersSlice.reducer;
