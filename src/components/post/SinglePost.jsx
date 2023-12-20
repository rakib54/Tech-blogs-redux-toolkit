import { useDispatch } from "react-redux";
import {
  fetchUpdateBlog,
  fetchUpdateLiked,
} from "../../features/blog/singleBlogSlice";
import { useState } from "react";

export default function SinglePost({ blog }) {
  const { id, image, title, description, tags, likes, isSaved } = blog;

  const dispatch = useDispatch();
  const [saved, setSaved] = useState(isSaved);
  const [liked, setLiked] = useState(likes);

  const handleSave = () => {
    setSaved((prev) => !prev);
    dispatch(fetchUpdateBlog({ id, isSaved }));
  };
  const handleLiked = () => {
    setLiked((prev) => prev + 1);
    dispatch(fetchUpdateLiked({ id, likes }));
  };

  return (
    <main className="post">
      <img
        src={image}
        alt="github"
        className="w-full rounded-md"
        id="lws-megaThumb"
      />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="tags" id="lws-singleTags">
          {tags?.map((tag, i) => (
            <span key={i}>
              #{tag}
              {i < tags.length - 1 && ", "}
            </span>
          ))}
        </div>
        <div className="btn-group">
          <button
            onClick={handleLiked}
            className={`like-btn ${likes && "active"}`}
            id="lws-singleLinks"
          >
            <i className="fa-regular fa-thumbs-up"></i> {liked}
          </button>
          <button
            onClick={handleSave}
            className={`${saved && "active"} save-btn`}
            id="lws-singleSavedBtn"
          >
            <i className="fa-regular fa-bookmark"></i>{" "}
            {saved ? "Saved" : "Save"}
          </button>
        </div>
        <div className="mt-6">
          <p>{description}</p>
        </div>
      </div>
    </main>
  );
}
