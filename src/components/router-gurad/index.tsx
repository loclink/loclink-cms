import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { IRootState } from '../../store/types';
import { setAuthToken } from '../../store/user';
import { getCache } from '../../utils/cache';
import { useRoutes, useNavigate, useLocation, Location, NavigateFunction } from 'react-router-dom';
import { RouteObject } from '../../router/types';
import { useGetBasicData } from '../../hooks/useGetBasicData';
import { useSetToken } from '../../hooks/useSetToken';



//全局路由守卫
const guard = (location: Location, navigate: NavigateFunction, routes: RouteObject[], menuList: []) => {
  const { pathname } = location;
  const mainRoute = routes.find((route) => route.path === '/main');

  if (mainRoute?.children) handleRoute(mainRoute.children, menuList);

  console.log(routes);
  // 处理默认跳转
  handleDefaultJump(pathname, routes, navigate);

  //找到对应的路由信息

  //如果需要权限验证
  // if (!routedetail.auth) {
  //   navigate({
  //     pathname: '/main/not-permission'
  //   });
  // }

  return true;
};

const handleRoute = (routes: RouteObject[], menuList: []) => {
  if (!menuList.length) routes = [];
  if (routes) {
    routes.map((item, index) => {
      const route = searchroutedetail(item.path, menuList);
      if (!route) routes.splice(index, 1);
      if (item.children) {
        handleRoute(item.children, menuList);
      }
    });
  }
};

// 处理路由跳转，当手动跳转main时锁定并跳转至第一个子路由
const handleDefaultJump = (path: string, routes: RouteObject[], navigate: NavigateFunction) => {
  const getTargetPath = (router: RouteObject): any => {
    if (router?.children && router?.children[0]) {
      return getTargetPath(router?.children[0]);
    } else {
      return router.path;
    }
  };
  
  const currentRoute = searchroutedetail(path, routes);

  if (currentRoute) {
    const targetPath = getTargetPath(currentRoute);
    if (path !== targetPath) {
      navigate({ pathname: targetPath });
    }
  }
};

//递归查询对应的路由
const searchroutedetail = (path: string, routes: RouteObject[]): any => {
  let targetRoute;
  routes.find((item) => {
    if (item.path === path) {
      targetRoute = item;
      return item;
    }
    if (item.children) {
      targetRoute = searchroutedetail(path, item.children);
    }
  });
  return targetRoute;
};

// 导航守卫组件
const RouterGurad = (routes: RouteObject[]) => {
  const location = useLocation();
  const navigate = useNavigate();
  const Route = useRoutes(routes);
  const { menuList } = useSelector((state: IRootState) => state.user);
  useSetToken();
  useGetBasicData();

  useEffect(() => {
    guard(location, navigate, routes, menuList);
  }, [location, navigate, routes, menuList]);

  return Route;
};

export default RouterGurad;
