import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "favorites",
    initialState: {"items": []},
    reducers: {
      addToFavorites(state, action) {
        state.items.push(action.payload);
      },
      removeFromFavorites(state, action) {
        state.items = state.items.filter(val => val != action.payload);
      },
    },
  });
  
  export const { addToFavorites, removeFromFavorites } = filtersSlice.actions;
  export const favoritesReducer = filtersSlice.reducer;