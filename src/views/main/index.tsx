import React, { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispath } from '../../store';
import { IRootState } from '../../store/types';
import { getMenuListAction } from '../../store/user';

const Main = memo(() => {
  const dispatch = useAppDispath();
  const { menuList } = useSelector((state: IRootState) => state.user);
  useEffect(() => {
    menuList.length || dispatch(getMenuListAction());
  }, [menuList]);
  return <div>Main</div>;
});

Main.displayName = 'Main';
export default Main;
