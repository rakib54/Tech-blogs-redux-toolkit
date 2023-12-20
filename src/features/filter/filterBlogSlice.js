import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isSaved: false,
  newest: false,
  mostLiked: false,
  defaultState: true
}

const filterBlogsSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterBySaved: (state, action) => {
      state.isSaved = action.payload;
    },
    filterByNewest: (state) => {
      state.newest = true;
      state.mostLiked = false;
      state.defaultState = false;
    },
    filterByMostLiked: (state) => {
      state.mostLiked = true
      state.newest = false
      state.defaultState = false
    },
    filterByDefault: (state) => {
      state.defaultState = true
      state.newest = false;
      state.mostLiked = false;
    }
  }
});

export default filterBlogsSlice.reducer;
export const { filterBySaved, filterByAll, filterByNewest, filterByMostLiked, filterByDefault } = filterBlogsSlice.actions;