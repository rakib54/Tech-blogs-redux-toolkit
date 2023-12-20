import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../features/blogs/blogsSlice";
import singleBlogReducer from "../features/blog/singleBlogSlice";
import relatedBlogsReducer from "../features/relatedBlogs/relatedBlogsSlice";
import filterBlogReducer from "../features/filter/filterBlogSlice";

const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: singleBlogReducer,
    relatedBlogs: relatedBlogsReducer,
    filter: filterBlogReducer
  }
});

export default store;