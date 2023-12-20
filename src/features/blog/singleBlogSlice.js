import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getSingleBlog, updateSingleBlog, updateSingleBlogLike } from "./singleBlogAPI";

const initialState = {
  isLoading: false,
  blog: {},
  isError: false,
  error: '',
};

export const fetchSingleBlog = createAsyncThunk("fetch/blog", async ({ id }) => {
  const blogs = await getSingleBlog(id);

  return blogs;
});


export const fetchUpdateBlog = createAsyncThunk("fetch/update", async ({ id, isSaved }) => {
  const blogs = await updateSingleBlog(id, isSaved);

  return blogs;
});

export const fetchUpdateLiked = createAsyncThunk("fetch/updateLike", async ({ id, likes }) => {
  const blogs = await updateSingleBlogLike(id, likes);

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
      .addCase(fetchUpdateBlog.fulfilled, (state) => {
        state.blog.isSaved = !state.blog.isSaved
      })
  }
});

export default singleBlogSlice.reducer;

