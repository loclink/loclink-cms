import { RouteObject } from '@/router/types';
import { useLocation, useRoutes } from 'react-router-dom';
import React, { useEffect } from 'react';

interface Props {
  routes: RouteObject[];
}

// 导航守卫组件
const RouterGurad: React.FC<Props> = (props: Props) => {
  const { routes } = props;
  const Route = useRoutes(routes);
  const { pathname } = useLocation();
  useEffect(() => {
    console.log('%c [ RouterGurad ]-16', 'font-size:13px; background:pink; color:#bf2c9f;', 'RouterGurad');
  }, [pathname]);
  return <>{Route}</>;
};

export default RouterGurad;
