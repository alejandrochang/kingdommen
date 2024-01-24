import React from "react";

import { BlogPostData } from "../data/mockData";

interface BlogPostProps {
  post: BlogPostData;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => (
  <article>
    <p className="title">{post.title}</p>
    <img src={post.coverImg} alt={post.title} />
    {/* <iframe
      src={post.src}
      title={post.title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    /> */}
    <p>{post.content}</p>
    <div className="border-line" />
    <p className="title">{"Scripture References"}</p>
    <p>
      {post.scriptures.map(({ verse, day }) => {
        const encodeSearch = encodeURIComponent(verse);
        const url = `https://www.biblegateway.com/passage/?search=${encodeSearch}&version=NIV`;
        return (
          <a href={url}>
            <li>{`${verse} (Day ${day})`}</li>
          </a>
        );
      })}
    </p>
    <div className="border-line" />
    <p className="title">{"Devotional Notes"}</p>
    <a href={post.url}>{`Devotional Link: ${post.title}`}</a>
    <br /><br />
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
