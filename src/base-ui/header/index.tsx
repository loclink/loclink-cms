import React, { memo } from 'react';
import MainBreadcrumb from './cpns/main-breadcrumb';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

interface Props {
  collapsed: boolean;
  changeCollapsed: () => void;
}

// header 组件
const Header: React.FC<Props> = memo((props: Props) => {
  const { collapsed, changeCollapsed } = props;
  return (
    <>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => changeCollapsed && changeCollapsed()
      })}
      <MainBreadcrumb />
    </>
  );
});

Header.displayName = 'Header';
export default Header;
