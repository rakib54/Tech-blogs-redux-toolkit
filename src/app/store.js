import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../features/blogs/blogsSlice";
import singleBlogReducer from "../features/blog/singleBlogSlice";
import relatedBlogsReducer from "../features/relatedBlogs/relatedBlogsSlice";

const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: singleBlogReducer,
    relatedBlogs: relatedBlogsReducer
  }
});

export default store;