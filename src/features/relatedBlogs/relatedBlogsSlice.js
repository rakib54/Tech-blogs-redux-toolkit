import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getRelatedBlogs } from "./relatedBlogAPI";

const initialState = {
  isLoading: false,
  blogs: [],
  isError: false,
  error: ''
};

export const fetchRelatedBlogs = createAsyncThunk("fetch/relatedBlogs", async ({ id, tags }) => {
  const blogs = await getRelatedBlogs(id, tags);

  return blogs;
});

const relatedBlogsSlice = createSlice({
  name: "relatedBlogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedBlogs.pending, (state) => {
        state.isLoading = true;
        state.error = ''
      })
      .addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload
        state.error = ''
        state.isError = false;
      })
      .addCase(fetchRelatedBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message
        state.isError = true;
        state.blogs = []
      })
  }
});

export default relatedBlogsSlice.reducer;

