import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//get all Articles
const allPosts = "http://localhost:8000/api/allPosts";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const response = await axios.get(allPosts);
  console.log(response);
  return response.data.data.sort(
    (dateA, dateB) =>
      new Date(dateB.published_date) - new Date(dateA.published_date)
  );
});

const initialState = {
  postsData: [],
  approvedPostData: [],
  status: "",
};

export const postReducer = createSlice({
  name: "postsData",
  initialState,
  reducers: {
    getApprovedPosts: (state) => {
      state.approvedPostData = state.postsData.filter((ele) => {
        return ele.status == "approved";
      });
    },
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.status = "Pending";
    },

    [getPosts.fulfilled]: (state, action) => {
      state.status = "Fulfilled";
      state.postsData = action.payload;
    },

    [getPosts.rejected]: (state) => {
      state.status = "Rejected";
    },
  },
});

// Action creators are generated for each case reducer function
export const { getApprovedPosts } = postReducer.actions;

export default postReducer.reducer;
