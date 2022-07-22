import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

const Login = React.lazy(() => import('@/views/login'));
const Main = React.lazy(() => import('@/views/main'));

const routes:RouteObject[] = [
  {
    path: '/*',
    element: <Navigate to={'/main'} replace={true}/>
  },
  {
    path: '/main',
    element: <Main />,
  },
  {
    path: '/login',
    element: <Login />
  }
];

export { routes };
