import React from 'react';
import { Navigate } from 'react-router-dom';
import { MyRoutes } from './types';

const Login = React.lazy(() => import('@/views/login'));
const Main = React.lazy(() => import('@/views/main'));
const Blog = React.lazy(() => import('@/views/main/blog'));
const System = React.lazy(() => import('@/views/main/system'));
const Menu = React.lazy(() => import('@/views/main/system/menu'));

const NotFound = React.lazy(() => import('@/views/not-found'));

const routes: MyRoutes[] = [
  {
    path: '/',
    element: <Navigate to={'/main'} replace={true} />
  },
  {
    path: '/main',
    element: <Navigate to={'/main/system'} />
  },
  {
    name: 'main',
    path: '/main',
    children: [
      {
        path: '/main/blog',
        element: <Blog />
      },
      {
        path: '/main/system',
        element: <System />,
        children: [
          {
            path: '/main/system/menu',
            element: <Menu />
          }
        ]
      }
    ],
    element: <Main />
  },
  {
    name: 'login',
    path: '/login',
    element: <Login />
  },

  {
    path: '*',
    element: <NotFound />
  }
];

export { routes };
