import { RouteObject } from '../../router/types';
import { useRoutes } from 'react-router-dom';

// 导航守卫组件
const RouterGurad = (routes: RouteObject[]) => {
  const Route = useRoutes(routes);
  return Route;
};

export default RouterGurad;
