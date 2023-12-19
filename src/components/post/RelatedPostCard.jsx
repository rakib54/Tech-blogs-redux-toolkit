import { Link } from "react-router-dom";

export default function RelatedPostCard({ blog }) {
  const { image, title, createdAt, tags, id } = blog;

  return (
    <div className="card">
      <Link to={`/blog/${id}`}>
        <img src={image} className="card-image" alt="" />
      </Link>
      <div className="p-4">
        <Link
          to={`/blog/${id}`}
          className="text-lg post-title lws-RelatedPostTitle"
        >
          {title}
        </Link>
        <div className="mb-0 tags">
          {tags?.map((tag, i) => (
            <span key={i}>#{tag}</span>
          ))}
        </div>
        <p>{createdAt}</p>
      </div>
    </div>
  );
}
