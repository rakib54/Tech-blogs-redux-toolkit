import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getSingleBlog } from "./singleBlogAPI";

const initialState = {
  isLoading: false,
  blog: {},
  isError: false,
  error: ''
};

export const fetchSingleBlog = createAsyncThunk("fetch/blog", async ({ id }) => {
  const blogs = await getSingleBlog(id);

  return blogs;
});

const singleBlogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleBlog.pending, (state) => {
        state.isLoading = true;
        state.error = ''
      })
      .addCase(fetchSingleBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blog = action.payload
        state.error = ''
        state.isError = false;
      })
      .addCase(fetchSingleBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message
        state.isError = true;
        state.blog = {}
      })
  }
});

export default singleBlogSlice.reducer;

