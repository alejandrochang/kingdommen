import React from "react";
import { BlogListProps } from "../data/mockData";

const BlogList: React.FC<BlogListProps> = ({ posts }) => (
  <div className="blog-post-container">
    {posts.map(({ id, title, content, coverImg, series }) => (
      <div key={id} className="blog-post" onClick={() => window.location.href = `/devo/${id}`}>
        <img src={coverImg} alt={title} />
        <div className="blog-content">
          <p className="title">{title}</p>
          <p>{series}</p>
          <br />
          <p>{content}</p>
        </div>
      </div>
    ))}
  </div>
);

export default BlogList;
