import React, { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from './types';
import Main from '@/views/main';

// 懒加载方法
const LazyWrapper = (path: string) => {
  const Component = lazy(() => import(`@/views${path}`));
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
};

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/main" />
  },
  {
    path: '/main',
    element: <Main />,
    children: [
      {
        path: '/main/overview',
        element: LazyWrapper('/main/overview'),
        children: [
          {
            path: '/main/overview/skill',
            element: LazyWrapper('/main/overview/skill')
          }
        ]
      },
      {
        path: '/main/blog',
        element: LazyWrapper('/main/blog'),
        children: [
          {
            path: '/main/blog/article',
            element: LazyWrapper('/main/blog/article')
          },
          {
            path: '/main/blog/article-tag',
            element: LazyWrapper('/main/blog/article-tag')
          }
        ]
      },
      {
        path: '/main/system',
        element: LazyWrapper('/main/system'),
        children: [
          {
            path: '/main/system/user',
            element: LazyWrapper('/main/system/user')
          },
          {
            path: '/main/system/role',
            element: LazyWrapper('/main/system/role')
          },
          {
            path: '/main/system/menu',
            element: LazyWrapper('/main/system/menu')
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    element: LazyWrapper('/login')
  },

  {
    path: '*',
    element: LazyWrapper('/not-found')
  }
];

export { routes };
