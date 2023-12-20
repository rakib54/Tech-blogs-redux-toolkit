import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getBlogs } from "./blogsAPI"

const initialState = {
  isLoading: false,
  blogs: [],
  isError: false,
  error: '',
};

export const fetchBlogs = createAsyncThunk("fetch/blogs", async ({ filterStatus, sortStatus }) => {
  const blogs = await getBlogs(filterStatus, sortStatus);

  return blogs;
});

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    filterByNewest: (state) => {
      state.blogs?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    },
    filterByMostLiked: (state) => {
      state.blogs?.sort((a, b) => b.likes - a.likes);
    }
  },
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
export const { filterByNewest, filterByMostLiked } = blogsSlice.actions

