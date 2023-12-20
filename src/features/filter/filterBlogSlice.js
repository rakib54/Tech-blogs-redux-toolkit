import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  filterStatus: "All",
  sortStatus: "default"
}

const filterBlogsSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterByStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
    sortByStatus: (state, action) => {
      state.sortStatus = action.payload;
    },
  }
});

export default filterBlogsSlice.reducer;
export const { filterByStatus, sortByStatus } = filterBlogsSlice.actions;