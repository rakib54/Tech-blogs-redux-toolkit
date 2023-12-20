import React, { useEffect } from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../features/blogs/blogsSlice";
import Loading from "../ui/Loading";
import Error from "../ui/Error";

export default function Posts() {
  const { isLoading, blogs, error, isError } = useSelector(
    (state) => state.blogs
  );
  const { isSaved, newest, mostLiked, defaultState } = useSelector(
    (state) => state.filter
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch, isSaved]);

  // decide what to render
  let content;

  if (isLoading && !isError) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <Error error={error} />;
  }
  if (!isLoading && !isError && blogs?.length === 0) {
    content = <div>No blogs found!</div>;
  }

  if (!isLoading && !isError && blogs?.length > 0) {
    content = blogs?.map((blog) => <Post key={blog.id} blog={blog} />);
  }

  if (!isLoading && !isError && blogs?.length > 0 && isSaved) {
    const savedBlog = blogs?.filter((blog) => blog.isSaved === true);
    content = savedBlog?.map((blog) => <Post key={blog.id} blog={blog} />);
  }

  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  );
}
