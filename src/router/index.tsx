import React from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from './types';

const Login = React.lazy(() => import('@/views/login'));
const Main = React.lazy(() => import('@/views/main'));

const Blog = React.lazy(() => import('@/views/main/blog'));
const System = React.lazy(() => import('@/views/main/system'));

const Overview = React.lazy(() => import('@/views/main/overview'));
const Skill = React.lazy(() => import('@/views/main/overview/skill'));

const Article = React.lazy(() => import('@/views/main/blog/article'));
const ArticleTag = React.lazy(() => import('@/views/main/blog/article-tag'));

const User = React.lazy(() => import('@/views/main/system/user'));
const Menu = React.lazy(() => import('@/views/main/system/menu'));
const Role = React.lazy(() => import('@/views/main/system/role'));

const NotFound = React.lazy(() => import('@/views/not-found'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'/main'} replace={true} />
  },

  {
    path: '/main',
    element: <Main />,
    children: [
      {
        path: '/main/overview',
        element: <Overview />,
        children: [
          {
            path: '/main/overview/skill',
            element: <Skill />
          }
        ]
      },
      {
        path: '/main/blog',
        element: <Blog />,
        children: [
          {
            path: '/main/blog/article',
            element: <Article />
          },
          {
            path: '/main/blog/article-tag',
            element: <ArticleTag />
          }
        ]
      },
      {
        path: '/main/system',
        element: <System />,
        children: [
          {
            path: '/main/system/user',
            element: <User />
          },
          {
            path: '/main/system/role',
            element: <Role />
          },
          {
            path: '/main/system/menu',
            element: <Menu />
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },

  {
    path: '*',
    element: <NotFound />
  }
];

export { routes };
