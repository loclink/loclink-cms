import React, { memo } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store/types';
import { useAppDispatch } from '../../store';
import { setMenuCollapsed } from '../../store/user';

const Header: React.FC = memo(() => {
  const { menuCollapsed } = useSelector((state: IRootState) => state.user);
  const dispatch = useAppDispatch();
  const changeCollapsed = () => {
    dispatch(setMenuCollapsed());
  };
  return (
    <>
      {React.createElement(menuCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => changeCollapsed()
      })}
    </>
  );
});

Header.displayName = 'Header';
export default Header;
