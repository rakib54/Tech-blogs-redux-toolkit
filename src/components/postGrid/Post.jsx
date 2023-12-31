import React from "react";
import { Link } from "react-router-dom";

export default function Post({ blog }) {
  const { id, title, image, tags, likes, isSaved, createdAt } = blog;
  let tagContent;
  if (tags?.length <= 3) {
    tagContent = tags?.map((tag, i) => (
      <span key={i}>
        #{tag} {i < tags.length - 1 ? "," : ""}
      </span>
    ));
  }
  if (tags?.length > 3) {
    let updatedTags = tags?.slice(0, 4);
    tagContent = updatedTags?.map((tag, i) => (
      <span key={i}>
        #{tag}
        {i < updatedTags.length - 1 ? "," : ""}
      </span>
    ));
  }

  return (
    <div className="lws-card">
      <Link to={`/blog/${id}`}>
        <img src={image} className="lws-card-image" alt="" />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up"></i> {likes}{" "}
          </p>
        </div>
        <Link
          to={`/blog/${id}`}
          className="lws-postTitle transition duration-300"
        >
          {" "}
          {title}{" "}
        </Link>
        <div className="lws-tags">{tagContent}</div>
        <div className="flex gap-2 mt-4">
          <span className="lws-badge"> {isSaved && "isSaved"} </span>
        </div>
      </div>
    </div>
  );
}
