import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";
import { filtersReducer } from "./filterSlice";
import { campersReducer } from "./campersSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    filters: filtersReducer,
    campers: campersReducer
  },
});
