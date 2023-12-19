import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../features/blogs/blogsSlice";
import singleBlogReducer from "../features/blog/singleBlogSlice";

const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: singleBlogReducer
  }
});

export default store;