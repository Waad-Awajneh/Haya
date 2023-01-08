import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//get all Articles
const allExpectation = "http://localhost:8000/api/expectation";

export const getExpectation = createAsyncThunk(
  "allExpectation/getExpectation",
  async () => {
    const response = await axios.get(allExpectation);
    console.log(response.data.data);
    return response.data.data.sort(
      (dateA, dateB) => new Date(dateB.created_at) - new Date(dateA.created_at)
    );
  }
);

const initialState = {
  expectations: [],

  status: "",
};

export const ExpectationReducer = createSlice({
  name: "expectationData",
  initialState,
  reducers: {},
  extraReducers: {
    [getExpectation.pending]: (state) => {
      state.status = "Pending";
    },

    [getExpectation.fulfilled]: (state, action) => {
      state.status = "Fulfilled";
      state.articlesData = action.payload;
    },

    [getExpectation.rejected]: (state) => {
      state.status = "Rejected";
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = ExpectationReducer.actions;

export default ExpectationReducer.reducer;
