import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


//fetch all countries======
const allCountriesUrl =
  "https://apiv3.apifootball.com/?action=get_countries&APIkey=81f3c423a6c0c5ff71667bdbd97b2f9acd6b632d1f672effd14d10405ace9b42";

export const Countries = createAsyncThunk("Countries", async () => {
  const response = await axios.get(allCountriesUrl);
  // console.log(response);
  return response.data;
});
//end feth all countries=====

//fetch all leagues=========
const allLeaguesUrl =
  "https://apiv3.apifootball.com/?action=get_leagues&APIkey=81f3c423a6c0c5ff71667bdbd97b2f9acd6b632d1f672effd14d10405ace9b42";


export const Leagues = createAsyncThunk('Leagues', async () => {
    const response = await axios.get(allLeaguesUrl);
    return response.data;
})
//end fetch all leagues


///////////////   fetch all next matches //////////////////////

// const MatchesUrl = `https://apiv3.apifootball.com/?action=get_events&from=${}&to=${}&league_id=${}&APIkey=81f3c423a6c0c5ff71667bdbd97b2f9acd6b632d1f672effd14d10405ace9b42`
export const DateAndLeague = createAsyncThunk('DateAndLeague' ,async(data) => {
    console.log(data.from);
    console.log(data.To);
    console.log(data.leagueId);
    const response = await axios.get(`https://apiv3.apifootball.com/?action=get_events&from=${data.from}&to=${data.To}&league_id=${data.leagueId}&APIkey=81f3c423a6c0c5ff71667bdbd97b2f9acd6b632d1f672effd14d10405ace9b42`);
    console.log(response.data);
    return response.data;
})


///////////////// fetch all previous matches ///////////////////
export const previousMatches = createAsyncThunk('previousMatches', async(myObject) => {
    const response = await axios.get(`https://apiv3.apifootball.com/?action=get_events&from=${myObject.previous}&to=${myObject.current}&league_id=${myObject.id}&APIkey=81f3c423a6c0c5ff71667bdbd97b2f9acd6b632d1f672effd14d10405ace9b42`);
    console.log(response.data);
    return response.data;
})



const initialState = {
  data: [],
  filterData: [],
  isLoading: true,
  leagues: [],
  dateAndLeague:[],
  previousMatches: []
};

export const matchesReducer = createSlice({
  name: "matchesData",
  initialState,
  reducers: {
    saveChange: (state, action) => {
      if (action.payload == "") {
        state.filterData = state.data;
      }
      console.log(action.payload);
      let newArr = state.data.filter((e) => {
        return (
          e.country_name.slice(0, action.payload.length).toLowerCase() ==
          action.payload.toLowerCase()
        );
      });
      if (newArr.length == 0) {
        state.filterData = state.data;
      } else state.filterData = newArr;
    },
    //   increment: (state) => {
    //     state.value += 1
    //   },
  },
  extraReducers: {
    [Countries.fulfilled]: (state, action) => {

      state.data = action.payload;
      state.filterData = action.payload;
      state.isLoading = false;
    },
    [Leagues.fulfilled]: (state, action) => {

        state.leagues = action.payload;
    },
    [DateAndLeague.fulfilled]: (state, action) =>{
        state.dateAndLeague = action.payload;
    },
    [previousMatches.fulfilled]:(state, action) => {
        console.log(action);
        state.previousMatches = action.payload;
    }

  },
});

// Action creators are generated for each case reducer function
export const { saveChange } = matchesReducer.actions;

export default matchesReducer.reducer;
