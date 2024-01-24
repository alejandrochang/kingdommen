import React from 'react';

import BlogPost from '../components/BlogPost';
import { useParams } from 'react-router-dom';
import { mockData } from '../data/mockData';

const PostPage: React.FC = () => {
  const { devoId } = useParams<{ devoId: string }>();
  const post = mockData.posts.find(p => p.id.toString() === devoId);

  return (
    <div className='article-container'>
      {post ? <BlogPost post={post} /> : <p>Post not found.</p>}
    </div>
  );
};

export default PostPage;
