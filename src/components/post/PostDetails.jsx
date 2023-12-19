import React, { useEffect } from "react";
import RelatedPost from "./RelatedPost";
import SinglePost from "./SinglePost";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../ui/Loading";
import Error from "../ui/Error";
import { fetchSingleBlog } from "../../features/blog/singleBlogSlice";

export default function PostDetails() {
  const { isLoading, blog, error, isError } = useSelector(
    (state) => state.blog
  );
  const dispatch = useDispatch();
  const { blogId } = useParams();

  useEffect(() => {
    dispatch(fetchSingleBlog({ id: blogId }));
  }, [dispatch, blogId]);

  // decide what to render
  let content;

  if (isLoading && !isError) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <Error error={error} />;
  }
  if (!isLoading && !isError && blog.title === undefined) {
    content = <div>Blog Description is Not found!!</div>;
  }

  if (!isLoading && !isError && blog.title) {
    content = <SinglePost blog={blog} />;
  }

  return (
    <section className="post-page-container">
      {content}
      <RelatedPost tags={blog.tags} />
    </section>
  );
}
