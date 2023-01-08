import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://youtube-v31.p.rapidapi.com/playlistItems",
  params: {
    playlistId: "PLczz3UIGL1XrItEVeri8ZBEyroLdNkjZh",
    part: "snippet",
    maxResults: "50",
    pageToken: "EAAaBlBUOkNESQ",
  },
  headers: {
    "X-RapidAPI-Key": "87c3925208msh4044a3911f7f122p1a8ce2jsn9831101b788f",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchVideo = createAsyncThunk("videoData/fetchVideo", async () => {
  const response = await axios.request(options);
  // console.log(response);
  return response.data.items;
});

const initialState = {
  data: [],
};

export const VideosReducer = createSlice({
  name: "videoData",
  initialState,
  reducers: {
    saveVideos: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: {
    [fetchVideo.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { saveVideos } = VideosReducer.actions;

export default VideosReducer.reducer;
