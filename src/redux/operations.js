import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserInfo, fetchAllCampers } from "../components/api";

export const fetchUserLocation = createAsyncThunk(
  "user/location",
  async (coords, thunkAPI) => {
    const state = thunkAPI.getState();

    if (isUserLocationDetermined(state.user)) {
      console.info("Location has been already determined");
      return thunkAPI.rejectWithValue("Location has been already determined");
    }

    try {
      const data = await getUserInfo(coords);
      return data.results[0];
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

function isUserLocationDetermined(userObject) {
  return (
    (userObject.location.country !== "") | (userObject.location.city !== "")
  );
}

export const fetchCampers = createAsyncThunk(
  "campers/fetch",
  async (_, thunkAPI) => {
    try {
      const data = await fetchAllCampers();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);