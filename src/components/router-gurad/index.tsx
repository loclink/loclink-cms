import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RouteObject, useRoutes, useMatch, useNavigate } from 'react-router-dom';
import { useAppDispath } from '@/store';
import { IRootState } from '@/store/types';
import { getCache } from '@/utils/cache';
import { IResponseData } from '@/service/types';
import { getUserInfoAction, setAuthToken } from '@/store/user';

const RouterGurad = (routes: RouteObject[]) => {
  const routeElement = useRoutes(routes);
  const dispatch = useAppDispath();
  const navigate = useNavigate();
  const isLoginRoute = useMatch('/login');
  const { authToken, menuList } = useSelector((state: IRootState) => state.user);
  console.log(menuList);

  useEffect(() => {
    if (!isLoginRoute) {
      if (authToken) {
        dispatch(getUserInfoAction()).then((res) => {
          if ((res.payload as IResponseData).code === 10401) {
            navigate({ pathname: '/login' }, { replace: true });
          }
        });
      } else {
        const token = getCache('token');
        dispatch(setAuthToken(token));
      }
    }

    // 获取菜单列表数据
  }, [authToken]);
  return routeElement;
};

export default RouterGurad;
