import { createSlice } from "@reduxjs/toolkit";
import { fetchUserLocation } from "./operations";

const userSlice = createSlice({
  name: "user",
  initialState: { location: { country: "", city: "" } },
  extraReducers: (builder) =>
    builder.addCase(fetchUserLocation.fulfilled, (state, action) => {
      state.location.country = action.payload.components.country;
      state.location.city = action.payload.components.town;
    }),
});

export const userReducer = userSlice.reducer;
