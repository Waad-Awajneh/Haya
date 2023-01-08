import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//get all Articles
const allArticles = "http://127.0.0.1:8000/api/articles";

export const getArticles = createAsyncThunk(
  "articles/getArticles",
  async () => {
    const response = await axios.get(allArticles);

    return response.data.data.sort(
      (dateA, dateB) =>
        new Date(dateB.published_date) - new Date(dateA.published_date)
    );
  }
);

const initialState = {
  articlesData: [],
  articleDetail: [],
  recentArticles: [],
  randomArticles: [],
  status: "",
};

export const ArticlesReducer = createSlice({
  name: "matchesData",
  initialState,
  reducers: {
    getArticle: (state, action) => {
      state.articleDetail = state.articlesData.filter((ele) => {
        return ele.article_id == action.payload;
      });
    },
    getRecentArticles: (state, action) => {
      state.recentArticles = state.articlesData.filter((ele) => {
        return ele.article_id != action.payload;
      });
    },
    getRandomArticles: (state, action) => {
      for (let i = 0; i < 3; i++) {
        // console.log(state.articlesData);
        let random = Math.round(Math.random() * 100);
        if (state.randomArticles.indexOf(state.articlesData[random]) !== -1) {
          continue;
        }
        state.randomArticles.push(state.articlesData[random]);
      }
    },
  },
  extraReducers: {
    [getArticles.pending]: (state) => {
      state.status = "Pending";
    },

    [getArticles.fulfilled]: (state, action) => {
      state.status = "Fulfilled";
      state.articlesData = action.payload;
    },

    [getArticles.rejected]: (state) => {
      state.status = "Rejected";
    },
  },
});

// Action creators are generated for each case reducer function
export const { getArticle, getRecentArticles, getRandomArticles } =
  ArticlesReducer.actions;

export default ArticlesReducer.reducer;
