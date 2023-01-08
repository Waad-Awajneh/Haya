import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserData = createAsyncThunk(
  "userProfile/fetchVideo",
  async (options) => {
    const response = await axios.request(options);
    return response.data;
  }
);
const initialState = {
  data: [],
};
export const ProfileReducer = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    saveData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: {
    [fetchUserData.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { saveVideos } = ProfileReducer.actions;

export default ProfileReducer.reducer;
