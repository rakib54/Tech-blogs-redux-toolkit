import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getBlogs } from "./blogsAPI"

const initialState = {
  isLoading: false,
  blogs: [],
  isError: false,
  error: ''
};

export const fetchBlogs = createAsyncThunk("fetch/blogs", async () => {
  const blogs = await getBlogs();

  return blogs;
});

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isLoading = true;
        state.error = ''
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload
        state.error = ''
        state.isError = false;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message
        state.isError = true;
        state.blogs = []
      })
  }
});

export default blogsSlice.reducer;

