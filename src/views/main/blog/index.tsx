import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';

const Blog: React.FC = memo(() => {
  return (
    <div>
      <Outlet />
    </div>
  );
});

Blog.displayName = 'Blog';
export default Blog;
