import { createSlice } from "@reduxjs/toolkit";
import { fetchByQueryCampers } from "./operations";

const handlePending = (state, action) => {
  state.page = action.meta.arg.page;
  state.loading = true;
};

const updateCampersState = (state, action) => {
  const page = state.page;
  if (page === 1) {
    if (action && action.payload) {
      state.total = action.payload.total;
      state.items = action.payload.items;
    } else {
      state.total = 0;
      state.items = [];
    }
  } else {
    state.total = action.payload.total;
    action.payload.items.map(it => state.items.push(it));
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
  initialState: { total: 0, items: [], loading: false, page: 0 },
  extraReducers: (builder) =>
    builder
      .addCase(fetchByQueryCampers.pending, handlePending)
      .addCase(fetchByQueryCampers.fulfilled, updateCampersState)
      .addCase(fetchByQueryCampers.rejected, handleReject),
});

export const campersReducer = campersSlice.reducer;
