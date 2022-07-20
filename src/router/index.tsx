import React from 'react';
import { Navigate } from 'react-router-dom';

const Login = React.lazy(() => import('@/views/login'));
const Main = React.lazy(() => import('@/views/main'));

const routes = [
  {
    path: '/*',
    element: <Navigate to={'/main'} />
  },
  {
    path: '/main',
    element: <Main />
  },
  {
    path: '/login',
    element: <Login />
  }
];

export { routes };
