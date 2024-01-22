import React from 'react';
import BlogList from '../components/BlogList';
import { mockData } from '../data/mockData';

const HomePage: React.FC = () => (
  <div className='blog-container'>
    <BlogList posts={mockData.posts} />
  </div>
);

export default HomePage;
