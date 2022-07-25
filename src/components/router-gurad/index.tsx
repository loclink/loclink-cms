import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RouteObject, useRoutes, useMatch, useNavigate } from 'react-router-dom';
import { useAppDispath } from '@/store';
import { IRootState } from '@/store/types';
import { getCache } from '@/utils/cache';
import { setAuthToken } from '@/store/user';

const RouterGurad = (routes: RouteObject[]) => {
  const routeElement = useRoutes(routes);
  const dispatch = useAppDispath();
  const navigate = useNavigate();
  const isLoginRoute = useMatch('/login');
  const { authToken, menuList } = useSelector((state: IRootState) => state.user);

  useEffect(() => {
    if (!isLoginRoute) {
      const token = authToken || getCache('token');
      if (token) {
        dispatch(setAuthToken(token));
      } else {
        navigate({ pathname: '/login' });
      }
    }
  }, [authToken, isLoginRoute, menuList]);
  return routeElement;
};

export default RouterGurad;
