import { useDispatch, useSelector } from "react-redux";
import RelatedPostCard from "./RelatedPostCard";
import { fetchRelatedBlogs } from "../../features/relatedBlogs/relatedBlogsSlice";
import Loading from "../ui/Loading";
import Error from "../ui/Error";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function RelatedPost({ tags }) {
  const { isLoading, blogs, error, isError } = useSelector(
    (state) => state.relatedBlogs
  );

  const dispatch = useDispatch();
  const { blogId } = useParams();

  useEffect(() => {
    dispatch(fetchRelatedBlogs({ id: blogId, tags }));
  }, [dispatch, blogId, tags]);

  // decide what to render
  let content;

  if (isLoading && !isError) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <Error error={error} />;
  }
  if (!isLoading && !isError && blogs.length === 0) {
    content = <div>No related Blogs found!</div>;
  }

  if (!isLoading && !isError && blogs.length > 0) {
    content = blogs?.map((blog) => (
      <RelatedPostCard key={blog.id} blog={blog} />
    ));
  }
  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">{content}</div>
    </aside>
  );
}
