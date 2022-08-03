import React, { memo, useEffect, useState } from 'react';
import { Menu } from 'antd';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store/types';
import { useLocation, useNavigate } from 'react-router-dom';
import { handleTailRemove } from '../../utils/handle-path';
import { handleCurrentOpenMenu } from '../../utils/menu-map';

// 侧边菜单组件
const SideMenu = memo(() => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [currentOpenKey, setCurrentOpenKey] = useState<any[]>([]);
  const finalPathName = handleTailRemove(pathname, '/');
  const { sideMenuList } = useSelector((state: IRootState) => state.user);
  const [currentKey, setCurrentKey] = useState<string[]>([finalPathName]);

  // 点击菜单
  const handleClickMenu = (menuObj: any) => {
    navigate({ pathname: menuObj.key });
  };

  // 展开或收缩菜单
  const handleOpenChange = (keys: string[]) => {
    setCurrentOpenKey(keys);
  };

  useEffect(() => {
    if (!sideMenuList.length) return;
    setCurrentKey([finalPathName]);
    setCurrentOpenKey([handleCurrentOpenMenu(sideMenuList, finalPathName)?.key] ?? ['']);
  }, [pathname, sideMenuList]);

  return (
    <>
      <Menu
        items={sideMenuList}
        mode="inline"
        theme={'dark'}
        defaultSelectedKeys={currentKey}
        defaultOpenKeys={currentOpenKey}
        openKeys={currentOpenKey}
        selectedKeys={currentKey}
        onClick={handleClickMenu}
        onOpenChange={handleOpenChange}
      ></Menu>
    </>
  );
});

SideMenu.displayName = 'SideMenu';
export default SideMenu;
