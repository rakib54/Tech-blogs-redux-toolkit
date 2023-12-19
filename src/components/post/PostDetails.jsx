import React from "react";
import RelatedPost from "./RelatedPost";
import SinglePost from "./SinglePost";

export default function PostDetails() {
  return (
    <section className="post-page-container">
      <SinglePost />
      <RelatedPost />
    </section>
  );
}
