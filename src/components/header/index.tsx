import React, { memo } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

interface Props{
  collapsed: boolean
  changeCollapsed: () => void
}

const Header: React.FC<Props> = memo((props: Props) => {

  const { collapsed, changeCollapsed } = props

  return (
    <>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => changeCollapsed && changeCollapsed()
      })}
    </>
  );
});

Header.displayName = 'Header';
export default Header;
