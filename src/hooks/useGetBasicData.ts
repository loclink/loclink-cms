import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useAppDispath } from '../store';
import { IRootState } from '../store/types';
import { getMenuListAction, getUserInfoAction } from '../store/user';

const useGetBasicData = () => {
  const dispatch = useAppDispath();
  const { pathname } = useLocation();
  const { menuList, userInfo } = useSelector((state: IRootState) => state.user);

  useEffect(() => {
    if (pathname !== '/login') {
      menuList.length || dispatch(getMenuListAction());
      Object.keys(userInfo).length || dispatch(getUserInfoAction());
    }
  }, []);
};

export { useGetBasicData };
