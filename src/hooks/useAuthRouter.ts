import { useEffect, useState } from 'react';
import { NavigateFunction, useLocation, useMatch, useNavigate } from 'react-router-dom';
import { RouteObject } from '../router/types';
import { useAppDispatch } from '../store';
import { setSideMenuList } from '../store/user';
import { handleTailRemove } from '../utils/handle-path';
import { useGetBasicData } from './useGetBasicData';

// 处理路由跳转，当手动跳转main时锁定并跳转至当前用户的第一个菜单路由
const handleDefaultJump = (path: string, menus: any[], navigate: NavigateFunction) => {
  const getTargetPath = (menu: any): any => {
    if (menu?.children && menu?.children[0]) {
      return getTargetPath(menu?.children[0]);
    } else {
      return menu.path;
    }
  };
  const menu = searchMenuDetail(path, menus);
  menu && navigate({ pathname: getTargetPath(menu) }, { replace: true });
};

//递归查询对应的菜单路由
const searchMenuDetail = (path: string, routes: RouteObject[]): any => {
  let targetRoute;
  routes.find((item) => {
    if (item.path === path) {
      targetRoute = item;
      return item;
    }
    if (item.children) {
      targetRoute = searchMenuDetail(path, item.children);
      return targetRoute;
    }
  });
  return targetRoute;
};

interface ISideMenuList {
  label: string;
  key: string;
  children: ISideMenuList[] | null;
}

// 处理侧边菜单数据
const handleSideMenu = (menuList: any[]): ISideMenuList[] => {
  return menuList.map((item) => {
    return { label: item.title, key: item.path, children: item.children ? handleSideMenu(item.children) : null };
  });
};

// 校验路由hook - 作用于 main 下的所有子路由
const useAuthRouter = () => {
  const navigate = useNavigate();
  const routeMatch = useMatch('main');
  const dispatch = useAppDispatch();
  const [isFinish, setIsFinish] = useState(false);
  const { menuList, loginStatus } = useGetBasicData();
  let { pathname } = useLocation();
  useEffect(() => {
    // 未登录则跳转至登录页
    if (!loginStatus) navigate({ pathname: '/login' });

    if (!menuList.length) return;

    if (routeMatch) pathname = (menuList as any)[0].path;
    const menuDetail = searchMenuDetail(handleTailRemove(pathname, '/'), menuList);

    // 未匹配到则跳转至404
    if (!menuDetail) navigate({ pathname: '/404' });

    // 处理默认跳转
    handleDefaultJump(handleTailRemove(pathname, '/'), menuList, navigate);

    dispatch(setSideMenuList(handleSideMenu(menuList)));

    // 修改完成状态 - 完成后才渲染 main 下的 Outlet
    setIsFinish(menuList.length);
  }, [menuList, loginStatus, pathname]);

  return { isFinish };
};

export { useAuthRouter };
