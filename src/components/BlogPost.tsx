import React from "react";

import { BlogPostData } from "../data/mockData";

interface BlogPostProps {
  post: BlogPostData;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => (
  <article>
    <p className="title">{post.title}</p>
    <iframe
      src={post.src}
      title={post.title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    />
    <p>{post.content}</p>
    <div className="border-line" />
    <p className="title">{"Scripture References"}</p>
    <p>
      {post.scriptures.map((s) => {
        const encodeSearch = encodeURIComponent(s);
        const url = `https://www.biblegateway.com/passage/?search=${encodeSearch}&version=NIV`;
        return (
          <a href={url}>
            <li>{s}</li>
          </a>
        );
      })}
    </p>
    <div className="border-line" />
    <p className="title">{"Sermon Notes"}</p>
    <p>
      {post.notes.map((sentence) => {
        return (
          <>
            <div>{sentence}</div>
            <br />
          </>
        );
      })}
    </p>
  </article>
);

export default BlogPost;
